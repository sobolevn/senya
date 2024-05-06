exports.readConfigValue = (config, attrName, defaultValue) => {
  return config.hasOwnProperty(attrName) ? config[attrName] : defaultValue
}

exports.computeCSS = (config) => {
  return `
    ${config.css || ''}

    /* Make tab names visible */
    .tab_tab.tab_active > .tab_text {
      color: black;
    }

    .tab_tab > .tab_text {
      color: grey;
    }

    /* Remove search bar border */
    .search-container .search-box:focus-within {
      outline: white solid 1px;
    }

    /* hyper-search support */
    .search-box {
      font-family: monospace;
    }
  `
}
