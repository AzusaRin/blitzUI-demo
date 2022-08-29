<template>
  <button class="bl-button" :class="{[`icon-${iconPosition}`]:true,[`icon-${iconName}`]:true}" @click="$emit('click')">
    <bl-icon v-if="iconName" class="icon" :class="iconName" :name="iconName"></bl-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./Icon";

export default {
  name: 'BlitzButton',
  components: {
    'bl-icon': Icon
  },
  props: {
    iconName: {
      type: String,
      validator(value) {
        return ['info', 'setting',  'loading', 'download','success', 'warning', 'error', 'left', 'right'].includes(value)
      }
    },
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
<style lang="scss" scoped>
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

  &.icon-info {
    background-color: rgb(144, 147, 153);
    color: white;
    border-color: rgb(144, 147, 153);
    > .info{
      fill:white;
    }

    &:hover{
      background-color: rgb(166,169,173);
      border-color: rgb(166,169,173);
      color: white;
    }


    &:active{
      background-color: white;
      border-color: rgb(144, 147, 153);
      color: rgb(144, 147, 153);
      > .info{
        fill:rgb(144, 147, 153);
      }
    }
  }


&.icon-success{
  background-color: rgb(103,194,58);
  border-color: rgb(103,194,58);
  color: white;

  > .success{
    fill:white;
  }
  &:hover{
    background-color: rgb(133,206,97);
    border-color: rgb(133,206,97);
    color: white;
  }

  &:active{
    background-color: white;
    border-color: rgb(103,194,58);
    color: rgb(103,194,58);
    > .success{
      fill:rgb(103,194,58);
    }
  }
}
  &.icon-warning{
    background-color: rgb(245,108,108);
    color: white;
    > .warning{
      fill:white;
    }
    &:hover{
      background-color: rgb(247,137,137);
      border-color: rgb(247,137,137);
      color: white;
    }

    &:active{
      background-color:white;
      border-color: rgb(245,108,108);
      color:rgb(245,108,108);
      > .warning{
        fill:rgb(245,108,108);
      }
    }
  }

  &.icon-error{
    background-color: rgb(230,162,60);
    color: white;
    > .error{
      fill:white;
    }
    &:hover{
      background-color: rgb(235,181,99);
      border-color: rgb(235,181,99);
      color: white;
    }

    &:active{
      background-color: white;
      border-color: rgb(230,162,60);
      color:  rgb(230,162,60);
      > .error{
        fill:rgb(230,162,60);
      }
    }
  }

  .loading {
    animation: spin 1s infinite linear;
    margin-right: 0.3em;
  }


  &:hover {
    color: var(--button-color-hover);
    border-color: var(--button-border-color-hover);
    background-color: var(--button-bg-hover);
    z-index: 100;


    > .loading {
      fill: var(--button-color-hover);
    }
    > .setting {
      fill: var(--button-color-hover);
      animation: spin .5s;
    }
    > .download {
      fill: var(--button-color-hover);
      animation: jump .5s;
    }
    > .left {
      fill: var(--button-color-hover);
      animation: jump-left .5s;
    }
    > .right {
      fill: var(--button-color-hover);
      animation: jump-right .5s;
    }
  }

  &:active {
    color: var(--button-color-border-active);
    border-color: var(--button-color-border-active);
    z-index: 100;
  }
  > .icon {
    order: 1;margin-right: 0.3em;
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


  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes jump-left {
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
  @keyframes jump {
    0% {
      transform: translateY(0%);
    }

    50% {
      transform: translateY(25%);
    }

    100% {
      transform: translateY(0);
    }
  }

}


</style>