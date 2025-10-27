<template>
    <div class="bg-white dark:bg-black">
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <!--BC-->
            <div class="ps-7">
                <h2 class="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 caption-top dark:text-gray-300">Yakiniku</h2>
            </div>
            <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                    <img src="/assets/images/hero01.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img src="/assets/images/01.jpg" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
                    </div>
                    <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img src="/assets/images/02.jpg" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
                    </div>
                </div>
                <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                    <img src="/assets/images/hero01.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center">
                </div>
            </div>

            <div class="mx-auto max-w-2xl px-4 py-2 sm:px-6 lg:grid lg:max-w-7xl lg:px-8">
                <div class="py-2 lg:col-span-2 lg:col-start-1 lg:pr-8">
                    <div>

                        <div>
                            <!-- v-if 非中文 else 中文 -->
                            <div v-if="!bcSwitch.isCnContent" id="buttonsCottageEn" class="space-y-6">
                                <p class="text-base text-gray-900 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p class="dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div v-else id="buttonsCottageCn" class="space-y-6">
                                <p class="text-base text-gray-900 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p class="dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Divider class="mt-4"></Divider>
            <!--bamboo-->
            <div class="bg-white dark:bg-black">
                <div class="mx-auto max-w-2xl px-4 py-6 sm:px-6  lg:max-w-7xl lg:px-8">
                    <div class="mx-auto max-w-3xl text-center">
                        <div class="flex items-center">
                            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-6xl">Shabu Shabu</h2>

                        </div>
                        <div v-if="!lbSwitch.isCnContent">
                            <p class="mt-4 text-gray-900 dark:text-gray-300">Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div v-else>
                            <p class="mt-4 text-gray-900 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="mt-16 space-y-16">
                        <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                            <div class="mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 lg:col-start-1">
                                <div v-if="!lbSwitch.isCnContent">
                                    <p class="mt-2 text-gray-900 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div v-else>
                                    <p class="mt-2 text-gray-900 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div class="flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 lg:col-start-6 xl:col-start-5">
                                <div class="aspect-h-2 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                                    <img src="/assets/images/01.jpg" alt="" class="object-cover object-center">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                            <div class="mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 lg:col-start-8 xl:col-start-9">
                                <div v-if="!lbSwitch.isCnContent">
                                    <p class="mt-2 text-gray-900 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,</p>
                                </div>
                                <div v-else>
                                    <p class="mt-2 text-gray-900 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,</p>
                                </div>
                            </div>
                            <div class="flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 lg:col-start-1">
                                <div class="aspect-h-2 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                                    <img src="/assets/images/02.jpg" alt="" class="object-cover object-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider class="mt-4"></Divider>
            <!--cookies-->
            <div class="bg-white dark:bg-black">
                <div class="isolate">
                    <!-- Hero section -->
                    <div class="relative isolate -z-10">
                        <div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
                            <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"></div>
                        </div>
                        <div class="overflow-hidden">
                            <div class="mx-auto max-w-7xl px-6 pb-32 pt-4 lg:px-8">
                                <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                    <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                        <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-6xl">Premium Angus</h1>
                                        <!--通过自定义的toggle事件，触发switch组件中的toggleContent方法（只是点击），这里在本组件重新传入参数并完善具体的点击逻辑-->



                                        <div>
                                            <div v-if="!lcSwitch.isCnContent" class="space-y-6">
                                                <p class="relative mt-3 text-base  text-gray-900 dark:text-gray-300 sm:max-w-md lg:max-w-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <p class="dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <p class="dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>

                                            <div v-else class="space-y-6">
                                                <p class="relative mt-3 text-base  text-gray-900 dark:text-gray-300 sm:max-w-md lg:max-w-none"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <p class="dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <p class="dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                        <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                            <div class="relative">
                                                <img src="/assets/images/hero04.jpg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                            </div>
                                        </div>
                                        <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                            <div class="relative">
                                                <img src="/assets/images/hero04.jpg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                            </div>
                                            <div class="relative">
                                                <img src="/assets/images/hero04.jpg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                            </div>
                                        </div>
                                        <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                            <div class="relative">
                                                <img src="/assets/images/hero04.jpg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                            </div>
                                            <div class="relative">
                                                <img src="/assets/images/hero04.jpg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Button ref="button" class="" :buttonText="'Back to Top'" :hasIcon ="true"  @click="scrollToTop"></Button>
            </div>

        </div>
    </div>

</template>

<script>
import Switch from "../../components/switch/index.vue";
import Divider from "../../components/divider/index.vue";
import Button from "../../components/button/index.vue";

export default {
    name:'Story',
    components: {
        Switch,
        Divider,
        Button
    },
    data() {
        return {
            bcSwitch: {
                isCnContent: false,
                isEnContent: false,
            },
            lcSwitch: {
                isCnContent: false,
                isEnContent: false,
            },
            lbSwitch: {
                isCnContent: false,
                isEnContent: false,
            },

        }
    },
    methods:{
        toggleContent(switchName) {
            this[switchName].isCnContent = !this[switchName].isCnContent;
            this[switchName].isEnContent = !this[switchName].isEnContent;
        },
        // scrollToTop() {
        //     console.log('click me')
        //     window.scrollTo({
        //         top: 0,
        //         behavior: 'smooth'
        //     });
        // },
        scrollToTop(){
            console.log('123')
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
}
</script>

