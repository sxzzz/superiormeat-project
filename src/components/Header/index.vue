<template>
  <div class="">
    <div>
        <!-- banner 图 -->
      <img id="logo" class="h-52 w-full object-cover object-[center_top_20%] lg:h-[500px]" src="/assets/images/banner/banner05.jpg" alt="" />
    </div>
    <div v-if="true" class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex items-center space-x-4 relative
            -translate-x-4  sm:-translate-x-8 md:-translate-x-16 lg:-translate-x-32">
          <img class=" h-24 w-24 lg:h-52 lg:w-52 sm rounded-full  sm:h-24 sm:w-24 -mt-12 sm:-mt-16 lg:-mt-18 left-12 lg:-translate-x-6  " src="/assets/images/logo/Logo.jpg" alt="SM logo" />
          <Topnav v-if="true" class="mt-16"></Topnav>
        </div>

      </div>
    </div>
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
  mounted() {
  },
  computed: {
    // themeStore() {
    //   return useThemeStore()
    // }
  },
  methods:{
    // toggleButton() {
    //   this.themeStore.toggleDarkMode()
    // },
  },
}
</script>

