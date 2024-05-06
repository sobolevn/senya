const { computeCSS, readConfigValue } = require('./config')
const minimal = require('./minimal')

exports.decorateBrowserOptions = (defaults) => {
  return minimal.hideControls(defaults)
}

exports.getTabsProps = (parentProps, props) => {
  return minimal.hideTabSpace(parentProps, props)
}

exports.decorateConfig = (config) => {
  // TODO: support dark mode

  // Minimal UI
  // ==========
  config = minimal.hideTitle(config)

  // Theme config
  // ============

  const configDefaults = {
    'padding': '12px 14px',
    'showWindowControls': 'true',
  }
  const configValues = {}
  for (let configValue in configDefaults) {
    configValues[configValue] = readConfigValue(
      config,
      configValue,
      configDefaults[configValue],
    )
  }

  Object.assign(configValues, {
    'css': computeCSS(config),

    'foregroundColor': 'black',
    'backgroundColor': 'white',
    'borderColor': 'white',
    'selectionColor': 'rgb(102, 102, 102)',
    'cursorColor': 'grey',

    'colors': {
      'black': '#0A0E14',
      'red': 'rgb(151, 4, 12)',
      'green': 'rgb(23, 164, 26)',
      'yellow': 'rgb(153, 152, 29)',
      'blue': 'rgb(5, 22, 175)',
      'magenta': 'rgb(177, 25, 176)',
      'cyan': 'rgb(26, 166, 177)',
      'white': 'rgb(191, 191, 191)',
      // This is not really `light` this is more like `bold`:
      'lightBlack': '#0A0E14',
      'lightRed': 'rgb(227, 10, 23)',
      'lightGreen': 'rgb(33, 215, 38)',
      'lightYellow': 'rgb(229, 228, 49)',
      'lightBlue': 'rgb(11, 38, 251)',
      'lightMagenta': 'rgb(227, 35, 227)',
      'lightCyan': 'rgb(39, 229, 228)',
      'lightWhite': 'rgb(230, 229, 230)',
    },
  })

  return Object.assign({}, config, configValues)
}
