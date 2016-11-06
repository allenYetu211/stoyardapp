// const actions = {
//   increment: ({commit}) => commit('increment'),
//   decrement: ({commit}) => commit('decrement'),
//   incrementIfOdd: ({commit}) => commit('incrementIfOdd'),
//   incrementAsync: ({commit}) => commit('incrementAsync')
// }

export const INCREMENT = 'increment'
export const increment = ({commit}) => { commit(INCREMENT) }

export const DECREMENT = 'decrement'
export const decrement = ({commit}) => { commit(DECREMENT) }

export const INCREMENTIFODD = 'incrementIfOdd'
export const incrementIfOdd = ({commit}) => { commit(INCREMENTIFODD) }

export const INCREMENTASYNC = 'incrementAsync'
export const incrementAsync = ({commit}) => { commit(INCREMENTASYNC) }

export const TOGGLESW = 'togglesw'
export const togglesw = ({commit}) => { commit(TOGGLESW) }
