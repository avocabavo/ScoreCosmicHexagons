//@ts-check

import {Position} from '../modules/position.mjs'
import {Cosmoid} from '../modules/cosmoid.mjs'
import {vDiv, vImg, vP, vSpan} from '../modules/vue-functions.mjs'

const Hex = {
  props: {
    position: {
      type: Position,
      required: true,
    },
    cosmoid: {
      type: String,
      required: true,
    }
  },
  computed: {
    screenOffsetY() {
      return - this.position.z * 297
    },
    screenOffsetX() {
      return (this.position.y - this.position.x) * 172
    },
    imageName() {
      if (this.cosmoid == Cosmoid.empty) {
        return this.cosmoid + this.position.r()
      }
      return this.cosmoid
    }
  },
  emits: ['paint-me'],
  render() {
    const paintMe = ()=> {
      console.log('being painted')
      this.$emit('paint-me', this.position)
    }
    return vDiv(
      {
        class: 'centered-hex',
      },
      vDiv({
        class: 'relative-hex',
        style: {
          top: this.screenOffsetY + 'px',
          left: this.screenOffsetX + 'px'
        },
      }, [
        vImg({
          class: 'hex-image',
          src: `/images/${this.imageName}.png`,
        }),
        vDiv({
          class: 'clickable-hexpart',
          onClick: paintMe
        })
      ])
    )
  }
}

export {
  Hex
}