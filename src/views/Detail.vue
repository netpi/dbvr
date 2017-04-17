<template>
<div class="content">  
  <h1>视频</h1>
</div>
</template>

<script>
export default {
  name: 'detail',
  created:function(){
    this.$store.dispatch('INIT')
  },
  components: {
  }
}
</script>

<style scoped>
.content {
  margin-top:60px
}
</style>
