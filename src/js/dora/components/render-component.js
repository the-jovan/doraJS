import { createActivator, createActivatorReset, createActivatorSearch } from './activator-creators.js'
import { createDataContainer, dataListForm, createLoadMore } from './datalist-creators.js'
import { renderDataListElements } from './datalist-elements.js'
import { handleEvents } from './../events/event.js'
import AjaxWrapper from './../ajax/ajaxwrapper.js'

function renderComponent() {
  
  this.activator = createActivator({
    title: this.options.title, 
    classes: this.options.classes,
    onClick: this.onActivatorClick,
    search: this.options.activatorSearch
  })

  this.resetActivator = createActivatorReset({
    onClick: this.onResetClick,
    classes: this.options.classes,
  })

  if (this.options.dataListInput) {
    this.dataListForm = dataListForm({
      onSubmit: this.customUserHandlers.onDataFormSubmit
    })
  }

  this.data = createDataContainer({ 
    classes: this.options.classes,
    position: this.options.dataOverActivator
  })

  this.loadmore = createLoadMore({
    classes: this.options.classes,
    datalist: this.dataList,
    data: this.options.data,
    limit: this.options.limit
  })

  if (this.options.activatorSearch) {
    this.activatorSearch = createActivatorSearch({
      classes: this.options.classes
    })
  }


  this.dataList = createDataList({
    title: this.options.title,
    data: this.options.data,
    dataURL: this.options.dataURL, 
    limit: this.options.limit,
    selectedElements: this.selectedElements,
    classes: this.options.classes,
    multiple: this.options.multiple,
    activator: this.activator,
    onClick: this.customUserHandlers.listElementSelected,
    resetActivator: this.resetActivator,
    loadmore: this.loadmore,
    fixdata: this.customUserHandlers.fixdata,
    search: this.activatorSearch,
    dataListVisible: this.dataListVisible
  })

  if (this.options.dataListInput) {
    this.data.appendChild(this.dataListForm)
  }

  this.data.appendChild(this.dataList)

  let component = document.createElement('div')
  component.className = this.options.classes.dora
  component.appendChild(this.activator)
  component.appendChild(this.resetActivator)

  if (this.options.activatorSearch) {
    component.appendChild(this.activatorSearch)
  }

  component.appendChild(this.data)

  this.mountingPoint.appendChild(component)

  document.addEventListener('click', this.onBodyClick)
}

