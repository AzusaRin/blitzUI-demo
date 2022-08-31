<template>
  <div class="bl-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BlitzButtonGroup',
  mounted() {
    for (let node of this.$el.children) {
      if (node.nodeName.toLowerCase() !== 'button') {
        console.warn(`请注意bl-button-group 的子元素只能是bl-button，否则可能会发生样式错误。现在子元素是${node.nodeName.toLowerCase()}`)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.bl-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .bl-button {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius:4px;
    }

  }
}
</style>