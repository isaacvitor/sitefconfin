const chai = require('chai')
const assert = chai.assert

const { dataA0, dataL0, dataCV } = require('./mocks/sitef')
const helper = require('../util/helper')
const layout = require('../tef/sitef/v001.7d')

describe('SUIT Sitef - LayoutContent A0', () => {
  let dataLayout, a0

  before(function() {
    dataLayout = helper.parseDataToLayoutSection(layout.a0, dataA0)
    a0 = dataLayout[0]
  });
  
  it('Position 001002 should be "a0" ', () => {
    assert.strictEqual(helper.getValueByPosition('001002', a0), 'a0')
  })

  it('Position 003008 should be "001.7d" ', () => {
    assert.strictEqual(helper.getValueByPosition('003008', a0), '001.7d')
  })

  it('Position 009016 should be "20190124" ', () => {
    assert.strictEqual(helper.getValueByPosition('009016', a0), '20190124')
  })

  it('Position 017022 should be "140000" ', () => {
    assert.strictEqual(helper.getValueByPosition('017022', a0), '140000')
  })

  it('Position 023028 should be "123456" ', () => {
    assert.strictEqual(helper.getValueByPosition('023028', a0), '123456')
  })

  it('Position 029058 should be "ISAAC VITOR SA                " ', () => {
    assert.strictEqual(helper.getValueByPosition('029058', a0), 'ISAAC VITOR SA                ')
  })

  it('Position 059062 should be "0000" ', () => {
    assert.strictEqual(helper.getValueByPosition('059062', a0), '0000')
  })

  it('Position 063068 should be "000000" ', () => {
    assert.strictEqual(helper.getValueByPosition('063068', a0), '000000')
  })

  it('Position 069069 should be "N" ', () => {
    assert.strictEqual(helper.getValueByPosition('069069', a0), 'N')
  })

  it('Position 070075 should be "000001" ', () => {
    assert.strictEqual(helper.getValueByPosition('070075', a0), '000001')
  })
  
})

describe('SUIT Sitef - LayoutContent L0', () => {
  let dataLayout, l0

  before(function() {
    dataLayout = helper.parseDataToLayoutSection(layout.l0, dataL0)
    l0 = dataLayout[0]
  });
  
  it('Position 001002 should be "l0" ', () => {
    assert.strictEqual(helper.getValueByPosition('001002', l0), 'l0')
  })

  it('Position 003010 should be "20190124" ', () => {
    assert.strictEqual(helper.getValueByPosition('003010', l0), '20190124')
  })

  it('Position 011012 should be "RE" ', () => {
    assert.strictEqual(helper.getValueByPosition('011012', l0), 'RE')
  })

  it('Position 013018 should be "000002" ', () => {
    assert.strictEqual(helper.getValueByPosition('013018', l0), '000002')
  })
  
})

describe('SUIT Sitef - LayoutContent CV', () => {
  let dataLayout, cv

  before(function() {
    dataLayout = helper.parseDataToLayoutSection(layout.cv, dataCV)
    cv = dataLayout[0]
  });
  
  it('Position 001002 should be "cv" ', () => {
    assert.strictEqual(helper.getValueByPosition('001002', cv), 'cv')
  })
  
  it('Position 003017 should be "001234567000123" ', () => {
    assert.strictEqual(helper.getValueByPosition('003017', cv), '001234567000123')
  })

  it('Position 018029 should be "000012345678" ', () => {
    assert.strictEqual(helper.getValueByPosition('018029', cv), '000012345678')
  })

  it('Position 030037 should be "20190124" ', () => {
    assert.strictEqual(helper.getValueByPosition('030037', cv), '20190124')
  })

  it('Position 030037 should be "20190124" ', () => {
    assert.strictEqual(helper.getValueByPosition('030037', cv), '20190124')
  })

  it('Position 038043 should be "140000" ', () => {
    assert.strictEqual(helper.getValueByPosition('038043', cv), '140000')
  })

  it('Position 044044 should be "0" ', () => {
    assert.strictEqual(helper.getValueByPosition('044044', cv), '0')
  })

  it('Position 045052 should be "20190124" ', () => {
    assert.strictEqual(helper.getValueByPosition('045052', cv), '20190124')
  })

  it('Position 053053 should be "C" ', () => {
    assert.strictEqual(helper.getValueByPosition('053053', cv), 'C')
  })

  it('Position 054054 should be "3" ', () => {
    assert.strictEqual(helper.getValueByPosition('054054', cv), '3')
  })

  it('Position 055065 should be "00000010010" ', () => {
    assert.strictEqual(helper.getValueByPosition('055065', cv), '00000010010')
  })
  
  it('Position 066076 should be "00000000008" ', () => {
    assert.strictEqual(helper.getValueByPosition('066076', cv), '00000000008')
  })

  it('Position 077087 should be "00000010002" ', () => {
    assert.strictEqual(helper.getValueByPosition('077087', cv), '00000010002')
  })

  it('Position 088106 should be "000606153******7890" ', () => {
    assert.strictEqual(helper.getValueByPosition('088106', cv), '000606153******7890')
  })

  it('Position 088106 should be "000606153******7890" ', () => {
    assert.strictEqual(helper.getValueByPosition('088106', cv), '000606153******7890')
  })

  it('Position 107108 should be "00" ', () => {
    assert.strictEqual(helper.getValueByPosition('107108', cv), '00')
  })

  it('Position 109110 should be "00" ', () => {
    assert.strictEqual(helper.getValueByPosition('109110', cv), '00')
  })

  it('Position 111122 should be "000000000000" ', () => {
    assert.strictEqual(helper.getValueByPosition('111122', cv), '000000000000')
  })

  it('Position 123133 should be "00000000000" ', () => {
    assert.strictEqual(helper.getValueByPosition('123133', cv), '00000000000')
  })

  it('Position 134144 should be "00000000000" ', () => {
    assert.strictEqual(helper.getValueByPosition('134144', cv), '00000000000')
  })

  it('Position 145155 should be "00000000000" ', () => {
    assert.strictEqual(helper.getValueByPosition('145155', cv), '00000000000')
  })

  it('Position 156158 should be "001" ', () => {
    assert.strictEqual(helper.getValueByPosition('156158', cv), '001')
  })

  it('Position 159164 should be "123456" ', () => {
    assert.strictEqual(helper.getValueByPosition('159164', cv), '123456')
  })

  it('Position 165175 should be "09876543211" ', () => {
    assert.strictEqual(helper.getValueByPosition('165175', cv), '09876543211')
  })

  it('Position 176187 should be "000000000000" ', () => {
    assert.strictEqual(helper.getValueByPosition('176187', cv), '000000000000')
  })

  it('Position 188190 should be "000" ', () => {
    assert.strictEqual(helper.getValueByPosition('188190', cv), '000')
  })

  it('Position 191193 should be "000" ', () => {
    assert.strictEqual(helper.getValueByPosition('191193', cv), '000')
  })

  it('Position 194199 should be "000003" ', () => {
    assert.strictEqual(helper.getValueByPosition('194199', cv), '000003')
  })

})