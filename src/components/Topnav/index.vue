<template>
  <nav class="bg-white dark:bg-black mt-1">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 justify-between">
        <div class="absolute left-4 top-3 flex items-center sm:hidden">
          <!-- Mobile menu button -->

            <button type="button" @click="toggleMobileMenu" :class="{ 'x-icon': isMenuOpen }" class=" -mt-4 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" :aria-expanded="isMobileMenuOpen.toString()">
                <span class="sr-only">Open main menu</span>
                <!-- Icon when menu is closed -->
                <svg v-if="!isMenuOpen" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <!-- Icon when menu is open -->

                <svg v-if="isMenuOpen" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

          <div class="dark:bg-black hidden sm:ml-4 sm:flex sm:space-x-2 md:space-x-4 lg:space-x-6 text-ba mt-5 md:mt-0 ">
              <router-link to="/home" :class="['inline-flex items-center border-b-2', $route.path === '/home' ? 'border-indigo-500' : 'border-transparent', 'px-1 pt-1 text-sm sm:text-base md:text-xl lg:text-2xl font-medium tracking-wide text-gray-800 dark:text-gray-200 hover:border-orange-300 hover:text-yellow-500 dark:hover:text-yellow-400']">
              HOME
              </router-link>
            <router-link to="/brand" :class="['inline-flex items-center border-b-2', $route.path === '/brand' ? 'border-indigo-500' : 'border-transparent', 'px-1 pt-1 text-sm sm:text-base md:text-xl lg:text-2xl font-medium tracking-wide text-gray-800 dark:text-gray-400 hover:border-orange-300 hover:text-yellow-500 dark:hover:text-pink-200']">
              BRAND
            </router-link>
            <router-link to="/products" :class="['inline-flex items-center border-b-2', $route.path === '/products' ? 'border-indigo-500' : 'border-transparent', 'px-1 pt-1 text-sm sm:text-base md:text-xl lg:text-2xl font-medium tracking-wide  text-gray-800 dark:text-gray-400 hover:border-orange-300 hover:text-yellow-500 dark:hover:text-pink-200']">
              PRODUCTS
            </router-link>
            <router-link to="/store" :class="['inline-flex items-center border-b-2', $route.path === '/store' ? 'border-indigo-500' : 'border-transparent', 'px-1 pt-1 text-sm sm:text-base md:text-xl lg:text-2xl font-medium tracking-wide text-gray-800 dark:text-gray-400 hover:border-orange-300 hover:text-yellow-500 dark:hover:text-pink-200']">
              STORES
            </router-link>
            <router-link to="/blog" :class="['inline-flex items-center border-b-2', $route.path === '/blog' ? 'border-indigo-500' : 'border-transparent', 'px-1 pt-1 text-sm sm:text-base md:text-xl lg:text-2xl font-medium tracking-wide text-gray-800 dark:text-gray-400 hover:border-orange-300 hover:text-yellow-500 dark:hover:text-pink-200']">
              BLOGS
            </router-link>
            <router-link to="/contact" :class="['inline-flex items-center border-b-2', $route.path === '/contact' ? 'border-indigo-500' : 'border-transparent', 'px-1 pt-1 text-sm sm:text-base md:text-xl lg:text-2xl font-medium tracking-wide text-gray-800 dark:text-gray-400 hover:border-orange-300 hover:text-yellow-500 dark:hover:text-pink-200']">
              CONTACT
            </router-link>

          </div>
        </div>

      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="isMobileMenuOpen" class="sm:hidden dark:bg-black" id="mobile-menu">
      <div class="space-y-1 pb-4 pt-2">
        <router-link @click="closeMobileMenu"  to="/home" :class="['block border-l-4',$route.path === '/home' ? 'border-indigo-500 bg-indigo-50 dark:bg-gray-400':'border-transparent','py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-400 hover:text-gray-700']">HOME</router-link>
        <router-link @click="closeMobileMenu" to="/brand" :class="['block border-l-4',$route.path === '/brand' ? 'border-indigo-500 bg-indigo-50 dark:bg-gray-400':'border-transparent','py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-400 hover:text-gray-700']">BRAND</router-link>
        <router-link @click="closeMobileMenu" to="/products" :class="['block border-l-4',$route.path === '/products' ? 'border-indigo-500 bg-indigo-50 dark:bg-gray-400':'border-transparent','py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-400 hover:text-gray-700']">PRODUCTS</router-link>
        <router-link @click="closeMobileMenu" to="/store" :class="['block border-l-4',$route.path === '/store' ? 'border-indigo-500 bg-indigo-50 dark:bg-gray-400':'border-transparent','py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-400 hover:text-gray-700']">STORES</router-link>
        <router-link @click="closeMobileMenu" to="/blog" :class="['block border-l-4',$route.path === '/blog' ? 'border-indigo-500 bg-indigo-50 dark:bg-gray-400':'border-transparent','py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-400 hover:text-gray-700']">BLOGS</router-link>
        <router-link @click="closeMobileMenu" to="/contact" :class="['block border-l-4',$route.path === '/contact' ? 'border-indigo-500 bg-indigo-50 dark:bg-gray-400':'border-transparent','py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-400 hover:text-gray-700']">CONTACT</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>

import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
const isMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  isMenuOpen.value = false;
};
</script>

<style scoped>

</style>

