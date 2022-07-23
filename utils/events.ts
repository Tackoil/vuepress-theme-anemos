import { debounce } from 'lodash'

export function onScroll(fn: (e:Event) => void) {
    window.addEventListener('scroll', debounce(fn, 10));
}

