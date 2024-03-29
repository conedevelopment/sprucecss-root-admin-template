const moment = require('moment');

module.exports = (value, locale) => {
  moment.locale(locale);
  const dateObject = moment(value);
  return dateObject.format('LL HH:mm');
};
