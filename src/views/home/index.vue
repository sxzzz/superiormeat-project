<template>
    <div class="bg-white dark:bg-black relative">

        <div v-if="true" class=" mx-auto max-w-7xl px-6 lg:px-8 mt-6">
            <h4 class="font-lora text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text ">Superior Meat is Melbourne’s trusted partner for premium Australian and Japanese Wagyu, bridging the gap between world-class producers and discerning culinary professionals.</h4>
        </div>

      <!-- Hero -->
      <div v-if="true" class=" mx-auto max-w-7xl px-6 lg:px-8 mt-6">
        <div class="flex flex-col border-b border-gray-200 lg:border-0">
          <div class="relative">
            <div aria-hidden="true" class="absolute hidden h-full w-1/2 bg-gray-900 lg:block" />
            <div class="relative bg-gray-100 lg:bg-transparent py-5">
              <!-- 左侧文字 -->
              <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:px-8">
                <div class="mx-auto max-w-2xl py-36 lg:col-span-1">
                  <div class="lg:pr-16">
                    <h1 class="font-anton text-3xl sm:text-4xl lg:text-3xl font-normal tracking-wide text-white uppercase">
                      Elevate Culinary Craft
                    </h1>
                    <h2 class="font-anton text-2xl sm:text-3xl lg:text-3xl font-normal tracking-wide text-white mt-2 uppercase">
                      Delight Every Bite
                    </h2>
                    <p class=" font-anton tracking-wide mt-4 text-xl leading-6 text-white">
                      We are a premium meat wholesaler in Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>
           <!--双图片切换-->
            <div id="baContainer" class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/3 relative overflow-hidden">
              <!-- After 图 (底层) -->
              <img id="afterImg" src="/assets/images/banner/banner07.jpg" alt="after"
                   class="absolute inset-0 h-full w-full object-cover select-none pointer-events-none" />

              <!-- AFTER 标签：固定在底层右下 -->
              <div id="afterLabel"
                   class="absolute flex items-center justify-center bottom-4 right-8 z-10 pointer-events-none select-none bg-white text-black px-3 py-1 rounded-md text-sm h-10 w-24 uppercase font-medium tracking-wider">
                After
              </div>

              <!-- Before 图 (上层)，和底层完全重叠，但用 clip-path 裁切 -->
              <img id="beforeImg" src="/assets/images/brands/slider03.jpg" alt="before"
                   class="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
                   style="-webkit-clip-path: inset(0 50% 0 0); clip-path: inset(0 50% 0 0);" />

              <!-- BEFORE 标签：固定在上层左上 -->
              <div id="beforeLabel"
                   class="absolute flex items-center justify-center top-4 left-8 z-20 pointer-events-none select-none bg-white  text-black px-3 py-1 rounded-xl text-sm h-10 w-24 uppercase font-medium tracking-wider">
                Before
              </div>

              <!-- 滑块（把竖线做得更明显：竖线 + 小圆点） -->
              <div id="sliderHandle"
                   class="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white     cursor-ew-resize z-30 flex items-center justify-center"
                   style="transform: translateX(-2px);">
              <!-- 圆点 -->
                <div class="w-6 h-6 bg-white rounded-full shadow flex items-center justify-center " style="transform: translateY(-50%); position: absolute; top: 50%;">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
              </div>
            </div>
            <!--拖拽往上-->
          </div>
        </div>
      </div>

      <!--html布局的拖拽暂时不用-->
      <div v-if="false" id="baContainer1" class="relative w-[1220px] mx-auto h-[600px] overflow-hidden mt-6 border-cyan-500 border rounded-2xl">

        <!-- After (Dark 模式版本 - 高级感) -->
        <div id="afterHtml1"
             class="absolute inset-0 w-full h-full bg-gray-900 text-gray-200 px-12 py-16 flex flex-col items-center justify-center space-y-6 select-none pointer-events-none">
          <h1 class="text-5xl font-extrabold text-red-400">🌙 Wagyu A5</h1>
          <p class="text-lg max-w-xl leading-relaxed">
            Known as the <span class="font-semibold text-white">caviar of beef</span>, Wagyu A5 features an exquisite marbling that melts like butter.
            Raised in Japan under strict conditions, each cut offers a luxurious dining experience.
          </p>

          <div class="bg-gray-800 rounded-xl shadow-lg p-6 space-y-3">
            <h2 class="text-xl font-bold text-yellow-400">✨ Key Features</h2>
            <ul class="list-disc list-inside space-y-1 text-sm text-gray-300">
              <li>Marbling Score: A5+</li>
              <li>Texture: Silky, melt-in-mouth</li>
              <li>Flavor: Umami-rich, delicate sweetness</li>
              <li>Processing: Hand-cut, chilled transport</li>
            </ul>
          </div>

          <div class="mt-4 text-2xl font-bold text-green-400">
            💰 Price: $329 / kg
          </div>
        </div>

        <!-- Before (Light 模式版本 - 清新感) -->
        <div id="beforeHtml1"
             class="absolute inset-0 w-full h-full bg-white text-gray-800 px-12 py-16 flex flex-col items-center justify-center space-y-6 select-none pointer-events-none"
             style="-webkit-clip-path: inset(0 50% 0 0); clip-path: inset(0 50% 0 0);">

          <h1 class="text-5xl font-extrabold text-pink-600">☀️ Wagyu MB9+</h1>
          <p class="text-lg max-w-xl leading-relaxed">
            Australian Wagyu MB9+ is admired for its balance of <span class="font-semibold">flavor, tenderness, and marbling</span>.
            Perfect for grilling, yakiniku, or even hotpot, it’s a versatile choice for premium dining.
          </p>

          <div class="bg-gray-100 border border-gray-300 rounded-xl shadow p-6 space-y-3">
            <h2 class="text-xl font-bold text-gray-700">🥩 Product Highlights</h2>
            <ul class="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Marbling Score: 9+</li>
              <li>Texture: Tender yet firm</li>
              <li>Flavor: Rich, buttery finish</li>
              <li>Processing: Fresh cut, vacuum packed</li>
            </ul>
          </div>

          <div class="mt-4 text-2xl font-bold text-red-600">
            💰 Price: $189 / kg
          </div>
        </div>

        <!-- 滑块（竖线 + 圆点） -->
        <div id="sliderHandle1"
             class="absolute top-0 bottom-0 left-1/2 w-[2px] bg-red-500 cursor-ew-resize z-40 flex items-center justify-center"
             style="transform: translateX(-2px);">
          <div class="w-8 h-8 bg-red-600 rounded-full shadow flex items-center justify-center"
               style="transform: translateY(-50%); position: absolute; top: 50%;">
            <!-- SVG 拖拽图标 -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16M12 4v16" />
            </svg>
          </div>
        </div>
      </div>

      <!--封装的组件可用-->
      <div v-if="false" class=" mx-auto max-w-7xl px-6 lg:px-8 mt-6 ">
        <HtmlCompareSlider :width="1220" :height="600">
          <!-- before 部分（左边） -->
          <template #before>
            <div class="w-full h-full bg-white text-gray-900 flex flex-col items-center justify-center px-12 py-16 space-y-6">

              <h1 class="text-5xl font-extrabold text-pink-600">☀️ Wagyu MB9+</h1>
              <p class="text-lg max-w-xl leading-relaxed">
                Australian Wagyu MB9+ is admired for its balance of <span class="font-semibold">flavor, tenderness, and marbling</span>.
                Perfect for grilling, yakiniku, or even hotpot, it’s a versatile choice for premium dining.
              </p>

              <div class="bg-gray-100 border border-gray-300 rounded-xl shadow p-6 space-y-3">
                <h2 class="text-xl font-bold text-gray-700">🥩 Product Highlights</h2>
                <ul class="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Marbling Score: 9+</li>
                  <li>Texture: Tender yet firm</li>
                  <li>Flavor: Rich, buttery finish</li>
                  <li>Processing: Fresh cut, vacuum packed</li>
                </ul>
              </div>

              <div class="mt-4 text-2xl font-bold text-red-600">
                💰 Price: $189 / kg
              </div>

            </div>
          </template>

          <!-- after 部分（右边） -->
          <template #after>
            <div class="w-full h-full bg-gray-900 text-gray-200 flex flex-col items-center justify-center px-12 py-16 space-y-6">
              <h1 class="text-5xl font-extrabold text-red-400">🌙 Wagyu A5 封装组件的文字</h1>
              <p class="text-lg max-w-xl leading-relaxed">
                Known as the <span class="font-semibold text-white">caviar of beef</span>, Wagyu A5 features an exquisite marbling that melts like butter.
                Raised in Japan under strict conditions, each cut offers a luxurious dining experience.
              </p>

              <div class="bg-gray-800 rounded-xl shadow-lg p-6 space-y-3">
                <h2 class="text-xl font-bold text-yellow-400">✨ Key Features</h2>
                <ul class="list-disc list-inside space-y-1 text-sm text-gray-300">
                  <li>Marbling Score: A5+</li>
                  <li>Texture: Silky, melt-in-mouth</li>
                  <li>Flavor: Umami-rich, delicate sweetness</li>
                  <li>Processing: Hand-cut, chilled transport</li>
                </ul>
              </div>

              <div class="mt-4 text-2xl font-bold text-green-400">
                💰 Price: $329 / kg
              </div>
            </div>
          </template>
        </HtmlCompareSlider>
      </div>

      <!--合作伙伴-->
      <div v-if="true" class="bg-gray-800 mt-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div class="">
            <h2 class=" font-anton text-white text-3xl font-bold tracking-wide  sm:text-4xl dark:text-white uppercase">Partner with World-Class Wagyu Brands</h2>
            <p class="font-lora tracking-wide text-white dark:text-white mt-4 text-xl">
              Superior Meat is the appointed distributor for the Australia’s most celebrated wagyu brands — Pardoo Wagyu, Sher Wagyu, JAC Wagyu, Futari, and Oishi Wagyu. In close partnership with these iconic producers, we honor their heritage and craftsmanship, bringing their exceptional wagyu to discerning customers. Through our expert processing and dedication to quality, every cut from Superior Meat delivers the rich flavors, tenderness, and premium experience that these legendary brands are known for.</p>

            <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div v-for="feature in features" :key="feature.name" class=" dark:text-white border-t border-yellow-400 pt-4">
                <dt class=" font-lora text-white font-normal text-2xl  dark:text-white uppercase">{{ feature.name }}</dt>
                <dd class="font-lora text-white mt-2 text-base  dark:text-white">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
          <div class="grid grid-cols-2 grid-rows-2 gap-2   ">
            <div class="relative group aspect-square scale-90 overflow-hidden rounded-lg">
              <img src="/assets/images/logo/ok.jpg" alt="" class="rounded-lg w-full h-full object-cover" />
              <img src="/assets/images/logo/5.jpg" alt="" class="rounded-lg  absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            </div>
            <div  class="relative group aspect-square scale-90">
              <img src="/assets/images/logo/sh.jpg" alt="" class="rounded-lg w-full h-full object-cover" />
              <img src="/assets/images/logo/7.png" alt="" class="rounded-lg  absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            </div>
            <div  class="relative group aspect-square scale-90">
              <img src="/assets/images/logo/kim.jpg" alt="" class="rounded-lg w-full h-full object-cover" />
              <img src="/assets/images/logo/6.jpg" alt="" class="rounded-lg absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            </div>
            <div  class="relative group aspect-square scale-90">
              <img src="/assets/images/logo/jac.png" alt="" class="rounded-lg w-full h-full object-contain" />
              <img src="/assets/images/logo/8.jpg" alt="" class="rounded-lg absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            </div>

            <div  class="relative group aspect-square scale-90">
              <img src="/assets/images/logo/futari.png" alt="" class="rounded-lg w-full h-full object-cover" />
              <img src="/assets/images/logo/9.jpg" alt="" class="rounded-lg absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            </div>
            <div  class="relative group aspect-square scale-90">
              <img src="/assets/images/logo/oishi.png" alt="" class="rounded-lg w-full h-full object-cover" />
              <img src="/assets/images/logo/9.jpg" alt="" class="rounded-lg absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            </div>

          </div>

        </div>
      </div>

      <!--series slider-->
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h2 class="font-anton text-4xl my-6 uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text">Our Premium Series</h2>

            <section id="slider" class="mt-5 flex justify-center">
                <swiper
                    :slidesPerView="1"
                    :spaceBetween="30"
                    :loop="true"
                    :pagination="{clickable: true,}"
                    :navigation="true"
                    :speed=1000
                    :autoplay="{
                      delay: 4000,
                      disableOnInteraction: false,
                    }"
                    :modules="modules"
                    @autoplayTimeLeft="onAutoplayTimeLeft"
                    class="mySwiper w-full max-w-4xl mx-auto "
                >

                    <swiper-slide class="" v-for="(slide, index) in slides" :key="index">
                        <img :src="slide.path" :alt="slide.alt" class="">
                    </swiper-slide>

                    <template #container-end>
                        <div class="autoplay-progress">
                            <svg viewBox="0 0 48 48" ref="progressCircle">
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref="progressContent"></span>
                        </div>
                    </template>
                </swiper>

            </section>
        </div>
      <!--brands-->
        <div v-if="true" class="bg-gray-800 dark:bg-pink-950 py-12 mt-5">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div  class="mx-auto max-w-2xl lg:max-w-none text-white">
                    <div class="text-center">
                        <h2 class=" font-anton text-4xl font-normal tracking-wide my-6 uppercase ">Our Brand</h2>
                    </div>
                  <dl class="m-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 text-center gap-8">
                    <div
                        v-for="(item, index) in brands"
                        :key="index"
                        class="flex flex-col items-center bg-white dark:bg-blue-950 p-6  rounded-xl"
                    >
                      <!-- 图片部分：固定高度、居中对齐 -->
                      <div class="flex items-center justify-center w-48 h-48">
                        <img
                            :src="item.img"
                            :alt="item.name"
                            class="w-40 h-40 object-cover"
                        />
                      </div>

                      <!-- 名称部分 -->
                      <dd
                          class="font-anton uppercase text-2xl font-light tracking-wide h-[3rem] leading-snug text-gray-800"
                      >
                        {{ item.name }}
                      </dd>
                    </div>
                  </dl>
                </div>





            </div>
        </div>
      <!--company news-->
      <div v-if="true" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="font-anton text-4xl my-6 uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-900 to-amber-400 inline-block text-transparent bg-clip-text">Company News</h2>
        <section id="smnews">
          <template v-for="(item, index) in newsList" :key="index">
            <div
                class="flex flex-row mb-8"
                :class="{ 'flex-row-reverse': item.reverse }"
            >
              <!-- 图片部分 -->
              <div
                  :class="[
          'basis-3/4',
          item.reverse ? 'rounded-r-2xl' : 'rounded-l-2xl'
        ]"
              >
                <img
                    :src="item.img"
                    :alt="item.title"
                    class="h-48 lg:h-72 w-full object-cover"
                    :class="item.reverse ? 'rounded-r-2xl' : 'rounded-l-2xl'"
                />
              </div>

              <!-- 文字部分 -->
              <div
                  :class="[
          'basis-1/4 bg-cyan-400 dark:bg-violet-900 flex flex-col justify-between px-3 text-white dark:text-gray-400',
          item.reverse ? 'rounded-l-2xl' : 'rounded-r-2xl'
        ]"
              >
                <!-- 内容部分 -->
                <div class="mt-5">
                  <h2 class="text-sm font-semibold leading-8">{{ item.date }}</h2>
                  <p class="mt-2 text-base lg:text-2xl xl:text-3xl font-bold tracking-tight">
                    {{ item.title }}
                  </p>
                </div>

                <!-- 按钮部分，随整体反转 -->
                <div
                    :class="[
            'mb-6',
            'flex',
            item.reverse ? 'justify-start' : 'justify-end'
          ]"
                >
                  <router-link :to="`/newsdetail/${item.id}`">
                    <button
                        type="button"
                        class="  rounded bg-pink-500 px-6 py-2 text-lg font-medium text-white dark:text-gray-300 shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      See More
                    </button>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- 分隔线 -->
            <hr class="border-rose-300 dark:border-orange-500 my-8" />
          </template>
        </section>
      </div>
      <!--why -->
      <section class="flex flex-col md:my-14 w-full mx-auto max-w-7xl px-5">

        <h2 class="text-2xl md:text-4xl text-center font-anton my-6 uppercase font-bold tracking-tight">
          <span class="bg-gradient-to-r from-yellow-600 via-gray-900 to-amber-400 text-transparent bg-clip-text [ -webkit-background-clip:text ] inline-block">
            Why Choose Superior Meat
          </span>
        </h2>
        <p class="text-center font-normal text-lg mt-5 self-center max-w-[900px] text-gray-700 dark:text-white">
          Based in Melbourne, Australia, Superior Meat delivers unparalleled wagyu wholesale. We source premium wagyu directly from Australia’s top ranches, ensuring authentic, premium flavor. Our skilled artisans expertly craft cuts that highlight exquisite marbling, unmatched by competitors. Rigorous inspections and traceable cold-chain processes guarantee exceptional freshness and quality. With customized orders and seamless logistics, we empower your business with tailored solutions for success.</p>
        <div
            class="mt-14 flex items-center justify-center flex-wrap gap-10 sm:gap-x-16 md:gap-x-28 gap-y-12 md:gap-y-20">
          <div class="flex flex-col justify-center items-center">
            <div class="h-24 w-24 text-orange-500">
              <img src="/assets/images/icons/aus.svg" alt="Check Icon" class="h-24 w-24" />
            </div>
            <p class="font-medium text-lg mt-4 text-center dark:text-white">Authentic Sourcing</p></div>
          <div class="flex flex-col justify-center items-center">
            <div class="h-24 w-24 text-orange-500">
              <img src="/assets/images/icons/steak.svg" alt="Check Icon" class="h-24 w-24" />
            </div>
            <p class="font-medium text-lg mt-4 text-center dark:text-white">Precision Butchery</p></div>
          <div class="flex flex-col justify-center items-center">
            <div class="h-24 w-24 text-orange-500">
              <img src="/assets/images/icons/certificate.svg" alt="Check Icon" class="h-24 w-24" />


            </div>
            <p class="font-medium text-lg mt-4 text-center dark:text-white">Unrivaled Quality</p></div>
          <div class="flex flex-col justify-center items-center">
            <div class="h-24 w-24 text-orange-500">
              <img src="/assets/images/icons/money.svg" alt="Check Icon" class="h-24 w-24" />

            </div>
            <p class="font-medium text-lg mt-4 text-center dark:text-white">Tailored Solutions</p></div>

        </div>
      </section>
      <!--  review    -->
      <section class="w-full mx-auto max-w-7xl px-5my-20 z-10">
        <div class="flex flex-col items-center text-2xl md:text-4xl text-center font-anton my-6 uppercase font-bold tracking-tight ">
          <p class="bg-gradient-to-r from-yellow-600 via-gray-900 to-amber-400 text-transparent bg-clip-text [ -webkit-background-clip:text ] inline-block">Our Reviews</p>
        </div>
        <p class="text-base  text-center mb-10 mx-auto  ">Our loyal customers’ feedback</p>

        <div id="row1" class="relative flex overflow-x-scroll no-scrollbar md:overflow-x-hidden overflow-y-hidden">
          <div class="flex animate-marquee-right z-30">
            <!-- 第一份内容 -->
            <div class="flex" v-for="(group, groupIndex) in 2" :key="'group-' + groupIndex">
              <div class="mx-3 mb-6" v-for="(card, index) in cards" :key="'card-' + groupIndex + '-' + index">
                <div
                    class="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between"
                    :class="card.gradient">
                  <div>
                    <div class="flex flex-row items-center justify-start">
                      <svg v-for="i in 5" :key="i" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42" />
                      </svg>
                    </div>
                    <h5 class="font-bold text-xl dark:text-white  mt-3">{{ card.title }}</h5>
                    <p class="text-base font-normal text-gray-500 dark:text-white mt-6">{{ card.description }}</p>
                  </div>
                  <div>
                    <span class="text-lg dark:text-white font-medium italic">{{ card.author }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="row2" class="relative flex overflow-x-scroll no-scrollbar md:overflow-x-hidden overflow-y-hidden">
          <div class="flex animate-marquee-left z-30">
            <!-- 第一份内容 -->
            <div class="flex" v-for="(group, groupIndex) in 2" :key="'group-' + groupIndex">
              <div class="mx-3 mb-6" v-for="(card, index) in cards" :key="'card-' + groupIndex + '-' + index">
                <div
                    class="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between"
                    :class="card.gradient">
                  <div>
                    <div class="flex flex-row items-center justify-start">
                      <svg v-for="i in 5" :key="i" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42" />
                      </svg>
                    </div>
                    <h5 class="font-bold text-xl dark:text-white mt-3">{{ card.title }}</h5>
                    <p class="text-base font-normal text-gray-500 dark:text-white mt-6">{{ card.description }}</p>
                  </div>
                  <div>
                    <span class="text-lg font-medium dark:text-white italic">{{ card.author }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
import { ref,computed,onMounted} from 'vue';
import { useRoute } from 'vue-router';

import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../index.css';
import  { Autoplay, Pagination,Navigation } from 'swiper';
import {usePostStore}  from '@/store/postStore.js'
import WeatherWidget from '@/components/weather/index.vue';
import divider from "/src/components/divider/index.vue";
import HtmlCompareSlider from "/src/components/HtmlCompareSlider/index.vue";
export default {
    components: {
        Swiper,
        SwiperSlide,
        WeatherWidget,
        divider,
        HtmlCompareSlider,
    },
    setup() {
      onMounted(() => {
        initImageSlider()
        initHtmlSlider()
      })

      function initImageSlider() {
        const container = document.getElementById('baContainer')
        const beforeImg = document.getElementById('beforeImg')
        const handle = document.getElementById('sliderHandle')

        if (!container || !beforeImg || !handle) return

        let dragging = false
        const edgeMargin = 20
        let handleHalf = 0

        const updateHandleHalf = () => {
          handleHalf = handle.offsetWidth / 2
        }

        const moveToClientX = (clientX) => {
          const rect = container.getBoundingClientRect()
          let offsetX = clientX - rect.left
          const minX = edgeMargin + handleHalf
          const maxX = rect.width - (edgeMargin + handleHalf)

          if (offsetX < minX) offsetX = minX
          if (offsetX > maxX) offsetX = maxX

          const percent = (offsetX / rect.width) * 100
          const rightInset = 100 - percent
          const clip = `inset(0 ${rightInset}% 0 0)`
          beforeImg.style.clipPath = clip
          beforeImg.style.webkitClipPath = clip

          handle.style.left = (offsetX - handleHalf) + 'px'
        }

        handle.addEventListener('mousedown', (e) => { e.preventDefault(); dragging = true })
        document.addEventListener('mouseup', () => (dragging = false))
        document.addEventListener('mousemove', (e) => { if (dragging) moveToClientX(e.clientX) })

        handle.addEventListener('touchstart', (e) => { e.preventDefault(); dragging = true })
        document.addEventListener('touchend', () => (dragging = false))
        document.addEventListener('touchmove', (e) => { if (dragging) moveToClientX(e.touches[0].clientX) })

        window.addEventListener('resize', () => {
          updateHandleHalf()
          const rect = container.getBoundingClientRect()
          moveToClientX(rect.left + rect.width / 2)
        })

        const tryInit = () => {
          updateHandleHalf()
          const rect = container.getBoundingClientRect()
          moveToClientX(rect.left + rect.width / 2)
        }

        if (!beforeImg.complete) {
          beforeImg.onload = tryInit
        } else {
          tryInit()
        }
      }

      function initHtmlSlider() {
        const container = document.getElementById('baContainer1')
        const beforeHtml = document.getElementById('beforeHtml1')
        const handle = document.getElementById('sliderHandle1')

        if (!container || !beforeHtml || !handle) return

        let dragging = false
        const minOffset = 30

        const move = (clientX) => {
          const rect = container.getBoundingClientRect()
          let offsetX = clientX - rect.left
          if (offsetX < minOffset) offsetX = minOffset
          if (offsetX > rect.width - minOffset) offsetX = rect.width - minOffset

          beforeHtml.style.clipPath = `inset(0 ${rect.width - offsetX}px 0 0)`
          beforeHtml.style.webkitClipPath = `inset(0 ${rect.width - offsetX}px 0 0)`

          handle.style.left = offsetX + 'px'
        }

        handle.addEventListener('mousedown', () => (dragging = true))
        document.addEventListener('mouseup', () => (dragging = false))
        document.addEventListener('mousemove', (e) => {
          if (dragging) move(e.clientX)
        })

        handle.addEventListener('touchstart', () => (dragging = true))
        document.addEventListener('touchend', () => (dragging = false))
        document.addEventListener('touchmove', (e) => {
          if (dragging) move(e.touches[0].clientX)
        })
      }

      const progressCircle = ref(null);
      const progressContent = ref(null);
      const showMore = ref(false);
      const onAutoplayTimeLeft = (s, time, progress) => {
          progressCircle.value.style.setProperty('--progress', 1- progress);
          progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
      };
      const features = ref( [
        { name: 'Okan', description: 'Okan Wagyu is a flagship brand from Western Australia’s Pilbara region.',descriptionCN:'123Lorem ipsum dolor sit amet, consectetur adipiscing elit.',imageUrl:'/assets/images/logo/okanlogo.png' },
        { name: 'Sher', description: 'Australia’s delicious award winning beef produced by the Sher family.',descriptionCN:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',imageUrl:'https://d1nuow4z6t9ani.cloudfront.net/images/hero/hero-features04.jpg'},
        { name: 'Kimbara', description: 'Kimbara Wagyu offers rich flavour, melt-in-your-mouth tenderness, and smoky aromas.',descriptionCN:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',imageUrl:'https://d1nuow4z6t9ani.cloudfront.net/images/hero/hero-featurhero-features02.jpg' },
        { name: 'JAC', description: 'JAC Wagyu Australia’s Finest Wagyu, Crafted from the Ground Up.',descriptionCN:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',imageUrl:'https://d1nuow4z6t9ani.cloudfront.net/images/hero/hero-featurhero-features02.jpg' },
        { name: 'Futari', description: ' Fullblood Wagyu in the best Japanese Tradition.',descriptionCN:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',imageUrl:'https://d1nuow4z6t9ani.cloudfront.net/images/hero/hero-featurhero-features02.jpg' },
        { name: 'OISHI', description: 'Oishi Wagyu crafted to redefine luxury with every cut, every bite, every experience',descriptionCN:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',imageUrl:'https://d1nuow4z6t9ani.cloudfront.net/images/hero/hero-featurhero-features02.jpg' },



      ]);
      const postStore = usePostStore()
      const posts = computed(() => postStore.posts)
      const slides =  [
          { path: '/assets/images/products/ShPremium.jpg', alt: '' },
          { path: '/assets/images/products/ShSilver.jpg', alt: '' },
          { path: '/assets/images/products/ShSupreme.jpg', alt: '' },
          { path: '/assets/images/products/YaGold.jpg', alt: '' },
          { path: '/assets/images/products/YaPlatinum.jpg', alt: '' },
          { path: '/assets/images/products/YaSilver.jpg', alt: '' },
          { path: '/assets/images/products/YaSupreme.jpg', alt: '' },
      ]
      const brands = [
        {
          name: "SUPERIOR MEAT",
          img: "/assets/images/logo/smsquare.png",
        },
        {
          name: "ZUNPIN",
          img: "/assets/images/logo/Zun.png",
        },
        {
          name: "PRIME MEAT ORIGIN",
          img: "/assets/images/logo/Pmo.png",
        },
        {
          name: "NIKUSHIKI",
          img: "/assets/images/logo/nikusquare.png",
        },
        {
          name: "USHIMATSU",
          img: "/assets/images/logo/Ushi.png",
        },
      ];

      const newsList = [
        {
          id: "03042025",
          date: "03/04/2025",
          title: "NIKUSHIKI GLEN",
          img: "/assets/images/brands/niku01.jpg",
          reverse: false,
        },
        {
          id: "24062024",
          date: "24/06/2024",
          title: "NIKUSHIKI MELBOURNE CENTRAL",
          img: "/assets/images/cbdStore.png",
          reverse: true,
        },
        {
          id: "01112024",
          date: "01/11/2024",
          title: "Japan Trip",
          img: "/assets/images/japanfarm.jpg",
          reverse: false,
        },
      ];
      const itemsToShow = computed(() => {
        if (showMore.value) {
          return posts.value; // 显示所有元素
        } else {
          return posts.value.slice(0, 5); // 只显示前四个元素
        }
      });
      const toggleShowMore = () => {
        showMore.value = !showMore.value; // 切换按钮状态
        };
      const stats = [
        { id: 1, name: 'Skin Pack', value: 'Skin Pack' },
        { id: 2, name: 'Gold Pack', value: 'Gold Pack' },
        { id: 3, name: 'Gold Pack', value: 'Gold Pack' },
        { id: 4, name: 'Gold Pack', value: 'Gold Pack' },
      ]

      const cards = [
        {
          title: 'Best place in Town',
          description: 'This has got to be the best place in the Eastern suburbs if you are after a special treat! There are premium Angus, Australian wagyu, and Japanese wagyu here. ',
          author: 'Mark Wong',
          gradient: 'bg-gradient-to-br from-amber-500/40 via-yellow-400/30 to-slate-900/60'
        },
        {
          title: 'A Experience Like No Other',
          description: 'Niku Shiki is a must-visit for anyone who appreciates the finest Wagyu beef. They offers an exceptional dining experience, while the butcher shop allows you to take the quality home with you.',
          author: 'Thomas Reeh',
          gradient: 'bg-gradient-to-br from-orange-400/40 via-rose-300/30 to-zinc-900/60'
        },
        {
          title: 'Kristine Subagiyo',
          description: 'Niku Shiki specialises in all things Wagyu and only serve the best cuts from award-winning Stone Axe wagyu',
          author: 'Kristine Subagiyo',
          gradient: 'bg-gradient-to-br from-pink-300/30 via-amber-200/25 to-slate-800/60'
        },
        {
          title: 'Liam Robertson',
          description: 'Exceptional Wagyu every time! The team really knows their product and always delivers premium cuts that our customers love. Fast delivery, great service, and unbeatable quality. Highly recommended for anyone in the food business.',
          author: 'Eddie',
          gradient: 'bg-gradient-to-br from-amber-600/40 via-orange-400/30 to-neutral-900/60'
        },
        {
          title: 'Olivia Bennett',
          description: 'Superior Meat has been a fantastic supplier for our restaurant. Consistent quality, fair pricing, and excellent customer support. Our chefs love working with their Wagyu — it’s always a standout on the menu.',
          author: 'Glen',
          gradient: 'bg-gradient-to-br from-[rgba(130,200,255,0.4)] via-[rgba(90,230,220,0.3)] to-[rgba(255,255,255,0.15)]'
        },
        {
          title: 'Emily Wong',
          description: 'Brilliant experience dealing with the team at Wagyu Wholesale. Very responsive, professional, and their products are simply world-class. If you’re looking for genuine premium Wagyu, this is the place to go.',
          author: 'Lisa',
          gradient: 'bg-gradient-to-br from-[rgba(200,140,255,0.4)] via-[rgba(255,120,200,0.3)] to-[rgba(255,255,255,0.15)]'
        },
        {
          title: 'Rachel Miller',
          description: 'The beef is absolutely incredible. You can really taste the difference.',
          author: 'Bob',
          gradient: 'bg-gradient-to-br from-[rgba(255,185,164,0.3)] via-[rgba(255,109,66,0.25)] to-[rgba(255,255,255,0.1)]'
        },
      ]

      const showPanel = ref(false);

      const togglePanel = () => {
        showPanel.value = !showPanel.value
      }
      const route = useRoute()
      // 判断当前是否是 /home
      const showPopup = computed(() => {
        return ['/home'].includes(route.path)
      })
      return {
            onAutoplayTimeLeft,
            progressCircle,
            progressContent,
            modules: [Autoplay, Pagination, Navigation],
            posts,
            slides,
            newsList,
            itemsToShow,
            toggleShowMore,
            showMore,
            features,
            stats,
            brands,
            togglePanel,
            showPopup,
            cards,
            showPanel
          }
        },
    name:'Hero',
}
</script>


<style>

.swiper {
    width: 345px;
    height: 280px;
}

@media (min-width: 640px) {

    .swiper {
        width: 90%;
        height: 450px;
    }
}

@media (min-width: 1200px) {

    .swiper {
        width: 100%;
        height: 600px;
    }
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.swiper {
    margin-left: auto;
    margin-right: auto;
}
.swiper-button-next,
.swiper-button-prev {
    color: white; /* Change the color to your desired color */
}
.swiper-pagination-bullet {
    background-color: white; /* Change the color to your desired color */
}
.autoplay-progress {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
}

.autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: white;
    fill: none;
    stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
}

</style>