const DEFAULTS = {
  title: 'Select',
  dataURL: '',
  activatorSearch: true,
  data: [],
  dataOverActivator: false,
  dataListInput: false,
  multiple: false,
  limit: 5,
  classes: {
    dora: 'dora',
    activator: 'dora__activator',
    data: 'dora__data',
    dataAbsolute: 'dora__data__absolute',
    dataList: 'dora__data__list',
    dataListEmpty: 'dora__nodata',
    dataListElement: 'dora__data__list__element',
    dataListElementSelected: 'dora__data__element__selected',
    activatorReset: 'activator__reset',
    activatorArrow: 'activator__reset-arrow',
    activatorClear: 'activator__reset-clear',
    activatorSearch: 'activator__search',
    activatorSearchIcon: 'activator__search__icon',
    activatorSearchInput: 'activator__search__input',
    activatorSelectedElement: 'activator__selected__element',
    activatorSelectedElementSingle: 'activator__selected__element__single',
    loadmore: 'dora__loadmore'
  }
}
/**
 * A module that validates object's properties
 * @module validateOptions
 * @param {object} options mergest default properties with optional, if they are not entered
 * @property {title} title string
 * @property {data} array array of strings
 * @property {limit} number number
 */
const validateOptions = options => {
  const validOptions = {...DEFAULTS}
  if (typeof options.title === 'string') validOptions.title = options.title
  if (typeof options.dataURL === 'string') validOptions.dataURL = options.dataURL
  if (typeof options.activatorSearch === 'boolean') validOptions.activatorSearch = options.activatorSearch
  if (Array.isArray(options.data)) validOptions.data = options.data
  if (typeof options.dataOverActivator === 'boolean') validOptions.dataOverActivator = options.dataOverActivator
  if (typeof options.multiple === 'boolean') validOptions.multiple = options.multiple
  if (typeof options.limit === 'number') validOptions.limit = options.limit
  if (typeof options.dataListInput === 'boolean') validOptions.dataListInput = options.dataListInput

  if (options.classes) {
    if (typeof options.classes.dora === 'string') validOptions.classes.dora = options.classes.dora
    if (typeof options.classes.activator === 'string') validOptions.classes.activator = options.classes.activator
    if (typeof options.classes.data === 'string') validOptions.classes.data = options.classes.data
    if (typeof options.classes.dataAbsolute === 'string') validOptions.classes.dataAbsolute = options.classes.dataAbsolute
    if (typeof options.classes.dataList === 'string') validOptions.classes.dataList = options.classes.dataList
    if (typeof options.classes.dataListEmpty === 'string') validOptions.classes.dataListEmpty = options.classes.dataListEmpty
    if (typeof options.classes.dataListElement === 'string') validOptions.classes.dataListElement = options.classes.dataListElement
    if (typeof options.classes.dataListElementSelected === 'string') validOptions.classes.dataListElementSelected = options.classes.dataListElementSelected  
    if (typeof options.classes.activatorReset === 'string') validOptions.classes.activatorReset = options.classes.activatorReset
    if (typeof options.classes.activatorArrow === 'string') validOptions.classes.activatorArrow = options.classes.activatorArrow
    if (typeof options.classes.activatorClear === 'string') validOptions.classes.activatorClear = options.classes.activatorClear 
    if (typeof options.classes.activatorSearch === 'string') validOptions.classes.activatorSearch = options.classes.activatorSearch 
    if (typeof options.classes.activatorSearchIcon === 'string') validOptions.classes.activatorSearchIcon = options.classes.activatorSearchIcon 
    if (typeof options.classes.activatorSearchInput === 'string') validOptions.classes.activatorSearchInput = options.classes.activatorSearchInput 
    if (typeof options.classes.activatorSelectedElement === 'string') validOptions.classes.activatorSelectedElement = options.classes.activatorSelectedElement 
    if (typeof options.classes.activatorSelectedElementSingle === 'string') validOptions.classes.activatorSelectedElementSingle = options.classes.activatorSelectedElementSingle 
    if (typeof options.classes.loadmore === 'string') validOptions.classes.loadmore = options.classes.loadmore 
  }
    return validOptions
}

export default validateOptions