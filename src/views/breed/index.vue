<template>
  <div class="mx-auto max-w-2xl px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
    <div class="bg-white dark:bg-black py-6">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl dark:text-gray-300  bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Foxhound VS Beagle</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Foxhounds and Beagles are both great breeds, but what do they have in common and what do they not have in common. </p>
          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">猎狐犬和比格犬都是很棒的犬种，但它们有什么共同之处和不同之处呢？ </p>
          <div class="mt-10 flex">
            <a href="#" class=" font-semibold leading-6 text-indigo-400" @click="breedComparison">Comparison <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>

        <ul role="list" class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
          <li>
            <router-link to="/foxhound"><img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://d1nuow4z6t9ani.cloudfront.net/images/breed/Foxhound02.jpg" alt=""></router-link>
            <h3 class="mt-6 text-lg font-semibold leading-8 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Foxhounds 猎狐犬</h3>
            <p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">A foxhound is a type of large hunting hound bred for strong hunting instincts, a keen sense of smell, and their bark, energy, drive, and speed.</p>
            <p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">猎狐犬是一种大型狩猎猎犬，其培育目的是为了强烈的狩猎本能、敏锐的嗅觉、哮喘、精力、驱动力和速度。</p>
          </li>
          <li>
            <router-link to="/beagle"><img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://d1nuow4z6t9ani.cloudfront.net/images/breed/Beagle.jpeg" alt=""></router-link>
            <h3 class="mt-6 text-lg font-semibold leading-8 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Beagles 比格犬</h3>
            <p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">The beagle was developed primarily for hunting hare, known as beagling. Possessing a great sense of smell and superior tracking instincts.</p>
            <p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">比格犬主要是为了追踪野兔而培育的，被称为"比格犬狩猎"。比格犬具有敏锐的嗅觉和出色的追踪本能。</p>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="comparisonVisible" class="">
      <div class="relative isolate">
        <div class="mx-auto max-w-7xl px-4">
          <div class="mx-auto flex max-w-2xl flex-col gap-8 bg-cyan-600 dark:bg-cyan-900 px-6 py-6 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-10">
            <img class="h-96 flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-80 lg:max-w-sm" src="https://d1nuow4z6t9ani.cloudfront.net/images/breed/Foxbeagle.png" alt="">
            <div class="w-full flex-auto py-6">
              <ul role="list" class="grid grid-cols-1 gap-x-6 gap-y-3 text-base leading-7 text-gray-100 dark:text-gray-300 sm:grid-cols-2">
                <li class="flex gap-x-3">
                  <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold">Average height (adult):</span> <span>19-25 inches</span>
                </li>
                <li class="flex gap-x-3">
                  <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold">Average height (adult):</span> 13-16 inches
                </li>
                <li class="flex gap-x-3">
                  <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold">Average weight (adult):</span> 45-75 pounds
                </li>
                <li class="flex gap-x-3">
                  <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold"> Average weight (adult):</span> 20-25 pounds
                </li>
                <li class="flex gap-x-3">
                  <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold">  Lifespan:</span> 10-12 years
                </li>
                <li class="flex gap-x-3">
                  <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold">  Lifespan:</span> 12-15 years
                </li>
                <li class="flex gap-x-3">
                  <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold">  Exercise:</span> 1-2 hours per day
                </li>
                <li class="flex gap-x-3">
                  <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold"> Exercise:</span> 1-2 hours per day
                </li>
                <li class="flex gap-x-3">
                  <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold"> Grooming Needs:</span> Minimal
                </li>
                <li class="flex gap-x-3">
                  <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold">  Grooming Needs:</span> Minimal
                </li>
                <li class="flex gap-x-3">
                  <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold"> Family and Dog friendly:</span> Yes
                </li>
                <li class="flex gap-x-3">
                  <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold"> Family and Dog friendly:</span> Yes
                </li>
                <li class="flex gap-x-3">
                  <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold"> Trainability:</span> Moderate; these dogs are intelligent, independent and hardheaded
                </li>
                <li class="flex gap-x-3">
                  <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold"> Trainability:</span> Easy, although they can be stubborn
                </li>
              </ul>

            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

</template>

<script>
import Foxhound from '/src/views/foxhound/index.vue'
import Beagle from '/src/views/beagle/index.vue'

export default {
  name:'Breed',
  components:{
    Foxhound,
    Beagle
  },
  data() {
    return {
      comparisonVisible :false,
    }
  },
  methods:{
    breedComparison:function(){
      this.comparisonVisible = !this.comparisonVisible;
    }
  }
}
</script>

