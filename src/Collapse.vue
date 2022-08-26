<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: 'BlitzCollapse',
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected:{
      type:String
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
    this.eventHub.$emit('update:selected',this.selected)
  }
}
</script>

<style lang="scss" scoped>
.collapse {
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  min-height: 250px;
}
</style>