<template>
  <div class="point"
    :style="{
      left: detail.left,
      top: detail.top
    }"
    @click="$store.commit('select',detail.name)"
   >
  
    <div class="label">
        <h3>{{detail.site}}</h3>
        <p>{{detail.label}}</p>
        <div class="tri"></div> 
    </div>
       
    
  
  
    

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'point',
  props:{
    detail:{
      type:Object
    }
  }
}
</script>

<style lang="scss">
  .point{
    position: absolute;
    width: 130px;
    height: 120px;
    // background: rgba(0,0,0,.08);
    font-size: 12px;
    cursor: pointer;
    .label {
      position: absolute;
      left: -125px;
      top:50px;
      width: 137px;
      // background: orangered;
      .tri{
      position: absolute;
      right: 2px;
      top:2px;
        width:0;
        height:0;
        border:8px solid transparent;
        border-left-color:#96736d;
        animation:move .8s ease-in-out infinite
      } 
    }  
     
  }

  @keyframes move {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-3px);
    }
    100% {
      transform: translateX(0px);
    }
  }
</style>