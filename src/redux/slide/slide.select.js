import {createSelector} from 'reselect'

const selectSlide = state => state.slide


export const selectSetSlideShow = createSelector([selectSlide],slide=>slide.slidestateShow)