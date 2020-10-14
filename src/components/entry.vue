<template>
  <div class="map">
    <point v-for="(item, index) in points" :detail="item" :key="index"></point>
    <div class="entry">
      
        <h4>永庆访入口</h4>
        <div class="tri"></div> 
    </div>
    
  </div>
</template>

<script>
import point from "@/components/point";
export default {
  name: 'entry',
  components:{
    point
  },
  data() {
    return {
      points:[
        { 
          name:'xiGuanStories',
          site:'李小龙故居',
          label:'[ 西关轶事 ]',
          left: '52%',
          top:'58%'
        },
        {
          name:'showTheater',
          site:'三雕绣展览馆',
          label:'[ 展览馆上的生活剧场]',
          left: '74%',
          top:'52%'
        },
        {
          name:'catView',
          site:'大台阶',
          label:'[ 猫的视角看世界 ]',
          left:'78%',
          top:'8%'
        },
        {
          name:'CantoneseClub',
          site:'六克拉',
          label:'[ 粤语歌友会 ]',
          left:'78%',
          top:'30%'
        },
        {
          name:'zhongTingLife',
          site:'"万科云"办公区',
          label:'[ 西关轶事 ]',
          left:'59%',
          top:'35%'
        }
      ]
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .map {
    width: 100%;
    height: 100%;
    background: url("../assets/images/map.png") no-repeat center;
    background-size: cover;
    .entry {
      display: flex;
      position: absolute;
      right: 180px;
      bottom:80px;
      width: 137px;
      }
      .tri{
      position: absolute;
      right: 28px;
      top:4px;
        width:0;
        height:0;
        border:8px solid transparent;
        border-left-color:#96736d;
        animation:move .8s ease-in-out infinite
      } 
  }

</style>
