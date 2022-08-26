<template>
  <div class="collapse">
  <slot></slot>
  </div>
</template>

<script>
export default {
  name:'BlitzCollapse'
}
</script>

<style lang="scss" scoped>
.collapse{
border: 1px solid #d9d9d9;
  border-radius: 2px;
  min-height: 250px;
}
</style>