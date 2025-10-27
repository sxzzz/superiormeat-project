<template>
        <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 dark:bg-gray-700 px-2.5 py-1.5 text-sm font-semibold text-white dark:text-gray-300 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <svg v-if="hasIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
            </svg>
            {{ buttonText }}
        </button>
</template>

<script>
export default {
    name:'Button',
    props:{
      buttonText:{
          type:String,
          required:true
      },
      hasIcon:{
          type:Boolean,
          default:false
      }
    },
    data() {
        return {

        }
    },
    methods:{
        // handleButtonClick(){
        //     this.$emit('button-click')
        // }
    }

}
</script>

<style>

</style>