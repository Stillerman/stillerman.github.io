import Typed from 'typed.js'
import tippy from 'tippy.js'
import dragElement from './drag'

var typed = new Typed('.typed', {
  // Waits 1000ms after typing "First"
  strings: ['Work in progress...', 'Come back soon.']
  loop: true,
  typeSpeed: 25,
  backDelay: 1000,
  backSpeed: 10,
  smartBackspace: true,
  cursorChar: '_'
})

tippy.setDefaults({
  duration: 50,
  arrow: true,
  arrowType: 'round',
  theme: 'tomato',
  distance: 15
})

tippy('#tip-git', { content: 'Github' })
tippy('#tip-play', { content: 'Play Store' })
tippy('#tip-term', { content: 'Terminal' })

document.querySelectorAll('.window').forEach(window => {
  dragElement(window)
})
