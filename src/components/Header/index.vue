<template>
  <div id="header">
    <div>
        <!-- banner 图 -->
      <img v-if="true" id="logo" class="w-full object-cover
         h-40 sm:h-60 md:h-80 lg:h-[500px]  xl:h-[600px]" src="/assets/images/banner/banner09.jpg" alt="" />
    </div>
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex items-center space-x-4 relative
            -translate-x-4  sm:-translate-x-8 md:-translate-x-8 lg:-translate-x-32">
          <img class="  h-16 w-16 mt-3  lg:h-52 lg:w-52 md:h-40 md:w-40  rounded-full  sm:h-24 sm:w-24 sm:-mt-16 lg:-mt-18 transform translate-x-10    " src="/assets/images/logo/Logo.jpg" alt="SM logo" />
<!--          大屏幕的时候，隐藏-->
          <Topnav class="hidden md:block mt-16"></Topnav>

        </div>

      </div>
    </div>
<!--  当展示汉堡图标时候的位置   -->
    <Topnav class=" md:hidden "></Topnav>
  </div>
</template>

<script>


import Topnav from "../Topnav/index.vue";
export default {
  components: {
    Topnav,
  },

  data() {
    return {
      enabled: false,
      audio: null,
      isPlaying: false,
    }
  },
}
</script>

