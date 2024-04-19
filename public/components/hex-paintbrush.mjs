//@ts-check

import {Position} from '../modules/position.mjs'
import {Cosmoid} from '../modules/cosmoid.mjs'
import {vDiv, vImg, vP, vSpan} from '../modules/vue-functions.mjs'

const HexPaintbrush = {
  props: {
    cosmoid: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    }
  },
  emits: ['select-me'],
  render() {
    const selectMe = ()=> {
      console.log('sending click event')
      this.$emit('select-me')
    }
    return vDiv(
      {
        class: this.selected ? 'selected-button-hex' : 'button-hex',
      },
      vImg({
        class: 'hex-button-image',
        src: `/images/${this.cosmoid}.png`,
        onClick: selectMe
      })
    )
  }
}

export {
  HexPaintbrush
}