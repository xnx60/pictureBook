<template>
    
 <div class="returnBtn" @click="$store.commit('return')">
     <!-- <img src="../assets/images/exit.e3044f7f.svg" alt=""> -->
 </div>
   
</template>

<script>
export default {
name: "returnBtn"

}
</script>

<style scoped>
.returnBtn{
    position: absolute;
    top: 40px;
    left: 50px;
    width: 50px;
    height: 50px;
    background: url('../assets/images/exit.e3044f7f.svg');
    background-size: cover;
    transform: rotate(180deg);
    cursor: pointer;
    z-index: 50;
    animation:move .8s infinite
}

@keyframes move {
    0% {
      transform: translateX(0px) rotate(180deg);
    }
    50% {
      transform: translateX(-5px) rotate(180deg);
    }
    100% {
      transform: translateX(0px) rotate(180deg);
    }
  }
</style>