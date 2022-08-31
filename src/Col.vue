<template>
  <div :class="colClass" :style="colStyle"
       class="col">
    <slot></slot>
  </div>
</template>
<script>
const validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(k => {
    if (!['span', 'offset'].includes(k)) {
      valid = false
    }
  })
  return valid
}
export default {
  name: 'BlitzCol',
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    },
    pad: {
      type: Object,
      validator,
    },
    smallDevice: {
      type: Object,
      validator,
    },
    middleDevice: {
      type: Object,
      validator,
    },
    bigDevice: {
      type: Object,
      validator,
    }
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colClass() {
      let {span, offset} = this
      let {pad, smallDevice, middleDevice, bigDevice} = this
      const createClasses = (obj, str = '') => {
        if (!obj) {
          return []
        }
        let array = []
        if (obj.span) {
          array.push(`col-${str}${obj.span}`)
        }
        if (obj.offset) {
          array.push(`offset-${str}${obj.offset}`)
        }
        return array
      }
      return [
        ...createClasses({span, offset}),
        ...createClasses(pad, 'pad-'),
        ...createClasses(smallDevice, 'small-device-'),
        ...createClasses(middleDevice, 'middle-device-'),
        ...createClasses(bigDevice, 'big-device-')

      ]
    },
    colStyle() {
      let {gutter} = this
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.col {

  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24)*100%;
    }
  }
  $class: offset-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n/24)*100%;
    }
  }

  @media(min-width: 577px) {
    $class: col-pad-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class: offset-pad-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
  @media(min-width: 769px) {
    $class: col-small-device-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class: offset-small-device-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
  @media(min-width: 993px) {
    $class: col-middle-device-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class: offset-middle-device-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
  @media(min-width: 1201px) {
    $class: col-big-middle-device-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class: offset-big-device-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
}


</style>