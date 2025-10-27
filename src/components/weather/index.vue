<template>
  <div class="fixed right-0 top-[2rem] z-40 group "
       :class="{'hidden lg:block': !isMobile}">
    <div class="p-2 md:p-6 rounded-2xl shadow-lg dark:border-gray-700 dark:bg-gray-800 md:max-w-xs max-w-[250px] mx-auto text-xs md:text-base bg-gradient-to-r from-blue-500 to-blue-600 inline-block transition-transform duration-1000 relative overflow-hidden"
         :class="[show ? 'translate-x-0' : 'translate-x-[97%] sm:translate-x-[96%] md:translate-x-[92%]', 'group-hover:translate-x-0']"
         @mouseenter="handleMouseEnter"
         @mouseleave="handleMouseLeave"
    >

      <!-- bg img layer -->
      <div class="absolute inset-0">
        <img
            v-if="weatherBg"
            :src="weatherBg"
            alt="Weather background"
            class="w-full h-full object-cover  pointer-events-none select-none"
        />
<!--        <div class="absolute inset-0 bg-gradient-to-r from-blue-300/50 to-blue-400/50"></div>-->
      </div>

      <!-- text layer -->
      <div class="relative z-10 text-white">

        <div v-if="loading" class="text-center animate-pulse">Loading weather...</div>
        <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
        <div v-else-if="currentCondition">
          <div class="flex items-center justify-between mb-2 md:mb-4">
            <div>
              <p class="text-2xl text-red-500">可以是Promotions的内容</p>
              <div class="text-lg font-bold">{{locationName}}</div>
              <div class=" md:mt-2 flex items-center">
                <span>{{ currentCondition.weatherDesc[0].value }}</span>

                <!-- weather icon -->
                <svg v-if="isCloudy" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud h-4 w-4 md:h-6 md:w-6 ms-1 md:ms-2 " viewBox="0 0 16 16">
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                </svg>

                <svg v-if="isSunny" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high h-4 w-4 md:h-6 md:w-6 ms-1 md:ms-2" viewBox="0 0 16 16">
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                </svg>

                <svg v-if="isRainy" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-drizzle h-4 w-4 md:h-6 md:w-6 ms-1 md:ms-2" viewBox="0 0 16 16">
                  <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973M8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 2"/>
                </svg>

                <svg v-if="isMist" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-fog h-4 w-4 md:h-6 md:w-6 ms-1 md:ms-2" viewBox="0 0 16 16">
                  <path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973M8.5 3a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 3"/>
                </svg>

              </div>
            </div>

            <div class="text-4xl md:text-5xl font-semibold">{{ currentCondition.temp_C }}°C</div>
          </div>

          <div class="mt-2">
            <p>Humidity: {{ currentCondition.humidity }}%</p>
            <p>Wind: {{ currentCondition.windspeedKmph }} km/h</p>
            <p>
              Precipitation:
              <span v-if="currentCondition.precipMM > 0">{{ currentCondition.precipMM }} mm (Rainy)</span>
              <span v-else>No rain</span>
            </p>
          </div>

          <div v-if="false" class="mt-2 md:mt-6 p-2 md:p-6  bg-blue-50/20 dark:bg-blue-700/20 rounded-xl text-white">
            <div class="font-semibold mb-2 flex items-center">
              {{ isChineseCity(locationName) ? '遛狗tips' : 'Dog walk advice' }}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ms-2 h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            </div>
            <div>{{ walkAdvice }}</div>
            <div @click="speakWeatherAdvice">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-2 h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { onMounted, computed,ref,onUnmounted } from 'vue';
import { useWeatherStore } from '/src/store/weather.js';

const weatherStore = useWeatherStore();

// 默认使用墨尔本坐标
const defaultLat = -37.8136
const defaultLon = 144.9631

const weather = computed(() => weatherStore.weatherData)
const loading = computed(() => weatherStore.loading)
const error = computed(() => weatherStore.error)

const fetchWeatherWithFallback = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude
          weatherStore.fetchWeather(lat, lon)
        },
        (err) => {
          // 用户拒绝定位或失败，使用默认坐标
          console.warn('定位失败，使用默认位置:', err.message)
          weatherStore.fetchWeather(defaultLat, defaultLon)
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
    )
  } else {
    // 浏览器不支持 Geolocation，使用默认坐标
    console.warn('该浏览器不支持地理定位，使用默认位置')
    weatherStore.fetchWeather(defaultLat, defaultLon)
  }
}

// 解析当前天气信息
const currentCondition = computed(() => {
  if (!weather.value) return null
  return weather.value.current_condition?.[0]
})
const weatherDesc = computed(() => {
  return currentCondition.value?.weatherDesc?.[0]?.value?.toLowerCase() || ''
})

const isCloudy = computed(() => {
  return weatherDesc.value.includes('cloudy') || weatherDesc.value.includes('overcast')|| weatherDesc.value.includes('drizzle')
})

const isSunny = computed(() => {
  return weatherDesc.value.includes('sunny')|| weatherDesc.value.includes('clear')
})

const isRainy = computed(() => {
  return weatherDesc.value.includes('rain')|| weatherDesc.value.includes('shower')
})

const isMist = computed(() => {
  return weatherDesc.value.includes('mist')
})

const locationName = computed(() => {
  const area = weather.value?.nearest_area?.[0]
  const suburb = area?.areaName?.[0]?.value
  const city = area?.region?.[0]?.value // wttr.in 通常这里是城市名
  if (suburb && city && suburb !== city) {
    return `${suburb}, ${city}`
  }
  return suburb || city || ''
})
const chineseCities = ['Beijing', 'Shanghai', 'Guangzhou', 'Chongqing', 'Chengdu'];

