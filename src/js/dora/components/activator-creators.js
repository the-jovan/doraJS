const createActivator = ({title, classes, onClick, search}) => {
  const activator = document.createElement('div')
  activator.className = classes.activator
  if (!search) activator.style.paddingLeft = "24px"
  activator.appendChild(document.createTextNode(title))
  activator.addEventListener('click', onClick)
  return activator;
}

const createActivatorReset = ({onClick,classes}) => {
  const reset = document.createElement('div')
  reset.classList.add(classes.activatorReset)
  reset.classList.add(classes.activatorArrow)
  reset.addEventListener('click', onClick)
  return reset
}

const createActivatorSearch = ({classes}) => {
  const search = document.createElement('div')
  search.className = classes.activatorSearch
  const icon = document.createElement('div')
  icon.className = classes.activatorSearchIcon
  const input = document.createElement('input')
  input.style.display = 'none'
  input.className = classes.activatorSearchInput

  icon.addEventListener('click', () => {
    if (input.style.display === 'none') {
      input.style.display = 'block'
    } else {
      input.style.display = 'none'
    }
  })

  search.appendChild(icon)
  search.appendChild(input)
  return search
}

export {
  createActivator,
  createActivatorReset,
  createActivatorSearch
}