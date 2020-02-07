function handleEvents ({target, data, activator, multiple, selectedElements, onClick, resetActivator, title, classes}) {
  let targetData
  if (typeof data[0] === 'string') {
    targetData = data.filter(e => e === target.dataset.value)[0]
  } else {
    targetData = data.filter(e => e.value === target.dataset.value)[0]
  }

  activator.innerHTML = ''
  if (targetData !== undefined) {
    if (!multiple) {
      if (selectedElements.size === 0) {
        selectedElements.add(targetData)
      } else {
        selectedElements.clear()
        selectedElements.add(targetData)
      }
      onClick && onClick(targetData)
    } else {
      if (selectedElements.has(targetData)) {
        target.classList.remove(classes.dataListElementSelected)
        selectedElements.delete(targetData)
      } else {
        target.classList.add(classes.dataListElementSelected)
        selectedElements.add(targetData)
      }
    }
  }

  if (selectedElements.size > 0) {
    resetActivator.classList.remove(classes.activatorArrow)
    resetActivator.classList.add(classes.activatorClear)

    selectedElements.forEach(e => {
      if (!multiple) {
        if (typeof e === 'string') activator.innerHTML += `<span class="${classes.activatorSelectedElementSingle}">${e}</span> `
        else activator.innerHTML += `<span class="${classes.activatorSelectedElementSingle}">${e.display}</span> `
      } else {
        if (typeof e === 'string') activator.innerHTML += `<span class="${classes.activatorSelectedElement}">${e}</span> `
        else activator.innerHTML += `<span class="${classes.activatorSelectedElement}">${e.display}</span> `
      }
    })
  } else {
    resetActivator.classList.remove(classes.activatorClear)
    resetActivator.classList.add(classes.activatorArrow)
    activator.innerHTML += title
  }
}


export { handleEvents }