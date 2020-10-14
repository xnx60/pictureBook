<template>
 <div class="cantoneseClub">

    <returnBtn></returnBtn>

    
 </div>    
</template>

<script>
import returnBtn from "@/components/returnBtn"
export default {
name: "cantoneseClub",
components: {
    returnBtn
  }
}
</script>

<style lang="scss">
.cantoneseClub{
    width: 100%;
    height: 100%;
    background: url("../../assets/images/bg.jpg") no-repeat center ;
    padding-top: 55px;
    // background-size: cover;
    .picture-container{
      position: relative;
      width: 65%;
      height: 80%;
      margin-top: 20px;
      background: orangered;
      background: url("../../assets/images/catView/catView_0.jpg") center;
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