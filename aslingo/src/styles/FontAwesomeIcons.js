import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

// Specify all properties: name, family, style
icon({name: 'user', family: 'classic', style: 'solid'})
icon({name: 'user', family: 'classic', style: 'regular'})
icon({name: 'twitter', family: 'classic', style: 'brands'})

// 'classic' is the default family, you can leave that off
icon({name: 'user', style: 'solid'})
icon({name: 'user', style: 'regular'})
icon({name: 'twitter', style: 'brands'})

// 'solid' is the default style, you can leave that off
icon({name: 'user'})

icon({name: 'hand-back-point-left'})
