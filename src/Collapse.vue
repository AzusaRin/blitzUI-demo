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
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventHub: new Vue(),
    }
  },
  provide() {
    return {
      eventHub: this.eventHub
    }
  },
  mounted() {
    this.eventHub.$emit('update:selected', this.selected)
    this.eventHub.$on('update:addSelected', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      if (this.single) {
        selectedCopy = [name]
      } else {
        selectedCopy.push(name)
      }
      this.$emit('update:selected', selectedCopy)
      this.eventHub.$emit('update:selected', selectedCopy)
    })
    this.eventHub.$on('update:removeSelected', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      let index = this.selected.indexOf(name)
      selectedCopy.splice(index, 1)
      this.$emit('update:selected', selectedCopy)
      this.eventHub.$emit('update:selected', selectedCopy)
    })
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