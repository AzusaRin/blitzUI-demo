<template>
<div class="toast">
  <slot></slot>
</div>
</template>

<script>
import Vue from "vue";

Vue.prototype.$toast = function (){

}
export default {
  name:'BlitzToast',
}
</script>

<style lang="scss" scoped>
.toast{
position: fixed;
  top:10px;
  left: 50%;
border-radius: 4px;
  padding: 4%;
  font-size: 16px;
  transform: translateX(-50%);
  transition: .3s;
  opacity: 0.6;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
}
</style>