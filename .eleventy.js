require('dotenv').config();

const { parse, stringify } = require('himalaya');
const dateFilter = require('./src/filters/date-filter.js');
const htmlMinTransform = require('./src/transforms/html-min-transform.js');
const Image = require('@11ty/eleventy-img');
const isProduction = process.env.NODE_ENV === 'production';
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const w3DateFilter = require('./src/filters/w3-date-filter.js');

function addPrefixToIdsAndUrls(str, prefix) {
  const regexId = /id=(["'])(.*?)\1/g;
  const regexUrl = /url\((.*?)\)/g;

  str = str.replace(regexId, `id=$1${prefix}$2$1`);

  str = str.replace(regexUrl, (match, url) => {
    if (url.charAt(0) === '#') {
      return `url(#${prefix}${url.substring(1)})`;
    }
    return match;
  });

  return str;
}

module.exports = config => {
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  config.addPlugin(syntaxHighlight);

  config.addPassthroughCopy('./src/img/**');
  config.addPassthroughCopy('./src/css/**');
  config.addPassthroughCopy('./src/js/**');
  config.addPassthroughCopy('./src/font/**');

  config.addNunjucksAsyncShortcode('svgIcon', async (src, cls = null, prefix = null) => {
    const metadata = await Image(src, {
      formats: ['svg'],
      dryRun: true,
    });
    const svg = parse(metadata.svg[0].buffer.toString());

    svg[0].attributes.push({
      key: 'class',
      value: cls ? cls : 'icon'
    });

    if (prefix) {
      return addPrefixToIdsAndUrls(stringify(svg), prefix);
    }

    return stringify(svg);
  });

  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
