const _s = require( 'lodash/string' )

const getSizeByPosition = function(position){
  const i = Number(position.substr(0, 3))
  const f = Number(position.substr(3, 3))
  return (f - i) + 1
}

exports.getValueByPosition = function(position, dataString){
  const i = Number(position.substr(0, 3))
  const f = Number(position.substr(3, 3))
  return dataString.substr(i-1, getSizeByPosition(position))
}
//LayoutProperties is undefined
exports.parserDataLayoutToFormatContent = function(layoutProperties, data){

  if(layoutProperties === undefined || layoutProperties === null){
    throw new TypeError('LayoutProperties is undefined')
  }
  if(data === undefined || !Array.isArray(data) || !data.length) {
    throw new TypeError('Data is undefined or empty')
  }
  try{
    const breakLine = layoutProperties.breakLine
    const breakLastLine = layoutProperties.breakLastLine
    
    const sequencedData = data.map( (line,index) => { 
      const bl = (index == data.length-1) 
      ? (breakLastLine ) ? breakLine : ''
      : breakLine
      line += bl
      return line
    });
    return sequencedData.join('#').replace(/\#/g,'')
  }catch(e){
    console.log(e.message)
    throw new Error(e.message)
  }
  
}

exports.parseDataToLayoutSection = function (layoutSection, data) {
  let dataContent = []
  
  if(layoutSection === undefined) {
    throw new TypeError('LayoutSection is undefined')
  }

  if(data === undefined || !Array.isArray(data) || !data.length) {
    throw new TypeError('Data is undefined or empty')
  }

  try{
    data.forEach(item => {
      let rowContent = ''
      layoutSection.forEach( section => {
        const position = section.position
        const size = getSizeByPosition(position)
        const complement = section.type.complement
        const preFormat = section.type.preFormat || null
        const ordinator = section.type.ordinator
        
        let rawValue
        if(preFormat){
          rawValue = preFormat(item[position])
          rawValue = _s.truncate(rawValue, {'length':size, omission:''})
        }else{
          rawValue = _s.truncate(item[position], {'length':size, omission:''})
        }
        
        let value = ordinator(rawValue, size, complement)
        rowContent += value
      })
      dataContent.push(rowContent)
    })
    
    return dataContent
  } catch(e) {
    throw new Error(e.message)
  }
  
}

exports.resequence = function(properties, data, sequenceStart){
  const sequenceField = properties.sequenceField
  let count = sequenceStart
  data.forEach( row => {
    row[sequenceField] = count
    count++
  })
  return data
}