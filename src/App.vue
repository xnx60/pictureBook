<template>
  <div id="app">
    <div class="container">
      <!-- <entry></entry> -->
       <component :is="pictureStories[1]"></component>
    </div>   
  </div> 
</template>

<script>
 import entry from "@/components/entry"
 import cantoneseClub from "@/components/storiesPictures/cantoneseClub"
 import showTheater from "@/components/storiesPictures/showTheater"
 import zhongTingLife from "@/components/storiesPictures/zhongTingLife"
 import xiGuanStories from "@/components/storiesPictures/xiGuanStories"
 import catView from "@/components/storiesPictures/catView"
 import { mapState } from 'vuex'

  export default {
 	  name: 'app',
	  components: {
      entry,
      catView,
      xiGuanStories,
      zhongTingLife,
      showTheater,
      cantoneseClub
	  },
	  data() {
 	  	return {
        
	    }
    },
    computed: mapState({
		  pictureStories: state => state.pictureStories,
      selected: state => state.selected
	  })
    

  }
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  background: #B79891;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #94716B, #B79891);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #94716B, #B79891); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  justify-content: center;
  align-items: center;
  .container{
    position: relative;
    width: 1200px;
    min-width: 1200px;
    height: 600px;
    min-height: 600px;
    margin: 0 auto;
    background: white;
    overflow: hidden;
  }
}


</style>
