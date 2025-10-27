<template>
  <div class="bg-white dark:bg-black">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight caption-top bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">产品系列</h2>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8 ">
        <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
          <img src="/assets/images/01.jpg" alt="" class="object-cover object-center group-hover:opacity-75">
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50"></div>
          <div class="flex items-end p-6">
            <div>
              <h3 class="font-semibold text-white dark:text-gray-300">
                <router-link to="/story">
                  <span class="absolute inset-0"></span>
                    Yakiniklu 系列
                </router-link>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white dark:text-gray-300">27/01/2023-28/01/2023</p>
            </div>
          </div>
        </div>
        <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
          <img src="/assets/images/01.jpg" alt=""
               class="object-left group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full">
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"></div>
          <div class="flex items-end p-6 sm:absolute sm:inset-0">
            <div>
              <h3 class="font-semibold text-white dark:text-gray-300">
                <router-link to="/story">
                  <span class="absolute inset-0"></span>
                   Angus 系列
                </router-link>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white dark:text-gray-300">简短文字描述</p>
            </div>
          </div>
        </div>
        <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
          <img src="/assets/images/02.jpg" alt="" class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full">
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"></div>
          <div class="flex items-end p-6 sm:absolute sm:inset-0">
            <div>
              <h3 class="font-semibold text-white dark:text-gray-300">
                <router-link to="/story">
                  <span class="absolute inset-0"></span>
                  Shabu 系列
                </router-link>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white dark:text-gray-300">16/04/2023-21/04/2023</p>
            </div>
          </div>
        </div>
      </div>


    </div>
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">牛肉奖牌或合作品牌</h2>
      </div>
      <!-- 三角墙     -->

      <div class="bg-white py-6">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <p class="mt-2 text-lg/8 text-gray-600"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum do</p>
        </div>
        <ul role="list" class="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
          <li v-for="person in people" :key="person.name">
            <img class="mx-auto w-32 h-32 rounded-full outline outline-1 -outline-offset-1 outline-black/5" :src="person.imageUrl" alt="" />
            <h3 class="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{{ person.name }}</h3>
            <p class="text-sm/6 text-gray-600">{{ person.role }}</p>
          </li>
        </ul>
      </div>
    </div>

      <!--  朋友的故事     -->

      <div class="sm:flex sm:items-baseline sm:justify-between mt-4">
        <h2 class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Memories</h2>
      </div>
      <ul  role="list" class="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
        <li class="flex flex-col gap-6 xl:flex-row px-6 sm:px-0">
          <img class="aspect-[4/5] w-60 flex-none rounded-2xl object-cover" src="/assets/images/hero01.jpg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-300">xxxx</h3>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </li>
        <li class="flex flex-col gap-6 xl:flex-row  px-6 sm:px-0">
          <img class="aspect-[4/5] w-60 flex-none rounded-2xl object-cover" src="/assets/images/hero02.jpg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-300">xxxx</h3>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </li>
        <li class="flex flex-col gap-6 xl:flex-row  px-6 sm:px-0">
          <img class="aspect-[4/5] w-60 flex-none rounded-2xl object-cover" src="/assets/images/hero03.jpg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-300">xxxxx</h3>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </li>
        <li class="flex flex-col gap-6 xl:flex-row px-6 sm:px-0">
          <img class="aspect-[4/5] w-60 flex-none rounded-2xl object-cover" src="/assets/images/hero04.jpg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-300">xxxx</h3>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p  class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </li>

        <!-- More people... -->
      </ul>
    </div>
  </div>




</template>

<script setup>
import { ref} from 'vue';

const people = [
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Dries Vincent',
    role: 'Business Relations',
    imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Courtney Henry',
    role: 'Designer',
    imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Tom Cook',
    role: 'Director of Product',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Leonard Krasner',
    role: 'Senior Designer',
    imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Floyd Miles',
    role: 'Principal Designer',
    imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Emily Selman',
    role: 'VP, User Experience',
    imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Kristin Watson',
    role: 'VP, Human Resources',
    imageUrl:
        'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Emma Dorsey',
    role: 'Senior Developer',
    imageUrl:
        'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Alicia Bell',
    role: 'Junior Copywriter',
    imageUrl:
        'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },


]

const dogs = ref([
  {
    name: 'Melon',
    role: 'golden retriever',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Melon.jpg',
  },
  {
    name: 'Mojo',
    role: 'Basenji',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Mojo.jpg',
  },
  {
    name: 'Nami',
    role: 'Terrier',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Nami.jpg',
  },
  {
    name: 'Drake',
    role: 'Cavalier King',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Drake.jpg',
  },
  {
    name: 'Brody',
    role: 'Terrier',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Brody.jpg',
  }

])
const cats = ref([
  {
    name: 'Tom',
    role: 'Ragdoll',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Tom.jpg',
  },
  {
    name: 'Guinness',
    role: 'Felis catus',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Guinness.jpg',
  },
  {
    name: 'Barley',
    role: 'American Shorthair',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Barley.jpg',
  },
  {
    name: 'Figaro',
    role: 'Neva Masquerade',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Figaro.jpg',
  },

])
const pets = ref([
  {
    name: 'Muse',
    role: 'hummingbird',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Muse.jpg',
  },
  {
    name: 'Bard',
    role: 'tiger',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Bard.jpg',
  },
  {
    name: 'Velvet',
    role: 'Reptile',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Velvet.jpg',
  },
  {
    name: 'Bambi',
    role: 'Deer',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/deer.jpg',
  },
  {
    name: 'Polly',
    role: 'Parrot',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Parrot.jpeg',
  },

])
</script>

