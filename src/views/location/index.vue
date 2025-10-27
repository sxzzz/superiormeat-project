<template>
  <div class="bg-white dark:bg-black">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="h-screen flex flex-col">
        <h2 class="mb-2 text-4xl uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text">Our Store</h2>

        <div class="flex-1 flex flex-col md:flex-row min-h-0">
          <!-- 左侧列表：在移动端根据视图切换 -->
          <div
              v-show="!isMobile || viewMode === 'list'"
              class="md:w-1/2 overflow-y-auto p-2 space-y-4 bg-white h-full"
          >
            <div
                v-for="shop in shops"
                :key="shop.name"
                class="rounded-lg p-2 shadow cursor-pointer hover:bg-gray-50 border border-gray-300"
                @click="focusOnMap(shop)"
                @mouseenter="startBounce(shop)"
                @mouseleave="stopBounce(shop)"
            >
              <img :src="shop.image" alt="park photo" class="w-full h-56 object-cover rounded" />
              <h2 class="text-xl font-bold mt-2">{{ shop.name }}</h2>
              <p class="text-sm text-gray-600">{{ shop.suburb }} · {{ shop.address }}</p>
              <p class="mt-2 text-gray-700">{{ shop.notes }}</p>
            </div>
          </div>

          <!-- 右侧地图：在移动端根据视图切换 -->
          <div
              v-show="!isMobile || viewMode === 'map'"
              class="md:w-1/2 h-full relative"
          >
            <div id="map" class="w-full h-full"></div>
          </div>
        </div>

        <!-- 按钮：在移动端切换视图时显示在页面底部 -->
        <div
            v-if="isMobile"
            class="fixed bottom-20 left-0 right-0 flex justify-center z-50 pointer-events-none"
        >
          <button
              v-if="viewMode === 'map'"
              class="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md pointer-events-auto"
              @click="toggleView"
          >
            List View
          </button>

          <button
              v-if="viewMode === 'list'"
              class="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md pointer-events-auto"
              @click="toggleView"
          >
            Map View
          </button>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>
  import {onMounted, ref,onBeforeUnmount,nextTick} from 'vue';
  const shops = ref([
  {
    "name": "Niku Shiki Glen Waverley",
    "suburb": "Glen",
    "address": "L009 The Glen Shopping Centre, 235 Springvale Rd, Glen Waverley VIC 3150",
    "website": "https://nikushiki.com.au/",
    "tel": "(03) 9803 7878",

    "coords": [-37.87607832071967, 145.16478081740595],
    "image": "/assets/images/glenStore.png",
    "notes": "Niku Shiki embodies the essence of Japanese culture and tradition, with an unwavering commitment to showcasing premium Wagyu Beef through our contemporary Japanese menu and innovative take-home products. Our butcher section for Japanese BBQ and hot pot offers a comprehensive selection of restaurant-quality Wagyu Beef, condiments, and sauces, providing everything you need for an authentic Yakiniku or Shabu Shabu dining experience in the comfort of your home."
  },
  {
    "name": "Niku Shiki Melbourne Central",
    "suburb": "CBD",
    "address": "Melbourne Central, Shop GD070/360 Elizabeth St, Melbourne VIC 3000",
    "website": "https://nikushiki.com.au/",
    "tel": "(03) 9367 9823",
    "coords": [-37.81039280942638, 144.96201810683976],
    "image": "/assets/images/cbdStore.png",
    "notes": "Niku Shiki embodies the essence of Japanese culture and tradition, with an unwavering commitment to showcasing premium Wagyu Beef through our contemporary Japanese menu and innovative take-home products. Our butcher section for Japanese BBQ and hot pot offers a comprehensive selection of restaurant-quality Wagyu Beef, condiments, and sauces, providing everything you need for an authentic Yakiniku or Shabu Shabu dining experience in the comfort of your home."
  },
  {
    "name": "Superior Meat",
    "suburb": "Oakleigh",
    "address": "34 Hamilton St, Oakleigh VIC 3166",
    "website": "https://superiormeat.shop",
    "tel": "(03) 9367 9823",
    "coords": [-37.90771994396364, 145.10095262043797],
    "image": "/assets/images/34ham.jpg",
    "notes": "Niku Shiki embodies the essence of Japanese culture and tradition, with an unwavering commitment to showcasing premium Wagyu Beef through our contemporary Japanese menu and innovative take-home products. Our butcher section for Japanese BBQ and hot pot offers a comprehensive selection of restaurant-quality Wagyu Beef, condiments, and sauces, providing everything you need for an authentic Yakiniku or Shabu Shabu dining experience in the comfort of your home."
  },
  {
    "name": "USHIMATSU Store",
    "suburb": "Chadstone",
    "address": "1341 Dandenong Rd, Chadstone VIC 3148",
    "website": "https://ushimatsu.shop",
    "tel": "(03) 9367 1111",
    "coords": [-37.88638990281749, 145.08239020885716],
    "image": "/assets/images/brands/ushi04.jpg",
    "notes": "Niku Shiki embodies the essence of Japanese culture and tradition, with an unwavering commitment to showcasing premium Wagyu Beef through our contemporary Japanese menu and innovative take-home products. Our butcher section for Japanese BBQ and hot pot offers a comprehensive selection of restaurant-quality Wagyu Beef, condiments, and sauces, providing everything you need for an authentic Yakiniku or Shabu Shabu dining experience in the comfort of your home."
  }


  ])

  let map
  const markerMap = new Map();

  const customIconHtml = `
  <div class="shop-marker">
<!--    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">-->
<!--        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />-->
<!--    </svg>-->
    <img src="/assets/images/shopSVG.svg" class="w-6 h-6" alt="">
  </div>`

  const customIcon = L.divIcon({
  className: '', // 不加默认类名
  html: customIconHtml,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

  function focusOnMap(shop) {
  if (map && shop.coords) {
  map.setView(shop.coords, 15)
  const marker = markerMap.get(shop.name)
  if (marker) {
  marker.openPopup()
}
}
}

  function startBounce(shop) {
  const marker = markerMap.get(shop.name)
  if (marker && marker._icon) {
  marker._icon.querySelector('.shop-marker')?.classList.add('bounce')
    console.log(marker._icon.querySelector('.shop-marker'))
}
}

  function stopBounce(shop) {
  const marker = markerMap.get(shop.name)
  if (marker && marker._icon) {
  marker._icon.querySelector('.shop-marker')?.classList.remove('bounce')
}
}

  onMounted(() => {

  window.addEventListener('resize', handleResize)
  handleResize()

  map = L.map('map').setView([-37.85, 145.05], 11)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map)

  shops.value.forEach((shop) => {
  const marker = L.marker(shop.coords,{icon: customIcon}).addTo(map)
  //地图中商店的页面布局
  // marker.bindPopup(`<div style="max-width: 400px;">
  //     <img src="${shop.image}" alt="${shop.name}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; margin-bottom: 6px;" />
  //     <strong>${shop.name}</strong><br>
  //     <strong>${shop.address}</strong><br>
  //     <strong>${shop.website}</strong><br>
  //     <strong>${shop.tel}</strong>
  //   </div>`)

    marker.bindPopup(`
  <div style="
    max-width: 400px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 16px rgba(0,0,0,0.25);
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    position: relative;
  ">

    <!-- 关闭按钮 -->
    <button
      onclick="document.querySelector('.leaflet-popup-close-button')?.click()"
      style="
        position: absolute;
        top: 8px;
        right: 8px;
        background: rgba(255,255,255,0.85);
        border: none;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        font-size: 18px;
        cursor: pointer;
        color: #333;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
        z-index: 2;
      "
      onmouseover="this.style.background='rgba(255,255,255,1)'"
      onmouseout="this.style.background='rgba(255,255,255,0.85)'"
    >
x
    </button>

    <!-- 图片 -->
    <img
      src="${shop.image}"
      alt="${shop.name}"
      style="
        width: 100%;
        height: 180px;
        object-fit: cover;
        display: block;
      "
    />

    <!-- 文字区域 -->
    <div style="
      background: rgba(250, 250, 250, 0.95);
      padding: 12px 16px 14px;
      backdrop-filter: blur(2px);
    ">
      <div style="border-top: 1px solid #e5e7eb; margin-bottom: 10px;"></div>

      <div style="
        font-weight: 700;
        font-size: 1.1rem;
        color: #111;
        margin-bottom: 6px;
      ">
        ${shop.name}
      </div>

      <div style="color: #555; line-height: 1.4; margin-bottom: 6px;">
        ${shop.address}
      </div>

      <div style="margin-bottom: 6px;">
        <a
          href="${shop.website.startsWith('http') ? shop.website : 'https://' + shop.website}"
          target="_blank"
          rel="noopener noreferrer"
          style="color: #2563eb; text-decoration: none;"
          onmouseover="this.style.textDecoration='underline';"
          onmouseout="this.style.textDecoration='none';"
        >
          ${shop.website}
        </a>
      </div>

      <div style="color: #333;">
        ${shop.tel}
      </div>
    </div>
  </div>
`);



    markerMap.set(shop.name, marker)
})

  // 计算所有商店的坐标范围，并自动缩放地图
  const allCoords = shops.value.map(p => p.coords)
  const bounds = L.latLngBounds(allCoords)
  map.fitBounds(bounds) // 🟡 自动适配视图范围
})

  onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

  // Responsive state
  const viewMode = ref('list') // 'list' or 'map'
  const isMobile = ref(window.innerWidth < 768)

  function handleResize() {
  isMobile.value = window.innerWidth < 768
  if (!isMobile.value) viewMode.value = 'list' // reset to list on desktop
}
  //添加地图刷新逻辑
  function toggleView() {
  viewMode.value = viewMode.value === 'list' ? 'map' : 'list'

  if (viewMode.value === 'map') {
  nextTick(() => {
  map.invalidateSize()

  // 自动适配所有 parks 范围
  const bounds = L.latLngBounds(parks.value.map(p => p.coords))
  map.fitBounds(bounds)
})
}
}

</script>


<style>
#map {
  position: relative;
  z-index: 0;
}
/* Optional: fix Leaflet icon not loading issue */
:global(.leaflet-container) {
  z-index: 0;
}
.bounce {
  animation: bounce 0.5s infinite alternate;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}

/* ✅ Leaflet 弹窗宽度强制放开 */
.leaflet-popup,
.leaflet-popup-content-wrapper,
.leaflet-popup-content {
  max-width: none !important;
  width: auto !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
}

/* ✅ 设置你想要的内容宽度 */
.leaflet-popup-content {
  width: 420px !important; /* 你可以改成 500 / 600 看效果 */
}
/* 去掉箭头小三角 */
.leaflet-popup-tip {
  background: transparent !important;
}
/* ✅ 图片适配 */
.leaflet-popup-content img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 6px;
}

/* ✅ 弹窗美化（可选） */
.leaflet-popup-content-wrapper {
  border-radius: 12px !important;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25) !important;
}

.leaflet-popup-close-button {
  background: transparent !important; /* 去掉默认白色背景 */
  color: rgba(255, 255, 255, 0.8) !important; /* 文字颜色可调，设置透明度 */
  font-size: 18px; /* 可调整大小 */
  font-weight: bold;
  top: 8px; /* 调整位置 */
  right: 8px;
  opacity: 0.6; /* 整体透明度 */
  text-shadow: none; /* 去掉默认阴影 */
}
</style>
