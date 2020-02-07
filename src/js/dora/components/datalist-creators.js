const createDataContainer = ({classes, position}) => {
  const data = document.createElement('div')
  if (position) {
    data.className = `${classes.data} ${classes.dataAbsolute}`
  } else {
    data.className = classes.data
  }
  data.style.display = 'none'
  return data
}

const dataListForm = ({onSubmit}) => {
  let input = document.createElement('form')
  let field = document.createElement('input')
  input.className = 'dora__form'
  field.placeholder = 'Type here...'
  field.className = 'dora__form__input'
  input.style.display = 'none'
  input.appendChild(field)
  input.addEventListener('submit', event => {
    event.preventDefault()
    if (field.value !== '' && onSubmit) {
      onSubmit(field.value)
    }    
  })
  return input
}

const createLoadMore = ({classes}) => {
  const loadmore = document.createElement('div')
  loadmore.className = classes.loadmore
  loadmore.tabIndex = "0"
  loadmore.appendChild(document.createTextNode('Load more...'))
  return loadmore
}

export {
  createDataContainer,
  dataListForm,
  createLoadMore
}