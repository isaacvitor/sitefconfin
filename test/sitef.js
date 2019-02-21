const chai = require('chai')
const assert = chai.assert

const { dataA0, dataL0, dataCV, dataAJ, dataCC, dataL9, dataA9 } = require('./mocks/sitef')
const {helpers, layouts} = require('../index')

const layout = layouts['v001.7d']

describe('SUIT Sitef - LayoutContent A0', () => {
  let dataLayout, a0

  before(function() {
    dataLayout = helpers.parseDataToLayoutSection(layout.a0, dataA0)
    a0 = dataLayout[0]
  });
  
  it('Position 001002 is equal "A0" ', () => {
    assert.strictEqual(helpers.getValueByPosition('001002', a0), 'A0')
  })

  it('Position 003008 is equal "001.7d" ', () => {
    assert.strictEqual(helpers.getValueByPosition('003008', a0), '001.7d')
  })

  it('Position 009016 is equal "20190124" ', () => {
    assert.strictEqual(helpers.getValueByPosition('009016', a0), '20190124')
  })

  it('Position 017022 is equal "140000" ', () => {
    assert.strictEqual(helpers.getValueByPosition('017022', a0), '140000')
  })

  it('Position 023028 is equal "123456" ', () => {
    assert.strictEqual(helpers.getValueByPosition('023028', a0), '123456')
  })

  it('Position 029058 is equal "ISAAC VITOR SA                " ', () => {
    assert.strictEqual(helpers.getValueByPosition('029058', a0), 'ISAAC VITOR SA                ')
  })

  it('Position 059062 is equal "0000" ', () => {
    assert.strictEqual(helpers.getValueByPosition('059062', a0), '0000')
  })

  it('Position 063068 is equal "000000" ', () => {
    assert.strictEqual(helpers.getValueByPosition('063068', a0), '000000')
  })

  it('Position 069069 is equal "N" ', () => {
    assert.strictEqual(helpers.getValueByPosition('069069', a0), 'N')
  })

  it('Position 070075 is equal "000001" ', () => {
    assert.strictEqual(helpers.getValueByPosition('070075', a0), '000001')
  })
  
})

describe('SUIT Sitef - LayoutContent L0', () => {
  let dataLayout, l0

  before(function() {
    dataLayout = helpers.parseDataToLayoutSection(layout.l0, dataL0)
    l0 = dataLayout[0]
  });
  
  it('Position 001002 is equal "L0" ', () => {
    assert.strictEqual(helpers.getValueByPosition('001002', l0), 'L0')
  })

  it('Position 003010 is equal "20190124" ', () => {
    assert.strictEqual(helpers.getValueByPosition('003010', l0), '20190124')
  })

  it('Position 011012 is equal "RE" ', () => {
    assert.strictEqual(helpers.getValueByPosition('011012', l0), 'RE')
  })

  it('Position 013018 is equal "000002" ', () => {
    assert.strictEqual(helpers.getValueByPosition('013018', l0), '000002')
  })
  
})

