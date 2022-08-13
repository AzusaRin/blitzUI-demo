<template>
  <button class="bl-button" :class="{[`icon-${iconPosition}`]:true}">
    <bl-icon v-if="icon"  :name="icon"></bl-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return !(value !== 'left' && value !== 'right');
      }
    }
  }
}
</script>
<style lang="scss">
.bl-button {
  color: var(--button-color);
  font-size: var(--font-size);
  line-height: var(--button-line-height);
  background-color: var(--button-bg);
  padding: var(--button-padding);
  border: 1px solid var(--button-border-color);
  border-radius: var(--button-border-radius);
  text-align: center;
  cursor: pointer;
  transition: .1s;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    color: var(--button-color-hover);
    border-color: var(--button-border-color-hover);
    background-color: var(--button-bg-hover);

    > .bl-icon {
      fill: var(--button-color-hover);
      animation: jump 1s ease;
    }

    &.icon-right {
      > .bl-icon {
        animation: jump-right 1s ease;
      }
    }

    @keyframes jump {
      0% {
        transform: translateX(0%);
      }

      50% {
        transform: translateX(-25%);
      }

      100% {
        transform: translateX(0);
      }
    }

    @keyframes jump-right {
      0% {
        transform: translateX(0%);
      }

      50% {
        transform: translateX(25%);
      }

      100% {
        transform: translateX(0);
      }
    }

  }


  &:active {
    color: var(--button-color-border-active);
    border-color: var(--button-color-border-active);
  }


  > .bl-icon {
    order: 1;
    margin-right: 0.3em;
    transition: .1s;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .bl-icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }

    > .content {
      order: 1;
    }

  }
}


</style>