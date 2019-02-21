const chai = require('chai')
const assert = chai.assert

const { dataA0 } = require('./mocks/sitef')
const helper = require('../util/helper')
const layout = require('../layouts/v001.7d')

describe('SUIT Helper - parseDataToLayoutSection', () => {
  it('When the LAYOUTSECTION and DATA are null or undefined ', () => {
    assert.throw(helper.parseDataToLayoutSection, TypeError, 'LayoutSection is undefined')
  })

  it('When the DATA is undefined', () => {
    assert.throw(()=> {helper.parseDataToLayoutSection(layout.a0)}, TypeError, 'Data is undefined or empty')
  })

  it('When the DATA is empty', () => {
    assert.throw(()=> {helper.parseDataToLayoutSection(layout.a0, [])}, TypeError, 'Data is undefined or empty')
  })

  it('When any error occur', () => {
    assert.throw(()=> {helper.parseDataToLayoutSection({}, dataA0)}, Error)
  })
  it('After parse, result should be array', () => {
    assert.typeOf(helper.parseDataToLayoutSection(layout.a0, dataA0), 'array')
  })
  
})

describe('SUIT Helper - parserDataLayoutToFormatContent', () => {
  let dataLayout

  before(function() {
    dataLayout = helper.parseDataToLayoutSection(layout.a0, dataA0)
  });

  it('When the LayoutProperties is null or undefined ', () => {
    assert.throw(helper.parserDataLayoutToFormatContent, TypeError, 'LayoutProperties is undefined')
  })

  it('When the DATA is null or undefined ', () => {
    assert.throw(() =>{ helper.parserDataLayoutToFormatContent(layout.properties) }, TypeError, 'Data is undefined or empty')
  })

  it('When the DATA is empty ', () => {
    assert.throw(() =>{ helper.parserDataLayoutToFormatContent(layout.properties, []) }, TypeError, 'Data is undefined or empty')
  })

  it('After parse, result should be array', () => {
    assert.typeOf(helper.parserDataLayoutToFormatContent(layout, dataLayout), 'string')
  })
  
})