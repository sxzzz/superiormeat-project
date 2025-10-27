<template>

  <div class="mx-auto max-w-7xl px-6 lg:px-8 py-6">
   <!--Superior Meat-->

    <!-- Superior Meat -->
    <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
      <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
        <div>
          <h2 class="text-4xl  uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text">Superior Meat</h2>
          <p class="mt-4 text-gray-500 text-xl">
            Superior Meat is Melbourne’s trusted partner for premium Australian and Japanese Wagyu, bridging the gap between world-class producers and discerning culinary professionals. Specialising in ethically sourced, marbling-rich Wagyu, we serve diverse clients—from multi-hats restaurants to home gourmets—through tailored supply solutions. Regulated by PrimeSafe and HACCP certified by DQS, we ensure traceability, consistency, and unmatched quality. We specialise in premium Wagyu solutions for:
          </p>
        </div>

        <!-- 图片动效加强版 -->
        <div class="overflow-hidden rounded-2xl">
          <img
              src="/assets/images/brands/sm01.jpg"
              alt="Superior Meat"
              class="aspect-[3/2] w-full rounded-2xl bg-gray-100 object-cover transform transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-3 hover:brightness-110 hover:shadow-2xl hover:shadow-black/40"
          />
        </div>
      </div>
      <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
        <div
            v-for="incentive in incentives"
            :key="incentive.name"
            class="group bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2"
        >
          <!-- 图片部分 -->
          <div class="flex items-center justify-center">
            <img
                class="w-full h-60 rounded-2xl object-cover transition-transform duration-700 ease-out
           group-hover:scale-110 group-hover:brightness-110"
                :src="incentive.imageSrc"
                alt=""
            />
          </div>

          <!-- 文字部分 -->
          <div class="mt-6 text-center">
            <h3
                class="text-lg font-semibold text-gray-900 transition-colors duration-500 group-hover:text-indigo-600"
            >
              {{ incentive.name }}
            </h3>
            <p
                class="mt-2 text-base text-gray-500 transition-all duration-500 group-hover:text-gray-700"
            >
              {{ incentive.description }}
            </p>
          </div>
        </div>
      </div>

    </div>



    <divider class="mt-6"></divider>


