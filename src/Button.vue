<template>
  <button class="bl-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
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

  }

  &:active {
    color: var(--button-color-border-active);
    border-color: var(--button-color-border-active);
  }

  > .icon {
    order: 1;
    margin-right: 0.3em;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
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