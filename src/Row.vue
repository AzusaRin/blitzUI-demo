<template>
<div class="row">
  <slot></slot>
</div>
</template>
<script>
export default {
  name:'BlitzRow'
}
</script>
<style lang="scss" scoped>
.row{
  display: flex;
}
</style>