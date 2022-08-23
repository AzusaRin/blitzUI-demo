<template>
  <div class="tabs-item" @click="onClick" :class="classes">
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
  computed: {
    classes() {
      return {
        active: this.active === true,
        disabled: this.disabled === true
      }
    }
  },
  methods: {
    onClick() {
      if (this.disabled === true) {
        return
      }
      this.eventHub.$emit('update:selected', this.name, this)
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
  margin: 0 14px;

  &:first-child {
    margin-left: 0;
  }

  flex-shrink: 0;
  cursor: pointer;
  height: 100%;
  align-items: center;
  display: flex;

  &.active {
    color: #409eff;
  }

  &.disabled {
    color: gray;
    cursor: not-allowed;
  }
}
</style>