const helper = require('../../util/helper')
const layout = require('./v001.7d')

exports.parseA0Data = (data) => {
  const parserData = helper.parseDataToLayoutSection(layout.a0, data)
}