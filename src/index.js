export const create = (initialState, methods = {}) => {
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
    subscribe: function(fn) {
      this.effect = fn
    },
    methods
  }
}
export const useEffect = (fn, st) => {
    if (st) {
        return st.subscribe(fn)
    } else {
      console.error("State is not defined")
    }
}