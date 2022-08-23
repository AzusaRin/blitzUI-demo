<template>
  <div class="tabs-panel" :class="classes" v-if="active" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'BlitzTabsPanel',
  inject:['eventHub'],
  data(){
    return{
      active:false
    }
  },
  props:{
    name: {
      type: String | Number,
      required: true
    }
  },
  computed:{
    classes(){
      return {
        active:this.active === true
      }
    }
  },
  created() {
   if(this.eventHub){
     this.eventHub.$on('update:selected', (name) => {
       this.active = name === this.name;
     })
   }

  }
}
</script>

<style lang="scss" scoped>
.tabs-panel{

  &.active{
padding: 1em;
  }
}
</style>