<template>
  <div class="tabs" >
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
    if(this.$children.length === 0){
     console && console.warn&&
      console.warn('bl-tabs的子组件只能是bl-tabs-head和bl-tabs-body，现在没有子组件')
    }
    this.eventHub.$emit('directionChange',this.direction)
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

</style>