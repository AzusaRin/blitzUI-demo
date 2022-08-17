<template>
  <div class="col" :class="colClass"
  :style="colStyle">
    <div class="content">
    <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlitzCol',
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    },
  },
  data(){
    return{
      gutter:0
    }
  },
  computed:{
    colClass(){
      let {span,offset} = this
      return[span && `col-${span}`,offset && `offset-${offset}`]
    },
    colStyle(){
      let {gutter} = this
      return{
        paddingLeft:gutter/2+'px',
        paddingRight:gutter/2+'px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.col {
  height: 100%;
  width: 100%;
.content{
  height: 60px;
}

  &:nth-child(odd) .content {
    background: rgb(140, 197, 255);
  }

  &:nth-child(even) .content {
    background: #409EFF;
  }

  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24)*100%;
    }
    $class: offset-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
}
</style>