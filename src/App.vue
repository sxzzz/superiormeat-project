
<template>
  <div>
    <Header></Header>
    <div id="wrapper" class="">
      <div>
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header/index.vue';
import Topnav from "./components/Topnav/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  components: {
    Header,
    Topnav,
    Footer,
  },
  data() {
    return {
    }
  },

}
</script>

<style scoped>
</style>
