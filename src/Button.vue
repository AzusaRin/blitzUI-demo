<template>
  <button class="bl-button">默认按钮</button>
</template>
<script>
export default {}
</script>
<style lang="scss">
.bl-button{
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
  &:hover{
    color: var(--button-color-hover);
    border-color: var(--button-border-color-hover);
    background-color: var(--button-bg-hover);
  }
  &:active{
    color: var(--button-color-border-active);
    border-color: var(--button-color-border-active);
  }
}

</style>