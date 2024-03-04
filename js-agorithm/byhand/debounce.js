function debounce(func, delay) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
