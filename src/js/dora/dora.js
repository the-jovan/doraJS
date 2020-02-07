require('!style-loader!css-loader!./../../css/doraStyle.css')

import validateOptions from './validation/validate-options.js'
import renderComponent from './components/render-component.js'
import keyboardNavigation from './events/keyboard-navigation.js'

Dora.prototype.renderComponent = renderComponent
Dora.prototype.keyboardNavigation = keyboardNavigation

/**
 * Creates new custom select bar
 * @param {string} mountingPoint id or element where component is going to be mounted
 * @param {object} options optional properties
 * @property {title} title string
 * @property {data} array array of strings
 * @property {limit} number number
 * 
 * @example
 * new Dora("#someId", {title: 'String title', data:['array', 'of'. 'strings'], limit: 1})
 */

function Dora(mountingPoint, options, customUserHandlers) {
  if (mountingPoint === null && mountingPoint === undefined) throw ("No mounting point set.")
  if (mountingPoint.nodeType === Node.ELEMENT_NODE) {
    this.mountingPoint = mountingPoint
  } else if (typeof mountingPoint === 'string' && mountingPoint.startsWith('#')) {
    this.mountingPoint = document.querySelector(mountingPoint)
  } else {
    throw ('Not a valid dom selected.')
  }

  this.options = validateOptions(options)
  this.customUserHandlers = customUserHandlers
  this.dataListVisible = false
  this.selectedElements = new Set()

  this.onActivatorClick = event => {
    this.customUserHandlers.userActivatorHandler()
    if (!this.dataListVisible) {
      this.data.style.display = 'block'
      if (this.dataListForm) {
        this.dataListForm.style.display = 'block'
      }
      this.dataListVisible = true
    } else {
      this.data.style.display = 'none'
      if (this.dataListForm) {
        this.dataListForm.style.display = 'none'
      }
      this.dataListVisible = false
    }

    
  }

  this.onResetClick = event => {
    this.selectedElements.clear()
    Array.from(this.dataList.children).forEach(child => {
      if (child.classList.contains(this.options.classes.dataListElementSelected)) {
        child.classList.remove(this.options.classes.dataListElementSelected)
      }
    })

    this.activator.innerHTML = this.options.title
    this.resetActivator.classList.remove(this.options.classes.activatorClear)
    this.resetActivator.classList.add(this.options.classes.activatorArrow)
    if (!this.dataListVisible) {
      console.log(this.data.style.display)
      this.data.style.display = 'block'
      if (this.dataListForm) {
        this.dataListForm.style.display = 'block'
      }
      this.dataListVisible = true
    }
  }

  this.onBodyClick = event => {
    if (!this.options.multiple) {
      if (event.target !== this.activator
        && event.target !== this.loadmore
        && event.target !== this.resetActivator) {
        this.data.style.display = 'none'
        if (this.dataListForm) {
          this.dataListForm.style.display = 'none'
        }
        this.dataListVisible = false
      }
    } else if (event.target.classList.contains(this.options.classes.activatorSelectedElement)) {
      this.data.style.display = 'block'
      if (this.dataListForm) {
        this.dataListForm.style.display = 'block'
      }
      this.dataListVisible = true
      event.target.parentElement.removeChild(event.target)
      Array.from(this.dataList.children).find(child => {
        if (child.innerHTML === event.target.innerHTML) {
          child.classList.remove(this.options.classes.dataListElementSelected)
        }
      })

      if (typeof this.selectedElements.values().next().value === 'string') {
        this.selectedElements.delete(event.target.innerHTML)
      } else {
        this.selectedElements.forEach(e => { 
          if (e.display === event.target.innerHTML) {
            this.selectedElements.delete(e)
          }
        })
      }
      
      if (this.selectedElements.size === 0) {
        this.resetActivator.classList.remove(this.options.classes.activatorClear)
        this.resetActivator.classList.add(this.options.classes.activatorArrow)
        this.activator.innerHTML = this.options.title
      }
    }

    else {
      if (event.target !== this.activator 
        && event.target !== this.dataList
        && !Array.from(this.dataList.children).includes(event.target) 
        && event.target !== this.resetActivator
        && event.target !== this.loadmore
        && event.target !== this.activatorSearch.children[0]
        && event.target !== this.activatorSearch.children[1]
        ) {
          if (this.dataListForm && event.target !== this.dataListForm.children[0]) {
            this.data.style.display = 'none'
            this.dataListVisible = false
          }
      }
    }
  }
  this.renderComponent()


  this.keyboardNavigation({
    classes: this.options.classes,
    multiple: this.options.multiple
  })
}

export { Dora }