<!--尊品-->

    <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">

      <div class="bg-white">
        <div class="flex flex-col border-b border-gray-200 lg:border-0 ">
          <!-- 上方的导航部分 -->

          <div class="mx-auto max-w-7xl lg:px-8 text-center m-6">
            <h2 class="text-4xl  uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text">
              Partner with Oriental Merchant
            </h2>
            <p class="mt-4 text-xl text-gray-600">
              We have an exclusive partnership with Oriental Merchant, one of the world’s leading distributors of Asian food products and condiments, supplying Asian supermarkets across Australia.
            </p>
          </div>

          <div class="mx-auto mt-6 max-w-3xl sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 gap-8 justify-items-center">
              <img
                  src="/assets/images/logo/om01.jpg"
                  alt="Oriental Merchant"
                  class="aspect-[3/4]  w-full max-w-[250px] rounded-xl object-cover transition-transform duration-700 ease-out hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-xl border border-amber-200"
              />
              <img
                  src="/assets/images/logo/Zun.png"
                  alt="Zun Logo"
                  class="aspect-[3/4] w-full max-w-[250px] rounded-xl object-cover transition-transform duration-700 ease-out hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-xl"
              />
            </div>
          </div>

          <!-- 下方主内容部分 -->
          <div v-if="false" class="bg-gray-100">
            <div class="mx-auto max-w-7xl grid lg:grid-cols-2">
              <!-- 左边文字区域 -->
              <div class="h-full w-full">
                <img
                    src="/assets/images/logo/om01.jpg"
                    alt="Oriental Merchant"
                    class="w-full h-full object-cover"
                />
              </div>

              <!-- 右边图片区域 -->
              <div class="h-full w-full">
                <img
                    src="/assets/images/logo/Zun.png"
                    alt="Oriental Merchant"
                    class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto mt-8 grid border-t border-amber-200 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div class="overflow-hidden rounded-2xl group cursor-pointer transition-transform duration-500 relative mt-8 shadow-sm hover:shadow-xl hover:scale-[1.02] bg-white border border-amber-200 ">
            <!-- 默认图片 -->
            <img
                src="/assets/images/bolarblade.jpg"
                alt="Primary image"
                class="aspect-[3/2] w-full rounded-2xl object-cover   inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
            />

            <!-- hover 图片 -->
            <img
                src="/assets/images/parts/Bolar%20Blade.jpg"
                alt="Hover image"
                class="absolute inset-0 w-full h-full rounded-2xl object-contain opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            />

            <p class="ms-4 mt-8 text-base text-gray-500 relative z-10">
              Shabu Bolar Blade
            </p>
          </div>
          <div class="overflow-hidden rounded-2xl group cursor-pointer transition-transform duration-500 relative mt-8 shadow-sm hover:shadow-xl hover:scale-[1.02] bg-white border border-amber-200 ">
            <!-- 默认图片 -->
            <img
                src="/assets/images/chuckeyeroll.jpg"
                alt="Primary image"
                class="aspect-[3/2] w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:opacity-0"
            />

            <!-- hover 图片 -->
            <img
                src="/assets/images/parts/Chuck%20Eye%20Roll.jpg"
                alt="Hover image"
                class="absolute inset-0 w-full h-full rounded-2xl object-contain opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
            />

            <p class="ms-4 mt-8 text-base text-gray-500 relative z-10">
              Shabu Chuck Eye Roll
            </p>
          </div>
          <div class="overflow-hidden rounded-2xl group cursor-pointer transition-transform duration-500 relative mt-8 shadow-sm hover:shadow-xl hover:scale-[1.02] bg-white border border-amber-200 ">
            <!-- 默认图片 -->
            <img
                src="/assets/images/brisket.jpg"
                alt="Primary image"
                class="aspect-[3/2] w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:opacity-0"
            />

            <!-- hover 图片 -->
            <img
                src="/assets/images/parts/Brisket%20Point%20end.jpg"
                alt="Hover image"
                class="absolute inset-0 w-full h-full rounded-2xl object-contain opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
            />

            <p class=" ms-4 mt-8 text-base text-gray-500 relative z-10">
              Shabu Brisket
            </p>
          </div>
        </div>
      </div>

    </div>


    <divider class="mt-6"></divider>
    <!--上品肉源-->
    <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-[30%_70%]">
        <div>
          <div class="border-b border-gray-200 pb-10">
            <h2 class="text-3xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 text-transparent bg-clip-text">上品肉源</h2>
            <p class="mt-2 text-4xl  uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text">Prime Meat Origin</p>
          </div>

          <dl class="mt-10 space-y-10">
            <div v-for="feature in primeMeatOrigin" :key="feature.name">
              <dt class="text-lg font-medium text-gray-900">{{ feature.name }}</dt>
              <dd class="mt-3 text-base text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
        <!--上图-->
        <div>
          <img
              src="/assets/images/brands/slider03.jpg"
              alt="..."
              class="aspect-square w-full rounded-lg bg-gray-100 object-cover transition-transform duration-700 ease-out hover:scale-105 hover:brightness-110"
          />


          <div class="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">

            <!-- 左图 -->
            <div class="w-full h-60 overflow-hidden rounded-lg relative group">
              <img
                  src="/assets/images/brands/pmo01.jpg"
                  alt="Default"
                  class="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              />
              <img
                  src="/assets/images/parts/Bolar%20Blade.jpg"
                  alt="Hover"
                  class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              />
            </div>

            <!-- 右图 -->
            <div class="w-full h-60 overflow-hidden rounded-lg relative group">
              <img
                  src="/assets/images/brands/pmo02.jpg"
                  alt="Default"
                  class="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              />
              <img
                  src="/assets/images/parts/Chuck%20Eye%20Roll.jpg"
                  alt="Hover"
                  class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              />
            </div>

          </div>
        </div>
      </div>
    </div>


    <divider class="mt-6"></divider>
    <!--四季和牛-->
    <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-4xl  uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text">NIKU SHIKI</h2>
        <p class="mt-4 text-gray-500">Niku Shiki celebrates Japanese tradition with premium Wagyu Beef through our contemporary menu and take-home products. Our butcher section offers restaurant-quality Wagyu, condiments, and sauces for an authentic Yakiniku or Shabu Shabu experience at home.</p>
      </div>

      <div class="mt-16 space-y-16">
        <div v-for="(feature, featureIdx) in nikushiki" :key="feature.name" class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9', 'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4']">
            <h3 class="text-lg font-medium text-gray-900">{{ feature.name }}</h3>
            <p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
          </div>
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1', 'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8']">
            <img :src="feature.imageSrc" :alt="feature.imageAlt" class="aspect-[5/2] w-full rounded-lg bg-gray-100 object-cover transition-transform duration-500 ease-out
         hover:scale-105 hover:brightness-110 hover:shadow-2xl" />
          </div>
        </div>
      </div>
    </div>

    <divider class="mt-6"></divider>
    <!--USHIMATSU-->

    <div class="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
      <div class="mt-8 overflow-hidden ">
        <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 class="text-4xl  uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text">USHIMATSU</h2>
              <p class="mt-6 text-xl/8 text-gray-700">UshiMatsu is a boutique destination dedicated to premium Wagyu excellence.
                Located in Melbourne’s renowned Chadstone Shopping Centre, UshiMatsu offers an exclusive selection of elite Wagyu, curated for true connoisseurs of fine meat.</p>
              <p class="mt-6 text-base/7 text-gray-600">With a focus on quality, craftsmanship, and authenticity, every cut embodies the essence of luxury dining and the spirit of Japan’s Wagyu heritage.</p>
            </div>
            <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img src="/assets/images/brands/ushi04.jpg" alt="" class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover max-sm:w-[30rem] transition-transform duration-500 ease-out
         hover:scale-105 hover:brightness-110 hover:shadow-2xl" />
              </div>
              <div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div class="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto">
                  <img src="/assets/images/brands/ushi03.jpg" alt="" class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover transition-transform duration-500 ease-out
         hover:scale-105 hover:brightness-110 hover:shadow-2xl" />
                </div>
                <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img src="/assets/images/brands/ushi02.jpg" alt="" class=" aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover max-sm:w-[30rem] transition-transform duration-500 ease-out
         hover:scale-105 hover:brightness-110 hover:shadow-2xl" />
                </div>
                <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img src="/assets/images/brands/slider02.jpg" alt="" class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover transition-transform duration-500 ease-out
         hover:scale-105 hover:brightness-110 hover:shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <divider class=""></divider>

  </div>

