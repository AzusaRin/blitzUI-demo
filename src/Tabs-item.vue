<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BlitzTabsItem',
  inject: ['eventHub'],
  data() {
    return {
      active: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  computed:{
    classes(){
      return {
        active:this.active === true
      }
    }
  },
  methods: {
    xxx() {
      this.eventHub.$emit('update:selected', this.name)
    }
  },
  created() {
    this.eventHub.$on('update:selected', (name) => {
      this.active = name === this.name;
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs-item {
  padding: 0 2em;
  flex-shrink: 0;

  &.active{
    background: red;
  }
}
</style>