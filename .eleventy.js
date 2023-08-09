require('dotenv').config();

const { parse, stringify } = require('himalaya');
const dateFilter = require('./src/filters/date.js');
const Image = require('@11ty/eleventy-img');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const w3DateFilter = require('./src/filters/w3-date.js');

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
  config.addFilter('date', dateFilter);
  config.addFilter('w3Date', w3DateFilter);

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