describe('SUIT Sitef - LayoutContent CV', () => {
  let dataLayout, cv

  before(function() {
    dataLayout = helpers.parseDataToLayoutSection(layout.cv, dataCV)
    cv = dataLayout[0]
  });
  
  it('Position 001002 is equal "CV" ', () => {
    assert.strictEqual(helpers.getValueByPosition('001002', cv), 'CV')
  })
  
  it('Position 003017 is equal "001234567000123" ', () => {
    assert.strictEqual(helpers.getValueByPosition('003017', cv), '001234567000123')
  })

  it('Position 018029 is equal "000012345678" ', () => {
    assert.strictEqual(helpers.getValueByPosition('018029', cv), '000012345678')
  })

  it('Position 030037 is equal "20190124" ', () => {
    assert.strictEqual(helpers.getValueByPosition('030037', cv), '20190124')
  })

  it('Position 030037 is equal "20190124" ', () => {
    assert.strictEqual(helpers.getValueByPosition('030037', cv), '20190124')
  })

  it('Position 038043 is equal "140000" ', () => {
    assert.strictEqual(helpers.getValueByPosition('038043', cv), '140000')
  })

  it('Position 044044 is equal "0" ', () => {
    assert.strictEqual(helpers.getValueByPosition('044044', cv), '0')
  })

  it('Position 045052 is equal "20190124" ', () => {
    assert.strictEqual(helpers.getValueByPosition('045052', cv), '20190124')
  })

  it('Position 053053 is equal "C" ', () => {
    assert.strictEqual(helpers.getValueByPosition('053053', cv), 'C')
  })

  it('Position 054054 is equal "3" ', () => {
    assert.strictEqual(helpers.getValueByPosition('054054', cv), '3')
  })

  it('Position 055065 is equal "00000010010" ', () => {
    assert.strictEqual(helpers.getValueByPosition('055065', cv), '00000010010')
  })
  
  it('Position 066076 is equal "00000000008" ', () => {
    assert.strictEqual(helpers.getValueByPosition('066076', cv), '00000000008')
  })

  it('Position 077087 is equal "00000010002" ', () => {
    assert.strictEqual(helpers.getValueByPosition('077087', cv), '00000010002')
  })

  it('Position 088106 is equal "000606153******7890" ', () => {
    assert.strictEqual(helpers.getValueByPosition('088106', cv), '000606153******7890')
  })

  it('Position 088106 is equal "000606153******7890" ', () => {
    assert.strictEqual(helpers.getValueByPosition('088106', cv), '000606153******7890')
  })

  it('Position 107108 is equal "00" ', () => {
    assert.strictEqual(helpers.getValueByPosition('107108', cv), '00')
  })

  it('Position 109110 is equal "00" ', () => {
    assert.strictEqual(helpers.getValueByPosition('109110', cv), '00')
  })

  it('Position 111122 is equal "000000000000" ', () => {
    assert.strictEqual(helpers.getValueByPosition('111122', cv), '000000000000')
  })

  it('Position 123133 is equal "00000000000" ', () => {
    assert.strictEqual(helpers.getValueByPosition('123133', cv), '00000000000')
  })

  it('Position 134144 is equal "00000000000" ', () => {
    assert.strictEqual(helpers.getValueByPosition('134144', cv), '00000000000')
  })

  it('Position 145155 is equal "00000000000" ', () => {
    assert.strictEqual(helpers.getValueByPosition('145155', cv), '00000000000')
  })

  it('Position 156158 is equal "001" ', () => {
    assert.strictEqual(helpers.getValueByPosition('156158', cv), '001')
  })

  it('Position 159164 is equal "123456" ', () => {
    assert.strictEqual(helpers.getValueByPosition('159164', cv), '123456')
  })

  it('Position 165175 is equal "09876543211" ', () => {
    assert.strictEqual(helpers.getValueByPosition('165175', cv), '09876543211')
  })

  it('Position 176187 is equal "000000000000" ', () => {
    assert.strictEqual(helpers.getValueByPosition('176187', cv), '000000000000')
  })

  it('Position 188190 is equal "000" ', () => {
    assert.strictEqual(helpers.getValueByPosition('188190', cv), '000')
  })

  it('Position 191193 is equal "000" ', () => {
    assert.strictEqual(helpers.getValueByPosition('191193', cv), '000')
  })

  it('Position 194199 is equal "000003" ', () => {
    assert.strictEqual(helpers.getValueByPosition('194199', cv), '000003')
  })

})

describe('SUIT Sitef - LayoutContent AJ', () => {
  let dataLayout, aj

  before(function() {
    //console.log(layout.aj)
    dataLayout = helpers.parseDataToLayoutSection(layout.aj, dataAJ)
    aj = dataLayout[0]
  });
  
  it('Position 001002 is equal "AJ" ', () => {
    assert.strictEqual(helpers.getValueByPosition('001002', aj), 'AJ')
  })
  
  it('Position 003017 is equal "001234567000123" ', () => {
    assert.strictEqual(helpers.getValueByPosition('003017', aj), '001234567000123')
  })

  it('Position 018029 is equal "000012345678" ', () => {
    assert.strictEqual(helpers.getValueByPosition('018029', aj), '000012345678')
  })

  it('Position 030037 is equal "20190124" ', () => {
    assert.strictEqual(helpers.getValueByPosition('030037', aj), '20190124')
  })

  it('Position 038039 is equal 00 ', () => {
    assert.strictEqual(helpers.getValueByPosition('038039', aj), '00')
  })

  it('Position 040051 is equal 12345678901 ', () => {
    assert.strictEqual(helpers.getValueByPosition('040051', aj), '000012345678')
  })

  it('Position 052059 is equal 20190124 ', () => {
    assert.strictEqual(helpers.getValueByPosition('052059', aj), '20190124')
  })

  it('Position 060065 is equal 140000 ', () => {
    assert.strictEqual(helpers.getValueByPosition('060065', aj), '140000')
  })

  it('Position 066066 is equal 0 ', () => {
    assert.strictEqual(helpers.getValueByPosition('066066', aj), '0')
  })

  it('Position 067074 is equal 20190124 ', () => {
    assert.strictEqual(helpers.getValueByPosition('067074', aj), '20190124')
  })

  it('Position 075075 is equal 3 ', () => {
    assert.strictEqual(helpers.getValueByPosition('075075', aj), '3')
  })

  it('Position 076076 is equal 1 ', () => {
    assert.strictEqual(helpers.getValueByPosition('076076', aj), '1')
  })

  it('Position 077079 is equal 123 ', () => {
    assert.strictEqual(helpers.getValueByPosition('077079', aj), '123')
  })

  it('Position 110120 is equal 00000001000 ', () => {
    assert.strictEqual(helpers.getValueByPosition('110120', aj), '00000001000')
  })

  it('Position 121131 is equal 00000000010 ', () => {
    assert.strictEqual(helpers.getValueByPosition('121131', aj), '00000000010')
  })

  it('Position 132142 is equal 0000000990 ', () => {
    assert.strictEqual(helpers.getValueByPosition('132142', aj), '00000000990')
  })

  it('Position 143145 is equal 001 ', () => {
    assert.strictEqual(helpers.getValueByPosition('143145', aj), '001')
  })

  it('Position 146151 is equal 123456 ', () => {
    assert.strictEqual(helpers.getValueByPosition('146151', aj), '123456')
  })

  it('Position 152162 is equal 09876543211 ', () => {
    assert.strictEqual(helpers.getValueByPosition('152162', aj), '09876543211')
  })

  it('Position 163181 is equal 000606153******7890 ', () => {
    assert.strictEqual(helpers.getValueByPosition('163181', aj), '000606153******7890')
  })

  it('Position 182184 is equal 000 ', () => {
    assert.strictEqual(helpers.getValueByPosition('182184', aj), '000')
  })

  it('Position 185187 is equal 000 ', () => {
    assert.strictEqual(helpers.getValueByPosition('185187', aj), '000')
  })

  it('Position 188193 is equal 000003 ', () => {
    assert.strictEqual(helpers.getValueByPosition('188193', aj), '000003')
  })

})

