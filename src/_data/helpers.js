module.exports = {
  /**
   * Returns back some attributes based on whether the
   * link is active or a parent of an active item.
   * From: https://learneleventyfromscratch.com/
   *
   * @param {String} itemUrl The link in question
   * @param {String} pageUrl The page context
   * @returns {String} The attributes or empty
   */
  getLinkActiveState(itemUrl, pageUrl) {
    let response = '';

    if (itemUrl === pageUrl) {
      response = ' aria-current="page"';
    }

    if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
      response += ' data-state="active"';
    }

    return response;
  },

  /**
   * Return a boolean or a string value based on an active descendant element.
   * @param {Object} block
   * @param {String} pageUrl
   * @param {Boolean} logical
   * @returns
   */
  getLinkActiveParent(block, pageUrl, logical = true) {
    let response = '';
    let found = false;

    found = block.items.find(element => element.url === pageUrl);

    if (block.expanded === true) {
      found = true;
    }

    if (!logical) {
      return response = found ? 'open' : 'closed';
    }

    return response = found ? true : false;
  },
};
