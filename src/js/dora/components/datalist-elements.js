const renderDataListElements = (start, limit, data, classes) => {
  let listElements = ''

  if (typeof data[0] === 'string' && data[0] !== '') {
    if (data.length <= limit) limit = data.length
      for (let i = start; i < limit; i++) {
        if (typeof data[i] === 'string' && data[i] !== '') {
          listElements += `<li tabindex="0" class='${classes.dataListElement}' data-value="${data[i]}">${data[i]}</li>`
        } else {
          throw('Invalid data fetched')
        }
    }
  } else if (typeof data[0] === 'object') {
    if (data.length <= limit) {
      for (let i = start; i < data.length; i++) {
        if (typeof data[i] === "object" && 'value' in data[i] && 'display' in data[i] && (typeof data[i].display === 'string' || typeof data[i].display === 'number') && data[i].display !== '' && !Array.isArray(data[i])) {
          listElements += `<li tabindex="0" class='${classes.dataListElement}' data-value="${data[i].value}">${data[i].display}</li>`
        } else {
          throw('Invalid data fetched')
        }
      }
    } else {
      for (let i = start; i < limit; i++) {
        if (typeof data[i] === "object" && 'value' in data[i] && 'display' in data[i] && (typeof data[i].display === 'string' || typeof data[i].display === 'number') && data[i].display !== '' && !Array.isArray(data[i])) {
          listElements += `<li tabindex="0" class='${classes.dataListElement}' data-value="${data[i].value}">${data[i].display}</li>`
        } else {
          throw('Invalid data fetched')
        }
      }
    }

  } else {
    throw "Data must be an array of strings, or objects with keys 'display' and 'value', where display should be string or number"
  }
  return listElements
}

export { renderDataListElements }