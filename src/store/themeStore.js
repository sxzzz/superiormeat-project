// import { defineStore } from 'pinia'
//
// export const useThemeStore = defineStore('themeStore', {
//     state: () => ({
//         isDark: false,            // 当前是否为 dark 模式
//         manualOverride: false     // 是否用户手动控制了主题
//     }),
//     actions: {
//         setDarkMode(isDark) {
//             this.isDark = isDark
//             document.documentElement.classList.toggle('dark', isDark)
//         },
//         toggleDarkMode() {
//             this.manualOverride = true
//             this.setDarkMode(!this.isDark)
//         },
//         autoUpdateByTime() {
//             if (this.manualOverride) return
//             const hour = new Date().getHours()
//             const isNight = hour >= 18 || hour < 6
//             this.setDarkMode(isNight)
//         }
//     }
// })