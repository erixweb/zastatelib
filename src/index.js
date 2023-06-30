export const createState = (initialState) => {
  let val

  return val = {
    state: initialState,
    effect: function(val) {},
    get value () {
      return this.state
    },
    set value (value) {
      this.state = value
      this.effect(value)
    },
    listen: function(fn) {
      this.effect = fn
    }
  }
}
export const useEffect = (fn, st) => {
    if (st) {
        return st.listen(fn)
    } else {
      console.error("Signal is not defined")
    }
}