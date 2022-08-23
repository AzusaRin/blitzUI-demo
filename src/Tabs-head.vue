<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="action-wrapper">
    <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'BlitzTabsHead',
  inject:['eventHub'],

}
</script>

<style lang="scss" scoped>
.tabs-head{
display: flex;
  height: 40px;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid blue;

  > .action-wrapper{
    margin-left: auto;
  }
}
</style>