describe('SUIT Sitef - LayoutContent CC', () => {
  let dataLayout, cc

  before(function() {
    dataLayout = helpers.parseDataToLayoutSection(layout.cc, dataCC)
    cc = dataLayout[0]
  });
  
  it('Position 001002 is equal "CC" ', () => {
    assert.strictEqual(helpers.getValueByPosition('001002', cc), 'CC')
  })
  
  it('Position 003017 is equal "001234567000123" ', () => {
    assert.strictEqual(helpers.getValueByPosition('003017', cc), '001234567000123')
  })

  it('Position 018029 is equal "000012345678" ', () => {
    assert.strictEqual(helpers.getValueByPosition('018029', cc), '000012345678')
  })

  it('Position 030037 is equal "20181211" ', () => {
    assert.strictEqual(helpers.getValueByPosition('030037', cc), '20181211')
  })

  it('Position 038039 is equal 00 ', () => {
    assert.strictEqual(helpers.getValueByPosition('038039', cc), '00')
  })

  it('Position 040051 is equal 12345678901 ', () => {
    assert.strictEqual(helpers.getValueByPosition('040051', cc), '000012345678')
  })

  it('Position 052059 is equal 20190124 ', () => {
    assert.strictEqual(helpers.getValueByPosition('052059', cc), '20190124')
  })

  it('Position 060065 is equal 140000 ', () => {
    assert.strictEqual(helpers.getValueByPosition('060065', cc), '140000')
  })

  it('Position 066066 is equal 1 ', () => {
    assert.strictEqual(helpers.getValueByPosition('066066', cc), '1')
  })

  it('Position 067072 is equal 4 ', () => {
    assert.strictEqual(helpers.getValueByPosition('067072', cc), '000004')
  })
})

describe('SUIT Sitef - LayoutContent L9', () => {
  let dataLayout, l9

  before(function() {
    dataLayout = helpers.parseDataToLayoutSection(layout.l9, dataL9)
    l9 = dataLayout[0]
  });
  
  it('Position 001002 is equal "L9" ', () => {
    assert.strictEqual(helpers.getValueByPosition('001002', l9), 'L9')
  })
  
  it('Position 003008 is equal 000003 ', () => {
    assert.strictEqual(helpers.getValueByPosition('003008', l9), '000003')
  })

  it('Position 009022 is equal "00000000001000" ', () => {
    assert.strictEqual(helpers.getValueByPosition('009022', l9), '00000000001000')
  })

  it('Position 023028 is equal 5 ', () => {
    assert.strictEqual(helpers.getValueByPosition('023028', l9), '000005')
  })
})

describe('SUIT Sitef - LayoutContent A9', () => {
  let dataLayout, a9

  before(function() {
    dataLayout = helpers.parseDataToLayoutSection(layout.a9, dataA9)
    a9 = dataLayout[0]
  });
  
  it('Position 001002 is equal "A9" ', () => {
    assert.strictEqual(helpers.getValueByPosition('001002', a9), 'A9')
  })
  
  it('Position 003008 is equal 000004 ', () => {
    assert.strictEqual(helpers.getValueByPosition('003008', a9), '000004')
  })

  it('Position 009014 is equal 000006 ', () => {
    assert.strictEqual(helpers.getValueByPosition('009014', a9), '000006')
  })
})
