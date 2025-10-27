<template>
    <div class="bg-white dark:bg-black">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-4 pb-8">
            <div class="mx-auto max-w-2xl items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
                <ul class="">
                    <li v-for="news in filteredNewsList" :key="news.id" >
                        <div class="">
                            <div class="w-full">
                                <div class="flex items-center justify-between  gap-x-4 text-xl font-bold mb-2 ">
                                    <div class="flex items-center mt-6">
                                        <p class="me-2">{{news.date}}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                        </svg>
                                    </div>
                                    <div class="me-2">
                                        <router-link  :to="{ path: '/home', query: { scrollToId: 'topStories' }}"><button type="button" class=" rounded bg-indigo-500 px-2 py-1 text-xs font-semibold text-white dark:text-gray-300 shadow-sm
                                        hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Back to Stories</button></router-link>
                                    </div>
                                </div>
                            </div>
                            <hr class="dark:border-orange-500">
                            <div class="flex flex-col lg:flex-row gap-5">
                                <div class="basis-1/2">
                                    <img :src="news.imageUrl" alt="" class="mt-6 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]">
                                </div>
                                <div class="basis-1/2">


                                  <div class="space-y-2">
                                    <!-- 标题部分 -->
                                    <div class="flex items-center py-10">
                                      <p class="w-full text-2xl lg:text-3xl font-anton font-medium tracking-wide text-gray-700 dark:text-gray-100">
                                        {{ news.title }}
                                      </p>
                                    </div>

                                    <!-- 内容部分 -->
                                    <div class="whitespace-pre-line text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                                      {{ news.content }}
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Switch from "../../components/switch/index.vue";

export default {
    components: {
        Switch
    },


    name:'NewsDetail',
    data() {
        const newsList = [
            {
                id:'03042025',
                date:'03 Apr 2025',
                title:' Vicki Sher - Iconic Wagyu Brand SHER',
                content:'Vicki Sher, the founder of Australia’s legendary wagyu brand SHER Wagyu, recently visited the Nikushiki Glen store. During the visit, she met with Mr. Kai Gu and engaged in a warm exchange about premium wagyu products and the growing collaboration between the two brands.',
                contentCn:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl:'/assets/images/blog/03042025.jpg'
            },
            {
                id:'24062024',
                date:'24 Jun 2024',
              title:'Bruce Cheung - Executive Chairman of Pardoo Beef Corporation ',
              content:'Mr Bruce Cheung the Executive Chairman of Pardoo Beef Corporation, played a visit the Nikushiki Melbourne Central store and met with Mr. Kai Gu to exchange ideas on premium wagyu and future collaboration opportunities.',
              contentCn:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              imageUrl:'/assets/images/blog/brace.jpg'
            },
            {
                id:'01112024',
                date:'01 Nov 2024',
              title:'Japan Trip',
              content:'Mr. Kai Gu participated in the 2024 seminar “Processing Meat and Cooking Skills of Japanese Wagyu Beef for Exporting Nations”, successfully hosted by the Japan Livestock Products Export Promotion Council (J-LEC).',
              contentCn:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              imageUrl:'/assets/images/blog/01112024.jpg'
            },
        ]
        const Switch1 = {
            isCnContent: false,
            isEnContent: false,
        }
        return{
            newsList,
            Switch1
        }

    },
    methods:{
        //将toggleContent方法 emit 成一个自定义事件'toggle'，方便在其他组件中触发该事件
        toggleContent(switchName) {
            this[switchName].isCnContent = !this[switchName].isCnContent;
            this[switchName].isEnContent = !this[switchName].isEnContent;
        },
    },
    computed:{
        filteredNewsList(){
            const newsId = this.$route.params.id;
            // 根据 id 筛选要显示的新闻
            return this.newsList.filter(news => news.id === newsId);
        }
    }

}
</script>


<style>

</style>