<template>
  <button class="bl-button" :class="{[`position-${iconPosition}`]:true,[`icon-${iconName}`]:true}" @click="$emit('click')">
    <bl-icon v-if="iconName && !loading" class="icon" :class="iconName" :name="iconName"></bl-icon>
    <bl-icon v-if="loading"  class="icon" :class="{iconName:true,loading:true}" name="loading"></bl-icon>
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
        return ['info', 'setting', 'download','success', 'warning', 'error', 'left', 'right'].includes(value)
      }
    },
    loading:{
      type:Boolean,
      default: false
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
  color: #606266;
  font-size: 14px;
  line-height: 1;
  background-color:  #fff;
  padding: 12px 1em;
  border: 1px solid #dcdfe6;
  border-radius:4px;
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

  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
    z-index: 100;

    > .setting {
      fill: #409eff;
      animation: spin .5s;
    }
    > .download {
      fill: #409eff;
      animation: jump .5s;
    }
    > .left {
      fill: #409eff;
      animation: jump-left .5s;
    }
    > .right {
      fill: #409eff;
      animation: jump-right .5s;
    }
    > .loading{
      fill: #409eff;
    }
  }

  &:active {
    color: rgb(88, 159, 234);
    border-color: rgb(88, 159, 234);
    z-index: 100;
  }
  > .icon {
    order: 1;margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }

  &.position-right {

    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }

    > .content {
      order: 1;
    }
  }

  .loading{
    animation: spin linear infinite 1s;
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