export const throttle = function(callbackFn: (...arg: any[]) => any, delay: number) {
  let timer: null | NodeJS.Timeout = null
  return function() {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      callbackFn()
      timer = null
    }, delay)
  }
}
