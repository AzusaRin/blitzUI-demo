<template>
  <div class="wrapper" :class="{'error':error}">
    <input :value="value" :placeholder="placeholder" :disabled="disabled"  :readonly="readonly" type="text"
           @change="$emit('change',$event.target.value)"
           @input="$emit('input',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @blur="$emit('blur',$event.target.value)">
   <template v-if="error">
    <bl-icon name="error" class="errorIcon"></bl-icon>
     <span class="errorText">{{error}}</span>
   </template>
  </div>
</template>

<script>
import Icon from './Icon'
export default {
  components:{
    'bl-icon':Icon,
  },
  name: 'BlitzInput',
  props: {
    placeholder:{
      type:String,
      default:'请键入内容'
    },
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error:{
      type:String
    }
  }
}
</script>

<style lang="scss" scoped>


$height: 40px;
$border-color: #dcdfe6;
$border-radius: 4px;
$border-color-hover: #aaabb6;
$font-size: 14px;
.wrapper {
  display: inline-flex;
  font-size: $font-size;
  align-items: center;
  *{
    margin-right: .5em;
  &:last-child{
    margin-right: 0;
  }
  }


  > input {
    height: $height;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    padding: 0 15px;
    background-color: #fff;
    font-size: inherit;
    cursor: pointer;
    text-align: start;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      border-color: $border-color-hover;
      outline: none;
      box-shadow: inset 0 1px 3px rgba(#e4e7ed,1);
    }

    &::placeholder{
      color: rgb(192,196,204)
    }

    &[disabled] {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
    &[readonly] {
      background-color: #ffffff;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
      &:focus{
        box-shadow: inset 0 1px 3px rgba(#e4e7ed,1);
      }
    }
  }

  &.error{
    > input{
      border: 1px solid #F56C6C;

      &:hover {
        border: 1px solid #F56C6C
      }
      &:focus{

        box-shadow: inset 0 1px 3px rgba(#F56C6C,1);
      }
    }
    > .errorIcon{
      fill: #F56C6C;
    }
    > .errorText{
      color: #f56c6c;
    }
  }
}

</style>