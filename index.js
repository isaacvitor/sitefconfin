const fs = require('fs')
const helpers = require('./util/helper')

// Load layouts
let layouts = {};
const layoutFiles = fs.readdirSync(__dirname + '/layouts/')

for (var i = 0; i < layoutFiles.length; i++) {
  const layoutName = layoutFiles[i].split('.js')[0]
  layouts[layoutName] = require(__dirname + '/layouts/' + layoutFiles[i] );
}

exports.layouts = layouts
exports.helpers = helpers