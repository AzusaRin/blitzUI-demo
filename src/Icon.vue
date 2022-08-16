<template>
  <svg class="bl-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
import './svg'
export default {
  name:'BlitzIcon',
  props:['name']
}
</script>
<style lang="scss" scoped>
.bl-icon{
  width: 1em;
  height: 1em;
}
</style>