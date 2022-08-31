<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BlitzRow',
  props: {
    gutter: {
      type: [String, Number]
    },
    align: {
      type: String,
      default:'left',
      validator(value) {
        return ['left', 'right', 'center'].includes(value)
      }
    }
  },
  computed: {
    rowClass() {
      let {align} = this
      return [align && `row-${align}`]
    },
    rowStyle() {
      let {gutter} = this
      return {
        marginLeft: -gutter / 2 + 'px',
        marginRight: -gutter / 2 + 'px'
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  }
}
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: nowrap;

  &-left {
    justify-content: flex-start;
  }

  &-right {
    justify-content: flex-end;
  }

  &-center {
    justify-content: center;
  }
}

</style>