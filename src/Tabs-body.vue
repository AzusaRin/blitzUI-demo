<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'BlitzTabsBody',
  inject:['eventHub']
}
</script>

<style lang="scss" scoped>
.tabs-body{

}
</style>