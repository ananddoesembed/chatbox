import slideActiontType from './slide.types'

export const setSlideState = () =>({
type:slideActiontType.SET_SLIDE_STATE,
})

export const setSlideComponent = item =>({
    type:slideActiontType.SET_SLIDE_COMPONENT,
    payload:item
})

