<template>
  <div ref="popover" class="popover">
    <transition name='fade'>
      <div v-if="visible" ref="contentWrapper" :class="{[`position-${position}`]:true}" class="content-wrapper">
        <slot :close="close" name="content"></slot>
      </div>
    </transition>
    <span ref="switchWrapper" class="switchWrapper">
    <slot></slot>
      </span>
  </div>
</template>

<script>
export default {
  name: 'BlitzPopover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'left', 'right', 'bottom'].includes(value)
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].includes(value)
      }
    },
  },
  data() {
    return {
      visible: false
    }
  },

  mounted() {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  destroyed() {
    if (this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.onClick)
    } else {
      this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover.removeEventListener('mouseleave', this.close)
    }
  },
  methods: {
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.setPopover()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(event) {
      if (this.$refs.switchWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    },
    onClickDocument(event) {
      if (this.$refs.popover &&
          this.$refs.popover.contains(event.target) || this.$refs.popover === event.target) {
        return;
      }
      if (this.$refs.contentWrapper &&
          this.$refs.contentWrapper.contains(event.target) || this.$refs.contentWrapper === event.target) {
        return;
      }
      this.close()
    },
    setPopover() {
      document.body.appendChild(this.$refs.contentWrapper)
      const {contentWrapper} = this.$refs
      const {top, left, height, width} = this.$refs.switchWrapper.getBoundingClientRect()
      const {height: contentHeight} = this.$refs.contentWrapper.getBoundingClientRect()

      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + window.scrollY + height,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY - (contentHeight - height) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY - (contentHeight - height) / 2,
          left: left + window.scrollX + width
        }
      }
      contentWrapper.style.top = positions[this.position].top + 'px'
      contentWrapper.style.left = positions[this.position].left + 'px'


    },
  },


}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.popover {
  display: inline-block;
  position: relative;

  .switchWrapper {
    display: inline-block;
    position: relative;
  }
}

.content-wrapper {
  font-size: 14px;
  text-align: justify;
  word-break: break-all;
  border-radius: 4px;
  position: absolute;
  padding: .5em 1em;
  max-width: 20em;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: white;

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before, &::after {
      content: '';
      display: block;
      border: 5px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 25%;
      transform: translateX(-25%);
    }

    &::before {
      border-top-color: #ebeef5;;
      top: 100%;
    }

    &::after {
      border-top-color: white;
      top: calc(100% - 0.5px);
    }
  }

  &.position-bottom {
    margin-top: 10px;

    &::before, &::after {
      content: '';
      display: block;
      border: 6px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 25%;
      transform: translateX(-25%);
    }

    &::before {
      border-bottom-color: #ebeef5;;
      bottom: 100%;
    }

    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 0.5px);
    }

  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;

    &::before, &::after {
      content: '';
      display: block;
      border: 5px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      border-left-color: #ebeef5;;
      left: 100%

    }

    &::after {
      border-left-color: white;
      left: calc(100% - 0.5px);
    }
  }

  &.position-right {

    margin-left: 10px;

    &::before, &::after {
      content: '';
      display: block;
      border: 5px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      border-right-color: #ebeef5;;
      right: 100%;

    }

    &::after {
      border-right-color: white;
      right: calc(100% - 0.5px);
    }
  }
}

</style>