const createDataList = ({ title, data, dataURL, limit, selectedElements, classes, multiple, activator, onClick, resetActivator, loadmore, fixdata, search, dataListVisible }) => {
  let element
  let searchField = search

  if (data.length > 0 && dataURL === '') {
    const dataList = document.createElement('ul')
    dataList.className = classes.dataList
  
    dataList.innerHTML += renderDataListElements(0, limit, data, classes, fixdata)
    if (data.length > limit) {
      dataList.appendChild(loadmore)
    }

    if (searchField) {
      searchField.children[1].addEventListener('input', event => {
        if (event.target.value === '') {
          dataList.innerHTML = renderDataListElements(0, data.length, data, classes)
        }
        else {
          let filteredData = []
            data.forEach(e => {
              if (typeof data[0] === 'object') {
                if (e.display.indexOf(event.target.value) >= 0) filteredData.push(e)
              } else {
                if (e.indexOf(event.target.value) >= 0) filteredData.push(e)
              }
            })
          if (filteredData.length === 0) {
            dataList.innerHTML = ''
          } else {
            dataList.innerHTML = renderDataListElements(0, data.length, filteredData, classes)
          }
        }
  
        let selEl = Array.from(selectedElements)
        let selElVals = [] 
        selEl.forEach(el => {
          if(typeof el === 'string') selElVals.push(el)
          else selElVals.push(el.value)
        })
        if (Array.from(dataList.children) && selElVals.length > 0) {
         Array.from(dataList.children).forEach(child => {
            if (selElVals.includes(child.dataset.value) && !child.classList.contains(classes.dataListElementSelected)) {
              child.classList.add(classes.dataListElementSelected)
            }
          })
        }
      })
  
    }

    element = dataList
  
  } else if (dataURL !== '') {
    let dataList = document.createElement('ul')
    dataList.className = classes.dataList

    const ajWrap = new AjaxWrapper()
    ajWrap.get(dataURL, {params:{_start: 0, _limit: limit}})
    .then( res => {
      if ('display' in res[0] && 'value' in res[0]) {
        data = res
      } else {
        if (fixdata) res = fixdata(res)
        data = res
      }
      data = res

      dataList.innerHTML += renderDataListElements(0, limit, data, classes)
      dataList.appendChild(loadmore)

      searchField.children[1].addEventListener('input', event => {        
        if (event.target.value === '') {
          dataList.innerHTML = renderDataListElements(0, data.length, data, classes)
          dataList.appendChild(loadmore)
        }
        else {
          let filteredData = []
            data.forEach(e => {
              if (e.display.indexOf(event.target.value) >= 0) {
                filteredData.push(e)
              }
            })
          if (filteredData.length === 0) {
            dataList.innerHTML = ''
          } else {
            dataList.innerHTML = renderDataListElements(0, data.length, filteredData, classes)
          }
        }

        let selEl = [...selectedElements]
        let selElVals = [] 
        selEl.forEach(el => selElVals.push(el.value))
        if (Array.from(dataList.children) && selElVals.length > 0) {
        Array.from(dataList.children).forEach(child => {
          if (selElVals.includes(child.dataset.value) && !child.classList.contains(classes.dataListElementSelected)) {
            child.classList.add(classes.dataListElementSelected)
          }
        })
      }
      })
    })
    .catch( err => console.log(err))

    element = dataList
  
  } else {
    let noDataElement = document.createElement('div')
    noDataElement.className = 'dora__nodata'
    noDataElement.innerHTML = 'No data available'
    element = noDataElement
  }


  element.addEventListener('mousedown', event => { 
    if (event.target !== loadmore && event.target !== element) {
      handleEvents({target: event.target, loadmore, element, data, activator, multiple, selectedElements, onClick, classes, resetActivator, title})
    } 
    else if (event.target !== element) {
      loadmore.innerHTML = 'Loading...'
      if (dataURL !== '') {
        const ajWrap = new AjaxWrapper()
        ajWrap.get(dataURL, {params: {_start: element.children.length, _limit: limit}})
        .then( res => {
          element.removeChild(loadmore)
          if (fixdata) {
            res = fixdata(res)
          }
          data = data.concat(res)
          handleFetchedData({data, element, loadmore, res, classes, limit})
        })
        .catch(err => console.error(err))
      
      } else if (element.children.length < data.length) {
        handleFinalData({element, limit, loadmore, data, classes})
      }
    }
  })

  element.addEventListener('keydown', event => {
    switch(event.keyCode) {
      case 13:
        if (document.activeElement !== loadmore && document.activeElement !== element) {
          handleEvents({target: document.activeElement, loadmore, element, data, activator, multiple, selectedElements, onClick, classes, resetActivator, title})
        } 
        
        else if (document.activeElement === loadmore) {
          loadmore.innerHTML = 'Loading...'
          if (dataURL !== '') {
            let newFocus = element.children.length
            const ajWrap = new AjaxWrapper()
            ajWrap.get(dataURL, {params: {_start: element.children.length, _limit: limit}})
            .then( res => {
              element.removeChild(loadmore)
              if (fixdata) {
                res = fixdata(res)
              }
              data = data.concat(res)
              handleFetchedData({data, element, loadmore, res, classes, limit})
              Array.from(element.children)[newFocus].focus()
            })
            .catch(err => console.error(err))    
          } else if (element.children.length < data.length) {
            handleFinalData({element, limit, loadmore, data, classes})
          }
        }

      break
    }
  })

  return element
}

function handleFetchedData({data, element, loadmore, res, classes, limit}) {
  for (let i = element.children.length; i < data.length; i++) {
    element.innerHTML += `<li tabindex="0" class='${classes.dataListElement}' data-value="${data[i].value}">${data[i].display}</li>`
  }
  if (res.length === limit) {
    loadmore.innerHTML = 'Load more...'
    element.appendChild(loadmore)
  }
}

function handleFinalData({element, limit, loadmore, data, classes}) {
  if (element.children.length + limit < data.length) {
    element.removeChild(loadmore)
    newlimit = element.children.length + limit
    element.innerHTML += renderDataListElements(element.children.length, newlimit, data, classes)
    element.appendChild(loadmore)
    loadmore.innerHTML = 'Load more...'    
  } else {
    element.removeChild(loadmore)
    newlimit = data.length
    element.innerHTML += renderDataListElements(element.children.length, newlimit, data, classes)
  }
}


export default renderComponent