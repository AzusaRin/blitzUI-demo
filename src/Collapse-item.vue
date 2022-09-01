<template>
  <div class="collapse-item">
    <div :data-name="name" class="title" @click="toggleCollapse">
      {{ title }}
    </div>
    <div v-if="openStatus===true" class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlitzCollapseItem',
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      openStatus: false,
      single: false
    }
  },
  inject: ['eventHub'],
  methods: {
    toggleCollapse() {
      if (this.openStatus === true) {
        this.eventHub && this.eventHub.$emit('update:removeSelected', this.name)
      } else {

        this.eventHub && this.eventHub.$emit('update:addSelected', this.name)
      }
    },

  },
  mounted() {
    this.eventHub && this.eventHub.$on('update:selected', (names) => {
      this.openStatus = !!names.includes(this.name);
    })
  }
}
</script>

<style lang="scss" scoped>
@keyframes slideTop {
  0% {
    opacity: 0;
    transform: translateY(-35%)
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
}

.collapse-item {

  .title {
    height: 24px;
    line-height: 48px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 13px;
    cursor: pointer;
    padding: 24px;
    outline: none;
    font-weight: 500;


    &::after {
      align-self: center;
      content: '';
      display: block;
      border-bottom: 1px solid #d9d9d9;
      width: 100%;

    }

  }

  .content {
    animation: slideTop .5s;
    font-size: 13px;
    color: #303133;
    line-height: 1.7692307692;
    padding: 0 24px 24px 24px;
  }
}
</style>