var path = require('path');

module.exports = {
  renderers: {
    markdown: 'Markdown',
    style: 'Style',
    demo: 'Demo'
  },
  jsTemplate: path.join(__dirname, './react-template.jstpl'),
};