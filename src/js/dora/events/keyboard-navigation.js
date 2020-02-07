function keyboardNavigation() {
  document.addEventListener('keydown', event => {
    if (this.dataListVisible) {
      switch(event.keyCode) {
  
      case 40: 
        if ([...this.dataList.children].includes(document.activeElement) === false) {
          this.dataList.children[0].focus()
        }
        if (document.activeElement.nextSibling) document.activeElement.nextSibling.focus()
      break
  
      case 38:
        if (document.activeElement.previousSibling) document.activeElement.previousSibling.focus()
      break
      
      case 27:
        this.dataListVisible = false
        this.data.style.display = 'none'
      break
      }
    }
  })
}


export default keyboardNavigation