function isChineseCity(name) {
  return chineseCities.some(city => name.toLowerCase().includes(city.toLowerCase()))
}


let cachedVoices = []

function initVoices(callback) {
  // 如果已经缓存，直接返回
  if (cachedVoices.length) {
    callback(cachedVoices)
    console.log('Available voices:', voices.map(v => `${v.name} | ${v.lang}`))
    return
  }

  // 创建一个空的 utterance，触发 voice 加载
  const dummy = new SpeechSynthesisUtterance('')
  speechSynthesis.speak(dummy)

  const checkVoices = () => {
    const voices = speechSynthesis.getVoices()
    if (voices.length > 0) {
      cachedVoices = voices
      callback(voices)
    } else {
      // 等待 100ms 重试，最多尝试 20 次
      setTimeout(checkVoices, 100)
    }
  }

  checkVoices()
}

function speakWeatherAdvice() {
  const temp = currentCondition.value.temp_C
  const advice = walkAdvice.value
  const location = locationName.value
  const isChinese = isChineseCity(location)

  const speechText = isChinese
      ? `这是哪儿，大${location}。现在是 ${temp} 度。${advice}`
      : `Current location: ${location}. The current temperature is ${temp} degrees Celsius. ${advice}`

  const msg = new SpeechSynthesisUtterance(speechText)

  initVoices((voices) => {
    if (isChinese) {
      msg.lang = 'zh-CN'
      msg.voice = voices.find(v => v.name === 'Li-Mu')
          || voices.find(v => v.lang === 'zh-CN')
    } else {
      msg.lang = 'en-AU'
      msg.voice = voices.find(v => v.lang === 'en-AU')
          || voices.find(v => v.lang === 'en-AU')
    }

    speechSynthesis.speak(msg)
  })
}

speechSynthesis.onvoiceschanged = () => {
  const voices = speechSynthesis.getVoices();
  const liMuVoice = voices.find(v => v.name === 'Li-Mu');
};
// 根据天气生成遛狗建议

const walkAdvice = computed(() => {
  if (!currentCondition.value) return ''

  const temp = Number(currentCondition.value.temp_C)
  const isChinese = isChineseCity(locationName.value) // 判断是否为中文城市

  // 判断天气是否恶劣
  if (weatherDesc.value.includes('rain') || weatherDesc.value.includes('snow') || weatherDesc.value.includes('storm')) {
    return isChinese
        ? '吃了吗您？今儿天不好，遛的时候，注意安全！'
        : 'The weather is bad today, and it\'s recommended to reduce going outside. If you must go out, choose times when the rain or snow is lighter, and stay safe!'
  }

  // 高温天气建议
  if (temp > 30) {
    return isChinese
        ? '今儿够热的啊，注意防暑，建议早晚再遛。'
        : 'It\'s hot, walk the dog between 6-9 AM or after 7 PM to avoid heatstroke.'
  }

  // 微凉天气建议
  if (temp >= 10 && temp <= 15) {
    return isChinese
        ? '温度有点低，可以小遛一会er，但得穿暖和一点！'
        : 'The temperature is a bit chilly, it\'s a good time for a walk, but make sure to dress warmly!'
  }

  // 寒冷天气建议
  if (temp < 10) {
    return isChinese
        ? '今儿也太冷了，遛完赶紧家里蹲，涮羊肉走起吧。'
        : 'The temperature is low, it\'s best to go out with your furry friend between 11 AM and 2 PM to avoid the cold.'
  }

  // 天气良好时建议
  return isChinese
      ? '吃了吗您？今儿天儿不错，早晚都适合带着狗狗散步！'
      : 'Good weather, both morning and evening are great for walking with your furry location!'
})

const show = ref();
let hideTimer = null;
const isMobile = window.innerWidth < 640; // 🛠️ 新增：判断是不是手机
onMounted(() => {
  fetchWeatherWithFallback();
  show.value = true
  setTimeout(() => {
    show.value = false
  }, isMobile ? 4000 : 8000) // 手机端3秒，PC端8秒
})


// 鼠标移入，立即展开，同时取消任何隐藏定时器
function handleMouseEnter() {
  if (isMobile) return;
  if (hideTimer) {
    clearTimeout(hideTimer)
    hideTimer = null
  }
  show.value = true
}

// 鼠标移出，开始5秒倒计时后收起
function handleMouseLeave() {
  if (isMobile) return;
  if (hideTimer) {
    clearTimeout(hideTimer)
  }
  hideTimer = setTimeout(() => {
    show.value = false
  }, 4000) // 停顿5秒后收起
}



const weatherBg = computed(() => {
  if (isCloudy.value) {
    return 'https://d1nuow4z6t9ani.cloudfront.net/images/weather/cloud.jpg'
  } else if (isSunny.value) {
    return 'https://d1nuow4z6t9ani.cloudfront.net/images/weather/sunny.jpeg'
  } else if (isRainy.value) {
    return 'https://d1nuow4z6t9ani.cloudfront.net/images/weather/rainy.jpg'
  } else if (isMist.value) {
    return 'https://d1nuow4z6t9ani.cloudfront.net/images/weather/Mist.jpeg'
  } else {
    return null
  }
})


</script>

<style scoped>
/* 你可以根据需求再加些动画或者小图标 */
</style>
