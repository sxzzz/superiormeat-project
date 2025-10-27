<template>
    <div class="flex items-center">
        <button type="button" :class="{'bg-indigo-600': switchObj.isEnContent, 'bg-gray-200': !switchObj.isEnContent}" class="relative inline-flex h-4 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false" aria-labelledby="annual-billing-label" @click="toggleContent">
            <span :class="{'translate-x-5': switchObj.isCnContent, 'translate-x-0': !switchObj.isCnContent}" aria-hidden="true" class="pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
        </button>
        <span class="text-sm" id="">
      <span class="font-medium text-gray-900 dark:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ms-2 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
        </svg>
      </span>
    </span>
    </div>
</template>

<script>
export default {
    name:'Switch',
    data() {
        return {

        }
    },
    //使用switchObj 对象来保存isCnContent和isEnContent变量
    props: {
        switchObj: {
            type: Object,
            required: true,
        },
    },
    methods:{
        //将toggleContent方法 emit 成一个自定义事件'toggle'，方便在其他组件中触发该事件
        toggleContent() {
            this.$emit('toggle');
        },
    }
}
</script>

<style>

</style>