import { createAction } from '@reduxjs/toolkit'

// export const increment = () => ({ type: INCREMENT })
// export const decrement = () => ({ type: DECREMENT })
// export const reset = () => ({ type: RESET })
// export const changeStep = step => ({ type: CHANGE_STEP, payload: step })

export const increment = createAction('increment')
export const decrement = createAction('decrement')
export const reset = createAction('reset')
export const changeStep = createAction('changeStep')

// console.log(increment)
// console.log(typeof increment)
// console.log(increment())
// console.log(increment(21))

// console.log(changeStep(3222))