</template>

<script  setup>
import divider from "/src/components/divider/index.vue";

const incentives = [
  {
    name: 'Wagyu Platter',
    imageSrc: '/assets/images/brands/niki02.jpg',
    description: "Kagoshima Beef - Combination of Striploin, Outside Flat, Cube Roll, Chuck Eye Roll",
  },
  {
    name: 'Wagyu Sushi',
    imageSrc: '/assets/images/sm02.jpg',
    description: "Exquisite wagyu sushi, where tender marbled beef meets delicate craftsmanship.",
  },
  {
    name: 'Wagyu Dish',
    imageSrc: '/assets/images/sm03.jpg',
    description:
        "Ultimate Truffle Foie Gras and Wagyu with Garlic Fried Rice",
  },
]


const primeMeatOrigin = [
  {
    name: 'Authentic Provenance',
    description:
        'Every cut is traceable to its true origin — from renowned farms that uphold the highest standards of breeding and care.',
  },
  { name: 'Exceptional Craftsmanship', description: 'Our artisans handle each cut with precision and reverence, preserving its natural texture, flavor, and beauty.' },
  {
    name: 'Purity and Integrity',
    description:
        'We commit to uncompromising transparency — ensuring every product reflects honesty, quality, and trust.',
  },
  { name: 'The Art of Taste', description: "Beyond premium meat, we deliver a sensory journey — an elevated dining experience where heritage meets refinement." },
]



const nikushiki = [
  {
    name: ' NIKUSHIKI GLEN',
    description:
        'Located in The Glen Shopping Centre, our restaurant and butcher store invite you to enjoy expertly prepared Wagyu Beef and the finest Japanese hospitality in Melbourne.',
    imageSrc: '/assets/images/brands/niku01.jpg',
    imageAlt: '123',
  },
  {
    name: 'NIKUSHIKI CBD',
    description:
        'Discover Melbourne Central’s destination for Wagyu excellence, where our restaurant and butcher boutique deliver meticulously prepared beef and refined Japanese service.',
    imageSrc: '/assets/images/cbdStore.png',
    imageAlt: '456',
  },
]

const zunpinOffers = [
  { name: 'Oriental Merchant', description: 'world’s leading distributors', href: '#' },
  { name: "Exclusive Partnership", description: '60 days of free returns', href: '#' },
  { name: 'Serving all Asian Supermarkets', description: '15% off your first order', href: '#' },
]


</script>

<style>

@keyframes glowMoveBW {
  0% { transform: translateX(0%); }
  50% { transform: translateX(50%); }
  100% { transform: translateX(100%); }
}
.group-hover\:animate-glowMoveBW {
  animation: glowMoveBW 3s linear infinite;
}

</style>