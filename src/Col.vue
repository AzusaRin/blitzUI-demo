<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BlitzCol',
  props: {
    span: {
      type: [String, Number]
    }
  },
}
</script>
<style lang="scss" scoped>
.col {
  height: 60px;
  width: 100%;

  &:nth-child(odd) {
    background: rgb(140, 197, 255);
  }

  &:nth-child(even) {
    background: #409EFF;
  }

  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24)*100%;
    }
  }
}
</style>