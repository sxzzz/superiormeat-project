<template>
  <div
      ref="containerRef"
      class="relative overflow-hidden border border-cyan-500 rounded-2xl select-none"
      :style="{ width: width + 'px', height: height + 'px' }"
  >
    <!-- After 内容 -->
    <div
        ref="afterRef"
        class="absolute inset-0 w-full h-full pointer-events-none"
    >
      <slot name="after"></slot>
    </div>

    <!-- Before 内容 -->
    <div
        ref="beforeRef"
        class="absolute inset-0 w-full h-full pointer-events-none"
        style="clip-path: inset(0 50% 0 0); -webkit-clip-path: inset(0 50% 0 0);"
    >
      <slot name="before"></slot>
    </div>

    <!-- 拖拽滑块 -->
    <div
        ref="handleRef"
        class="absolute top-0 bottom-0 left-1/2 w-[2px] bg-amber-400 cursor-ew-resize z-40 flex items-center justify-center"
        style="transform: translateX(-2px);"
    >
      <div
          class="w-4 h-4 bg-amber-400 rounded-full shadow flex items-center justify-center"
          style="transform: translateY(-50%); position: absolute; top: 50%;"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 12h16M12 4v16"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  width: { type: Number, default: 1220 },
  height: { type: Number, default: 600 },
  minOffset: { type: Number, default: 20 },
})

const containerRef = ref(null)
const beforeRef = ref(null)
const handleRef = ref(null)

onMounted(() => {
  const container = containerRef.value
  const beforeHtml = beforeRef.value
  const handle = handleRef.value
  if (!container || !beforeHtml || !handle) return

  let dragging = false

  const move = (clientX) => {
    const rect = container.getBoundingClientRect()
    let offsetX = clientX - rect.left
    if (offsetX < props.minOffset) offsetX = props.minOffset
    if (offsetX > rect.width - props.minOffset)
      offsetX = rect.width - props.minOffset

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
})
</script>

<style scoped>
/* 你可以在这里添加额外样式，例如边框高亮等 */
</style>
