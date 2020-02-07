
const getData = (url, fixdata, start, limit,) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `${url}?_start=${start}&_limit=${limit}`)
    
    xhr.send()
  
    xhr.onload = () => {
      if (xhr.status !== 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`)
      } else {
        let resp = JSON.parse(xhr.response)
        resp  = fixdata(resp)
        resolve(resp)
      }
    }
    xhr.onerror = () => reject(xhr.statusText)
  })
}

export default getData


// function ajaxWrapper(url, start, limit) {
//   if (typeof url === 'string') this.url = url
//   this.fixdata = fixdata
//   if (typeof start === 'number' && typeof limit === 'number') {
//     this.start = start
//     this.limit = limit
//   }
// }

// function get() {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', `${this.url}?_start=${this.start}&_limit=${this.limit}`)
    
//     xhr.send()
  
//     xhr.onload = () => {
//       if (xhr.status !== 200) {
//         alert(`Error ${xhr.status}: ${xhr.statusText}`)
//       } else {
//         let resp = JSON.parse(xhr.response)
//         resolve(resp)
//       }
//     }
//     xhr.onerror = () => reject(xhr.statusText)
//   })
// }