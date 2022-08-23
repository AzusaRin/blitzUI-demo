<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: 'BlitzTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].includes(value)
      }
    }
  },
  data() {
    return {
      eventHub: new Vue()
    }
  },
  provide() {
    return {
      eventHub: this.eventHub
    }
  },
  mounted() {
    this.$children.forEach(head => {
      if (head.$options.name === 'BlitzTabsHead') {
        head.$children.forEach(child => {
          if (child.$options.name === 'BlitzTabsItem' && child.name === this.selected) {
            this.eventHub.$emit('update:selected', this.selected,child)
          }
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs {

}
</style>