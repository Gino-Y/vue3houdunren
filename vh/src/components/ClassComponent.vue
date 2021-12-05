<template>
  <div class="hd" :class="[classList]">Gino</div>
</template>

<script>
export default {
  data(){
    return{
      classList:{
        current: true,
        xj:true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hd{
  color: #bb8383;
}
.current{
  background-color: black;
}
xj{
  border: solid 20px #ddd;
}
</style>