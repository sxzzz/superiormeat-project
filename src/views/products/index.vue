

<template>
  <div class="bg-white dark:bg-black">

    <!-- Yakiniku -->
    <div
        v-for="galleryItem in yakiniku"
        :key="galleryItem.subtitle"
        class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
    >
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2
            class="text-4xl uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text"
        >
          {{ galleryItem.subtitle }}
        </h2>
      </div>

      <!-- 图片卡片网格 -->
      <div
          class="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
            v-for="(image, index) in galleryItem.images"
            :key="index"
            class="group bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- 图片部分 -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
                :src="image.path"
                :alt="image.alt"
                class="h-full w-full object-cover object-center transition duration-500 group-hover:blur-sm"
            />

            <!-- 遮罩 + 按钮 -->
            <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 bg-black bg-opacity-50 text-white font-semibold text-lg"
            >
              <button
                  @click="openYakinikuModal(image)"
                  class="px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition"
              >
                View More
              </button>
            </div>

            <!-- 点赞图标 -->
            <i
                class="bi bi-chat-heart absolute bottom-4 right-6 text-gray-100 hover:text-pink-400 text-2xl"
            ></i>
          </div>

          <!-- ✅ 下方信息区 -->
          <div
              class="bg-white px-4 py-5 text-center transition duration-500 group-hover:from-pink-50 group-hover:to-pink-100"
          >
            <h3
                class="text-lg font-bold text-gray-800 mb-1 group-hover:text-pink-600 transition-all duration-500"
            >
              {{ image.title }}
            </h3>

          </div>
        </div>
      </div>
    </div>

    <!-- Shabu -->
    <div
        v-for="galleryItem in shabu"
        :key="galleryItem.subtitle"
        class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
    >
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2
            class="text-4xl uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text"
        >
          {{ galleryItem.subtitle }}
        </h2>
      </div>

      <!-- 图片卡片网格 -->
      <div
          class="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
            v-for="(image, index) in galleryItem.images"
            :key="index"
            class="group bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- 图片部分 -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
                :src="image.path"
                :alt="image.alt"
                class="h-full w-full object-cover object-center transition duration-500 group-hover:blur-sm"
            />

            <!-- 遮罩 + 按钮 -->
            <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 bg-black bg-opacity-50 text-white font-semibold text-lg"
            >
              <button
                  @click="openShabuModal(image)"
                  class="px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition"
              >
                View More
              </button>
            </div>

            <!-- 点赞图标 -->
            <i
                class="bi bi-chat-heart absolute bottom-4 right-6 text-gray-100 hover:text-pink-400 text-2xl"
            ></i>
          </div>

          <!-- ✅ 下方信息区 -->
          <div
              class="bg-white px-4 py-5 text-center transition duration-500 group-hover:from-pink-50 group-hover:to-pink-100"
          >
            <h3
                class="text-lg font-bold text-gray-800 mb-1 group-hover:text-pink-600 transition-all duration-500"
            >
              {{ image.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Steak -->
    <div
        v-for="galleryItem in steak"
        :key="galleryItem.subtitle"
        class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
    >
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2
            class="text-4xl uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text"
        >
          {{ galleryItem.subtitle }}
        </h2>
      </div>

      <!-- 图片卡片网格 -->
      <div
          class="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
            v-for="(image, index) in galleryItem.images"
            :key="index"
            class="group bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- 图片部分 -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
                :src="image.path"
                :alt="image.alt"
                class="h-full w-full object-cover object-center transition duration-500 group-hover:blur-sm"
            />

            <!-- 遮罩 + 按钮 -->
            <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 bg-black bg-opacity-50 text-white font-semibold text-lg"
            >
              <button
                  @click="openSteakModal(image)"
                  class="px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition"
              >
                View More
              </button>
            </div>

            <!-- 点赞图标 -->
            <i
                class="bi bi-chat-heart absolute bottom-4 right-6 text-gray-100 hover:text-pink-400 text-2xl"
            ></i>
          </div>

          <!-- ✅ 下方信息区 -->
          <div
              class="bg-white px-4 py-5 text-center transition duration-500 group-hover:from-pink-50 group-hover:to-pink-100"
          >
            <h3
                class="text-lg font-bold text-gray-800 mb-1 group-hover:text-pink-600 transition-all duration-500"
            >
              {{ image.title }}
            </h3>
            <!--            <p-->
            <!--                class="text-sm text-gray-500 opacity-90 transition duration-500 group-hover:text-gray-700"-->
            <!--            >-->
            <!--              {{ image.description }}-->
            <!--            </p>-->
          </div>
        </div>
      </div>
    </div>

    <!-- Platter -->
    <div
        v-for="galleryItem in platters"
        :key="galleryItem.subtitle"
        class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
    >
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2
            class="text-4xl uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text"
        >
          {{ galleryItem.subtitle }}
        </h2>
      </div>

      <!-- 图片卡片网格 -->
      <div
          class="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
            v-for="(image, index) in galleryItem.images"
            :key="index"
            class="group bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- 图片部分 -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
                :src="image.path"
                :alt="image.alt"
                class="h-full w-full object-cover object-center transition duration-500 group-hover:blur-sm"
            />

            <!-- 遮罩 + 按钮 -->
            <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 bg-black bg-opacity-50 text-white font-semibold text-lg"
            >
              <button
                  @click="openPlatterModal(image)"
                  class="px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition"
              >
                View More
              </button>
            </div>

            <!-- 点赞图标 -->
            <i
                class="bi bi-chat-heart absolute bottom-4 right-6 text-gray-100 hover:text-pink-400 text-2xl"
            ></i>
          </div>

          <!-- ✅ 下方信息区 -->
          <div
              class="bg-white px-4 py-5 text-center transition duration-500 group-hover:from-pink-50 group-hover:to-pink-100"
          >
            <h3
                class="text-lg font-bold text-gray-800 mb-1 group-hover:text-pink-600 transition-all duration-500"
            >
              {{ image.title }}
            </h3>
<!--            <p-->
<!--                class="text-sm text-gray-500 opacity-90 transition duration-500 group-hover:text-gray-700"-->
<!--            >-->
<!--              {{ image.description }}-->
<!--            </p>-->
          </div>
        </div>
      </div>
    </div>

    <!-- platter弹出窗口 -->
    <transition name="fade">
      <div v-if="isPlatterModalOpen" @click.self="closePlatterModal" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div class="bg-white rounded-2xl shadow-2xl w-full sm:w-[500px] md:w-[600px] lg:w-[800px] max-h-[90vh] overflow-y-auto mx-4 p-6 relative">
          <!-- 关闭按钮 -->
          <button
              class="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              @click="closePlatterModal"
          >
            &times;
          </button>

          <!-- 动态标题 -->
          <h2 class="text-3xl font-bold mb-4 text-center text-pink-600">
            {{ selectedPlatterImage?.title || 'Wagyu Detail' }}
          </h2>

          <!-- 弹窗内部内容（可通过 v-for 动态渲染） -->
          <div class="space-y-4 text-gray-700">
            <p class="text-lg">{{ selectedPlatterImage?.description }}</p>

            <!-- 如果该图片有额外的内容数组 -->
            <div v-if="selectedPlatterImage?.details && selectedPlatterImage.details.length" class="grid grid-cols-2 gap-4">
              <div
                  v-for="(detail, i) in selectedPlatterImage.details"
                  :key="i"
                  class="bg-gray-100 p-4 rounded-lg shadow"
              >
                <h3 class="font-bold text-pink-600 mb-2">{{ detail.subtitle }}</h3>
                <p class="text-sm">{{ detail.text }}</p>
              </div>
            </div>

            <!-- 图片展示 -->
            <img
                v-if="selectedPlatterImage?.preview"
                :src="selectedPlatterImage.preview"
                class="rounded-lg mt-4 w-full object-cover"
            />
          </div>

        </div>
      </div>
    </transition>
    <!-- yakiniku弹出窗口 -->
    <transition name="fade">
      <div
          v-if="isYakinikuModalOpen"
          class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          @click.self="closeYakinikuModal"
      >
        <!-- 弹窗主体 -->
        <div class="relative w-full max-w-7xl mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl">
          <!-- 关闭按钮 -->
          <button
              class="absolute top-4 right-4 z-50 text-black bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center transition"
              @click="closeYakinikuModal"
          >
            &times;
          </button>

          <!-- 内容区 -->
          <div class="p-8 text-center">
            <!-- 主标题 -->
            <h2 class="text-xl lg:text-3xl font-bold text-gray-900 mb-2">{{selectedYakinikuImage?.title}}</h2>

            <!-- 副标题 -->
            <h3 class="text-base lg:text-xl text-gray-700 mb-4 font-medium">{{ selectedYakinikuImage?.subtitle }}</h3>

            <!-- 描述 -->
            <div class="flex flex-col md:flex-row items-start justify-center gap-8 max-w-5xl mx-auto text-left md:text-left mb-8">
              <p class="text-gray-600  leading-relaxed text-sm">
                {{ selectedYakinikuImage?.description }}
              </p>
            </div>

            <!-- 图片展示 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div class="overflow-hidden rounded-xl shadow border-amber-500 border  ">
                <img
                    :src="selectedYakinikuImage.path"

                    alt="Shabu Beef Left"
                    class="w-full h-[200px] sm:[300px] md:h-[450px] lg:h-[500px] object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div class="overflow-hidden rounded-xl shadow border-amber-500 border  ">
                <img
                    :src="selectedYakinikuImage.preview"
                    alt="Shabu Beef Right"
                    class="w-full h-[200px] sm:[300px] md:h-[450px] lg:h-[500px] object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- Shabu弹出窗口 -->
    <transition name="fade">
      <div
          v-if="isShabuModalOpen"
          class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          @click.self="closeShabuModal"
      >
        <!-- 弹窗主体 -->
        <div class="relative w-full max-w-7xl mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl">
          <!-- 关闭按钮 -->
          <button
              class="absolute top-4 right-4 z-50 text-black bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center transition"
              @click="closeShabuModal"
          >
            &times;
          </button>

          <!-- 内容区 -->
          <div class="p-8 text-center">
            <!-- 主标题 -->
            <h2 class="text-xl lg:text-3xl font-bold text-gray-900 mb-2">{{selectedShabuImage?.title}}</h2>

            <!-- 副标题 -->
            <h3 class="text-base lg:text-xl text-gray-700 mb-4 font-medium">{{ selectedShabuImage?.subtitle }}</h3>

            <!-- 描述 -->
            <div class="flex flex-col md:flex-row items-start justify-center gap-8 max-w-5xl mx-auto text-left md:text-left mb-8">
              <p class="text-gray-600  leading-relaxed">
                {{ selectedShabuImage?.description }}
              </p>
            </div>

            <!-- 图片展示 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div class="overflow-hidden rounded-xl shadow border-amber-500 border  ">
                <img
                    :src="selectedShabuImage.path"

                    alt="Shabu Beef Left"
                    class="w-full h-[200px] sm:[300px] md:h-[450px] lg:h-[500px] object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div class="overflow-hidden rounded-xl shadow border-amber-500 border  ">
                <img
                    :src="selectedShabuImage.preview"
                    alt="Shabu Beef Right"
                    class="w-full h-[200px] sm:[300px] md:h-[450px] lg:h-[500px] object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- Steak弹出窗口 -->
    <transition name="fade">
      <div
          v-if="isSteakModalOpen"
          class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          @click.self="closeSteakModal"
      >
        <!-- 弹窗主体 -->
        <div class="relative w-full max-w-7xl mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl">
          <!-- 关闭按钮 -->
          <button
              class="absolute top-4 right-4 z-50 text-black bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center transition"
              @click="closeSteakModal"
          >
            &times;
          </button>

          <!-- 内容区 -->
          <div class="p-8 text-center">
            <!-- 主标题 -->
            <h2 class="text-xl lg:text-3xl font-bold text-gray-900 mb-2">{{selectedSteakImage?.title}}</h2>

            <!-- 副标题 -->
            <h3 class="text-base lg:text-xl text-gray-700 mb-4 font-medium">{{ selectedSteakImage?.subtitle }}</h3>

            <!-- 描述 -->
            <div class="flex flex-col md:flex-row items-start justify-center gap-8 max-w-5xl mx-auto text-left md:text-left mb-8">
              <p class="text-gray-600  leading-relaxed">
                {{ selectedSteakImage?.description }}
              </p>
            </div>

            <!-- 图片展示 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div class="overflow-hidden rounded-xl shadow border-amber-500 border  ">
                <img
                    :src="selectedSteakImage.path"

                    alt="Shabu Beef Left"
                    class="w-full h-[200px] sm:[300px] md:h-[450px] lg:h-[500px] object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div class="overflow-hidden rounded-xl shadow border-amber-500 border  ">
                <img
                    :src="selectedSteakImage.preview"
                    alt="Shabu Beef Right"
                    class="w-full h-[200px] sm:[300px] md:h-[450px] lg:h-[500px] object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';

onMounted(() => {
  //fetchImages()
})

// 图片与详情数据
const platters = ref([
  {
    id: 4,
    subtitle: 'Platter',
    images: [
      {
        path: '/assets/images/products/ShPremium-1.jpg',
        alt: '',
        title: 'Shabu Premium Platter',
        description: 'Savor the art of shabu-shabu with a refined selection of prime ingredients.\n' +
            'The Shabu Premium Platter offers a perfectly balanced mix of flavor, texture, and freshness — designed for those who appreciate simple elegance in every dip.',
        preview: '/assets/images/products/ShPremium.jpg',
        details: [
          { subtitle: 'Quality', text: 'Savor the finest cuts, perfectly curated for a premium shabu experience.' },
          { subtitle: 'Experience', text: 'A premium shabu journey in every bite.' },
        ]
      },
      {
        path: '/assets/images/products/ShSupreme-1.jpg',
        alt: '',
        title: 'Shabu Supreme Platter',
        description: 'Immerse yourself in the ultimate shabu-shabu experience.\n' +
            'The Shabu Supreme Platter features top-grade meats and farm-fresh vegetables, offering unmatched richness and depth.',
        preview: '/assets/images/products/ShSupreme.jpg',
        details: [
          { subtitle: 'Quality', text: 'Indulge in the ultimate shabu feast – the supreme selection for true connoisseurs.' },
          { subtitle: 'Experience', text: 'Make every gathering unforgettable with the ultimate shabu indulgence.' },
        ]
      },
      {
        path: '/assets/images/products/YaPlatinum-1.jpg',
        alt: '',
        title: 'Yakiniku Platinum Platter',
        description: 'For those who desire nothing but the best.\n' +
            'The Yakiniku Platinum Platter showcases premium, hand-selected cuts of beef — each one bursting with umami and tenderness.\n' +
            'It’s not just yakiniku; it’s a platinum-level indulgence.',
        preview: '/assets/images/products/yaPlatinum.jpg',
        details: [
          { subtitle: 'Quality', text: 'Indulge in the ultimate yakiniku feast – the platinum standard of flavor.' },
          { subtitle: 'Experience', text: 'Generous, mouth-watering, and nothing less than platinum.' },
        ]
      },
      {
        path: '/assets/images/products/YaGold-1.jpg',
        alt: '',
        title: 'Yakiniku Gold Platter',
        description: 'Experience the golden balance of flavor and texture.\n' +
            'The Yakiniku Gold Platter brings together perfectly marbled cuts, grilled to perfection for a rich yet elegant dining experience.\n' +
            'A true celebration of craftsmanship and taste.',
        preview: '/assets/images/products/YaGold.jpg',
        details: [
          { subtitle: 'Quality', text: 'Elevate your dinner with golden flavors and quality cuts.' },
          { subtitle: 'Experience', text: 'Perfectly portioned for a deliciously satisfying meal.' },
        ]
      },
    ]
  }
])

const yakiniku222 = ref([
  {
    id: 4,
    subtitle: 'Yakiniku',
    images: [
      {
        path: '/assets/images/products/yaShortRib.jpg',
        title:'test1',
        titleBefore: 'Chuck Roll MB9+',
        descriptionBefore: 'Australian Wagyu MB9+ is admired for its balance of flavor, tenderness, and marbling Perfect for grilling, yakiniku, or even hotpot, it’s a versatile choice for premium dining.',
        detailsBefore: [
          { subtitle: 'Marbling Score', text: 'MB9+' },
          { subtitle: 'Texture', text: 'Silky, melt-in-mouth' },
          { subtitle: 'Flavor', text: 'Umami-rich, delicate sweetness' },
          { subtitle: 'Processing', text: 'Hand-cut, chilled transport' },
        ],
        titleAfter: 'Chuck Roll A5',
        descriptionAfter: 'Known as the caviar of beef Wagyu A5 features an exquisite marbling that melts like butter. Raised in Japan under strict conditions, each cut offers a luxurious dining experience.',
        detailsAfter: [
          { subtitle: 'Marbling Score', text: 'A5+' },
          { subtitle: 'Texture', text: 'Tender yet firm' },
          { subtitle: 'Flavor', text: 'Rich, buttery finish' },
          { subtitle: 'Processing', text: 'Fresh cut, vacuum packed' },
        ],
        priceBefore: '$189 / kg',
        priceAfter: '$329 / kg',
      },
      {
        path: '/assets/images/products/yaReS.jpg',
        title:'test2',
        titleBefore: '1111111 MB9+',
        descriptionBefore: 'Australian Wagyu MB9+ is admired for its balance of flavor, tenderness, and marbling Perfect for grilling, yakiniku, or even hotpot, it’s a versatile choice for premium dining.',
        detailsBefore: [
          { subtitle: 'Marbling Score', text: 'MB9+' },
          { subtitle: 'Texture', text: 'Silky, melt-in-mouth' },
          { subtitle: 'Flavor', text: 'Umami-rich, delicate sweetness' },
          { subtitle: 'Processing', text: 'Hand-cut, chilled transport' },
        ],
        titleAfter: '222222 A5',
        descriptionAfter: 'Known as the caviar of beef Wagyu A5 features an exquisite marbling that melts like butter. Raised in Japan under strict conditions, each cut offers a luxurious dining experience.',
        detailsAfter: [
          { subtitle: 'Marbling Score', text: 'A5+' },
          { subtitle: 'Texture', text: 'Tender yet firm' },
          { subtitle: 'Flavor', text: 'Rich, buttery finish' },
          { subtitle: 'Processing', text: 'Fresh cut, vacuum packed' },
        ],
        priceBefore: '$111 / kg',
        priceAfter: '$222 / kg',
      },
      {
        path: '/assets/images/products/yaSrS.jpg',
        title:'test3',
        titleBefore: '333333 MB9+',
        descriptionBefore: 'Australian Wagyu MB9+ is admired for its balance of flavor, tenderness, and marbling Perfect for grilling, yakiniku, or even hotpot, it’s a versatile choice for premium dining.',
        detailsBefore: [
          { subtitle: 'Marbling Score', text: 'MB9+' },
          { subtitle: 'Texture', text: 'Silky, melt-in-mouth' },
          { subtitle: 'Flavor', text: 'Umami-rich, delicate sweetness' },
          { subtitle: 'Processing', text: 'Hand-cut, chilled transport' },
        ],
        titleAfter: '44444 A5',
        descriptionAfter: 'Known as the caviar of beef Wagyu A5 features an exquisite marbling that melts like butter. Raised in Japan under strict conditions, each cut offers a luxurious dining experience.',
        detailsAfter: [
          { subtitle: 'Marbling Score', text: 'A5+' },
          { subtitle: 'Texture', text: 'Tender yet firm' },
          { subtitle: 'Flavor', text: 'Rich, buttery finish' },
          { subtitle: 'Processing', text: 'Fresh cut, vacuum packed' },
        ],
        priceBefore: '$333 / kg',
        priceAfter: '$444/ kg',
      },
      {
        path: '/assets/images/products/yaTtS.jpg',
        title:'test4',
        titleBefore: '55555Chuck Roll MB9+',
        descriptionBefore: 'Australian Wagyu MB9+ is admired for its balance of flavor, tenderness, and marbling Perfect for grilling, yakiniku, or even hotpot, it’s a versatile choice for premium dining.',
        detailsBefore: [
          { subtitle: 'Marbling Score', text: 'MB9+' },
          { subtitle: 'Texture', text: 'Silky, melt-in-mouth' },
          { subtitle: 'Flavor', text: 'Umami-rich, delicate sweetness' },
          { subtitle: 'Processing', text: 'Hand-cut, chilled transport' },
        ],
        titleAfter: '66666Chuck Roll A5',
        descriptionAfter: 'Known as the caviar of beef Wagyu A5 features an exquisite marbling that melts like butter. Raised in Japan under strict conditions, each cut offers a luxurious dining experience.',
        detailsAfter: [
          { subtitle: 'Marbling Score', text: 'A5+' },
          { subtitle: 'Texture', text: 'Tender yet firm' },
          { subtitle: 'Flavor', text: 'Rich, buttery finish' },
          { subtitle: 'Processing', text: 'Fresh cut, vacuum packed' },
        ],
        priceBefore: '$555/ kg',
        priceAfter: '$666 / kg',
      },
      // ...更多图片
    ],
  },
])

const yakiniku = ref([
  {
    id: 4,
    subtitle: 'Yakiniku',
    images: [
      {
        path: '/assets/images/products/yaShortRib.jpg',
        alt: '',
        title: 'Yakiniku Short Rib',
        subtitle: 'Richly Marbled with Deep, Savory Flavor',
        description: 'Cut from the short plate, this Yakiniku Short Rib delivers a perfect balance of tenderness and juiciness. Its beautiful marbling creates an indulgent melt-in-your-mouth texture when grilled, releasing rich umami in every bite.',
        preview: '/assets/images/parts/Short Ribs.jpg',
      },
      {
        path: '/assets/images/products/yaChuckTailFlap.jpg',
        alt: '',
        title: 'Yakiniku Chuck Tail Flap',
        subtitle: 'Bold Flavor and Beautiful Texture',
        description: 'Yakiniku Chuck Tail Flap is a richly marbled cut from the shoulder area, prized for its deep beef flavor and juicy tenderness when grilled or slow-cooked.',
        preview: '/assets/images/parts/Chuck Tail Flap.jpg',
      },
      {
        path: '/assets/images/products/yaPlankSteak.jpg',
        alt: '',
        title: 'Yakiniku Plank Steak',
        subtitle: 'Lean, Tender, and Full of Character',
        description: 'The Yakiniku Plank Steak is known for its fine grain and lean texture. It stays tender and juicy even when seared at high heat, delivering a clean, meaty taste that pairs perfectly with classic yakiniku dipping sauces.',
        preview: '/assets/images/parts/Plank Steak.jpg',
      },
      {
        path: '/assets/images/products/yaTriTip.jpg',
        alt: '',
        title: 'Yakiniku Tri Tip',
        subtitle: 'Distinctly Tender with a Sweet Beefy Aroma',
        description: 'Cut from the sirloin’s triangular tip, the Yakiniku Tri Tip combines a tender bite with a subtle, naturally sweet beef flavor. Lightly grilled, it offers a satisfying balance of juiciness and texture—ideal for premium yakiniku dining.',
        preview: '/assets/images/parts/TriTip.jpg',

      },
    ]
  }
])

const shabu = ref([
  {
    id: 4,
    subtitle: 'Shabu Shabu',
    images: [
        {
        path: '/assets/images/products/shaCtfS.jpeg',
        alt: '',
        title: 'Shabu Chuck Tail Flap',
        subtitle: 'Rich, Juicy, and Full of Character',
        description: 'The Shabu Chuck Tail Flap, taken from the lower shoulder, offers a deep and savory beef flavor with beautiful marbling throughout. ' +
            'Each slice brings a satisfying chew balanced with tenderness — perfect for those who love a bold, flavorful hotpot experience.',
        preview: '/assets/images/parts/Chuck Tail Flap.jpg',
      },
        {
        path: '/assets/images/products/shaCerS.jpg',
        alt: '',
        title: 'Shabu Chuck Eye Roll',
        subtitle: 'A Perfect Balance of Tenderness and Rich Flavor',
        description: 'Cut from the shoulder area, the Shabu Chuck Eye Roll offers the ideal blend of marbling and texture.\n' +
            '                Each slice delivers a deep, beefy richness while remaining incredibly tender — perfect for hotpot lovers\n' +
            '                who appreciate both flavor and softness in every bite.',
        preview: '/assets/images/parts/Chuck Eye Roll.jpg',
      },

      {
        path: '/assets/images/products/shaBrisket.jpg',
        alt: '',
        title: 'Shabu Brisket Point End',
        subtitle: 'Deep Flavor with a Buttery Finish',
        description: 'Cut from the brisket point, this wagyu selection features rich layers of marbling that melt beautifully when cooked. ' +
            'It offers a full-bodied flavor and velvety texture, making it an excellent choice for shabu-shabu enthusiasts who enjoy a rich, hearty taste.',
        preview: '/assets/images/parts/Brisket Point end.jpg',
      },
      {
        path: '/assets/images/products/shaSirloinIS.jpeg',
        alt: '',
        title: 'Shabu Sirloin',
        subtitle: 'Refined Flavor, Perfectly Balanced Texture',
        description: 'The Shabu Sirloin delivers a smooth and buttery mouthfeel with just the right amount of marbling. ' +
            'Known for its clean, elegant flavor and tenderness, this cut represents the ideal harmony between richness and refinement in Japanese shabu-shabu.',
        preview: '/assets/images/parts/Striploin.jpg',

      },
    ]
  }
])


const steak = ref([
  {
    id: 4,
    subtitle: 'Steak',
    images: [
      {
        path: '/assets/images/products/stCerS.jpg',
        alt: '',
        title: 'Steak Chuck Eye Roll',
        subtitle: 'Exceptional Marbling with a Luxurious, Buttery Finish',
        description: 'Cut from the rib section, the Steak Chuck Eye Roll is celebrated for its rich marbling and melt-in-your-mouth tenderness. When seared, the fat renders beautifully, creating a deep, savory flavor that defines premium steak dining.',
        preview: '/assets/images/parts/Chuck Eye Roll.jpg',
      },
      {
        path: '/assets/images/products/stOyster.jpg',
        alt: '',
        title: 'Steak Oyster Blade',
        subtitle: 'Fine Grain, Tender Bite, and Robust Flavor',
        description: 'Sourced from the shoulder, the Steak Oyster Blade offers a unique combination of tenderness and flavor depth. Its fine texture and natural juiciness make it ideal for grilling or pan-searing, delivering a rich and satisfying taste.',
        preview: '/assets/images/parts/Oyster Blade.jpg',
      },
      {
        path: '/assets/images/products/stRibEye.jpg',
        alt: '',
        title: 'Steak Rib Cap',
        subtitle: 'Delicately Tender with Intense Beef Umami',
        description: 'Known as the prized crown of the ribeye, the Steak Rib Cap boasts incredible tenderness and bold marbling. Each bite releases layers of buttery umami flavor, making it one of the most sought-after cuts for true steak connoisseurs.',
        preview: '/assets/images/parts/Rip Cap.jpg',
      },
      {
        path: '/assets/images/products/stSIRLOIN.jpg',
        alt: '',
        title: 'Steak Sirloin',
        subtitle: 'Full-Bodied Flavor with a Firm, Juicy Texture',
        description: 'Sirloin steak is a tender, flavorful cut taken from the rear of the cow, known for its perfect balance of leanness and rich beefy taste. It’s ideal for grilling or pan-searing.',
        preview: '/assets/images/parts/Striploin.jpg',
      },
    ]
  }
])


// Yakiniku 系列
const isYakinikuModalOpen = ref(false)
const selectedYakinikuImage = ref(null)

// Shabu 系列
const isShabuModalOpen = ref(false)
const selectedShabuImage = ref(null)

// Steak 系列
const isSteakModalOpen = ref(false)
const selectedSteakImage = ref(null)

// Platter 系列
const isPlatterModalOpen = ref(false)
const selectedPlatterImage = ref(null)

// 打开弹窗
const openPlatterModal = (image) => {
  selectedPlatterImage.value = image
  isPlatterModalOpen.value = true
}

const openYakinikuModal = (image) => {
  selectedYakinikuImage.value = image
  isYakinikuModalOpen.value = true
}

const openShabuModal = (image) => {
  selectedShabuImage.value = image
  isShabuModalOpen.value = true
}

const openSteakModal = (image) => {
  selectedSteakImage.value = image
  isSteakModalOpen.value = true
}

// 关闭弹窗
const closePlatterModal = () => {
  isPlatterModalOpen.value = false
  selectedPlatterImage.value = null
}

const closeYakinikuModal = () => {
  isYakinikuModalOpen.value = false
  selectedYakinikuImage.value = null
}

const closeShabuModal = () => {
  isShabuModalOpen.value = false
  selectedShabuImage.value = null
}

const closeSteakModal = () => {
  isSteakModalOpen.value = false
  selectedSteakImage.value = null
}


</script>
