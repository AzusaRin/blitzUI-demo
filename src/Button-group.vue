<template>
  <div class="bl-button-group">
    <slot></slot>
  </div>
</template>
<script></script>
<style lang="scss">
.bl-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .bl-button {
    border-radius: 0;
    margin-left: -1px;

    &:first-child {
      border-top-left-radius: var(--button-border-radius);
      border-bottom-left-radius: var(--button-border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--button-border-radius);
      border-bottom-right-radius: var(--button-border-radius);
    }
  }
}
</style>