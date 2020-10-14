<template>
<div class="xiGuanStories">

    <returnBtn></returnBtn>

     <div class="picture-container">
       <div class="pic-left">
         <!-- <img src="../../assets/images/catView/catView_3.png" alt=""> -->
       </div>
        <div class="pic-right">

       </div>
     </div>
     
  </div>
</template>

<script>
import returnBtn from "@/components/returnBtn"
export default {
name: "xiGuanStories",
components: {
    returnBtn
  }
}
</script>

<style lang="scss">
.xiGuanStories{
    width: 100%;
    height: 100%;
    background: url("../../assets/images/bg.jpg") no-repeat center ;
     padding-top: 55px;
    // background-size: cover;
    .picture-container{
      position: relative;
      width: 70%;
      height: 80%;
      margin-top: 20px;
      background: orangered;
      background: url("../../assets/images/xiGuanStories/xiGuanStories_0.jpg") center no-repeat;
      background-size: cover;
      margin:30px auto;
     
      .pic-left {
        position: absolute;
        left:50px;
        top: 50px;
        width:50%;
        // background: url("../../assets/images/catView/left_bg.jpg") no-repeat;
        background-size: cover;
        // transform-style:preserve-3d;
        // transform-origin: center;
        // transform: rotate(45deg);
      }
    }
}
</style>