Package.describe({
  name: 'jss:icheck',
  version: '1.0.2',
  summary: 'Highly customizable checkboxes and radio buttons',
  git: 'https://github.com/JSSolutions/iCheck',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'jquery',
    'templating'
  ], 'client');

  api.addFiles([
    'i-check.html',
    'i-check.js',
    'icheck.js',
    'custom.css'
  ], 'client');

  api.addAssets([
    'green.png',
    'green@2x.png'
  ], 'client');
});

