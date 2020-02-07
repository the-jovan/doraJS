// import './../../dist/main.js'

const logData = data => {
  // console.log(data)
}

const clickActivator = () => {
  console.log('Activator clicked')
}

const fixdata = arr => {
  const transf = arr.map(({title, body}) => ({display: title, value: body}))
  // const transf = arr.map(({username, name}) => ({display: username, value: name}))
  return transf
}

const onDataFormSubmit = data => {
  alert(data)
}

new Dora("#content__search", 
  { 
    title: 'Select something',
    multiple: true,
    // activatorSearch: false,
    dataListInput: true,
    dataURL: 'https://jsonplaceholder.typicode.com/posts',
    // dataURL: 'https://jsonplaceholder.typicode.com/users',
    limit: 6,
    // dataOverActivator: true,
    // data: [
    //   {display: 'Option1', value: 'Value1'}, 
    //   {display: 'Opcija2', value: 'Value2'},
    //   {display: 'Option3', value: 'Value3'},
    //   {display: 'Opcija4', value: 'Value4'},
    //   {display: 'Option5', value: 'Value5'},
    //   {display: 'Opcija6', value: 'Value6'},
    //   {display: 'Option7', value: 'Value7'}, 
    //   {display: 'Opcija8', value: 'Value8'},
    //   {display: 'Option9', value: 'Value9'}, 
    //   {display: 'Opcija10', value: 'Value10'},
    //   {display: 'Option11', value: 'Value11'},
    //   {display: 'Opcija12', value: 'Value12'},
    //   {display: 'Option13', value: 'Value13'},
    //   {display: 'Opcija14', value: 'Value14'},
    //   {display: 'Option15', value: 'Value15'}, 
    //   {display: 'Opcija16', value: 'Value16'}
    // ]
    // data: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', '11', '12', '13', '14', '15', '16']
    // classes: {
    //   dora: 'selectbar',
    //   activator: 'selectbar__activator',
    //   data: 'selectbar__data',
    //   dataList: 'selectbar__data__ul',
    //   dataListElement: 'selectbar__data__li',
    //   dataListElementSelected: 'selectbar__selected'
    // }
  },
  {
    userActivatorHandler: clickActivator,
    listElementSelected: logData,
    fixdata: fixdata,
    onDataFormSubmit: onDataFormSubmit
  }
)