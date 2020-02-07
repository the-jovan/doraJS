AjaxWrapper.prototype.get = get
AjaxWrapper.prototype.post = post
AjaxWrapper.prototype.put = put
AjaxWrapper.prototype.remove = remove


function AjaxWrapper() {
  this.defaults = {
    success: () => {},
    error: xhr => alert(`Error: ${xhr.status}: ${xhr.statusText}`),
    responseType: 'json'
  }
}

const sendRequest = (method, url, defaults, opts, resolve, reject, payload) => {
  let options = {...defaults, ...opts}
  const xhr = new XMLHttpRequest()
  xhr.responseType = options.responseType

  let queryString = ''
  if (options.params) {
    Object.keys(options.params).forEach(key => queryString += `${key}=${options.params[key]}&`)
  }
  queryString = queryString.replace(/&+$/, "")
  xhr.open(method, `${url}?${queryString}`)


  if (options.headers) {
    const headers = Object.keys(options.headers)
    headers.forEach(header => {
      xhr.setRequestHeader(header, options.headers[header])
    })
  } else {
    xhr.setRequestHeader("Content-type", "application/json")
  }

  xhr.onreadystatechange = function () {
    handleResponse(xhr.readyState, xhr.status, xhr.statusText, xhr.response, resolve, reject, options)
  }

  if (payload) xhr.send(payload)
  else xhr.send()
}

function handleResponse(readyState, status, statusText, response, resolve, reject, options) {
  if (readyState === XMLHttpRequest.DONE) {
    if (status >= 400) {
      onInvalidStatus(statusText, options, reject)
    } else {
      onValidStatus(response, options, resolve)
    }
  }
}

function onValidStatus(response, options, resolve) {
  resolve(response)
  options.success()
}

function onInvalidStatus(response, options, reject) {
  reject(response)
  options.error()
}


function get(url, options) {
  return new Promise((resolve, reject) => {
    sendRequest('GET', url, this.defaults, options, resolve, reject, null)
  })
}

function post(url, payload, options) {
  return new Promise((resolve, reject) => {
    sendRequest('POST', url, this.defaults, options, resolve, reject, JSON.stringify(payload))
  })
}

function put(url, payload, options) {
  return new Promise((resolve, reject) => {
    sendRequest('PUT', url, this.defaults, options, resolve, reject, JSON.stringify(payload))
  })
}

function remove(url, options) {
  return new Promise((resolve, reject) => {
    sendRequest('DELETE', url, this.defaults, options, resolve, reject, null)
  })
}

export default AjaxWrapper