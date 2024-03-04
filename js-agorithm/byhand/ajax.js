// function Ajax(url, method, data, successCallback, errorCallback) {
//   const xhr = new XMLHttpRequest()
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         // 请求成功，调用成功回调函数，并传递响应数据
//         successCallback(xhr.responseText)
//       } else {
//         // 请求失败，调用失败回调函数
//         errorCallback(xhr.status)
//       }
//     }
//   }
//   xhr.open(method, url, true)
//   xhr.setRequestHeader('Content-Type', 'application/json') // 设置请求头
//   xhr.send(JSON.stringify(data)) // 发送请求，将数据转换为 JSON 字符串格式
// }
function ajax(url, method, data, successCallback, errorCallback) {
  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        successCallback(xhr.responseText)
      } else {
        errorCallback(xhr.responseText)
      }
    }
  }
  xhr.open(method, url, ture)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(data))
}
