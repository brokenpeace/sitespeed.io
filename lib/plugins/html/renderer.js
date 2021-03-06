'use strict';

const pug = require('pug'),
  path = require('path');

const basePath = path.resolve(__dirname, 'templates');

const templateCache = {};

function getTemplate(templateName) {
  if (!templateName.endsWith('.pug')) templateName = templateName + '.pug';

  const template = templateCache[templateName];
  if (template) {
    return template;
  }

  const filename = path.resolve(basePath, templateName);
  const renderedTemplate = pug.compileFile(filename);

  templateCache[templateName] = renderedTemplate;
  return renderedTemplate;
}

module.exports = {
  renderTemplate(templateName, locals) {
    return getTemplate(templateName)(locals);
  }
};
