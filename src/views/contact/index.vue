<template>

  <div class="bg-white py-16">
    <div class="mx-auto max-w-5xl px-6 lg:px-8 text-center">
      <!-- 标题 -->
      <h2 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        Contact us
      </h2>

      <!-- 图片 -->
      <img
          src="/assets/images/contact04.jpg"
          alt="Contact"
          class="mt-10 w-full  object-cover rounded-2xl "
      />


      <!-- 联系信息 - Grid 布局 + 黄色分割线 -->
      <ul class="mt-16 grid grid-cols-1 md:grid-cols-4 text-left max-w-6xl mx-auto border-t border-yellow-500">
        <li
            v-for="(opening, index) in jobOpenings"
            :key="opening.id"
            :class="['py-8 px-6', index !== 0 ? 'md:border-l md:border-yellow-500' : '']"
        >
          <dl class="relative flex flex-col gap-1">
            <dt class="sr-only">Office</dt>
            <dd class="text-base font-semibold tracking-tight text-gray-900">
              <a :href="opening.href" class="hover:text-yellow-600 transition-colors">
                {{ opening.office }}
                <span class="absolute inset-0" aria-hidden="true" />
              </a>
            </dd>
            <dd class="text-sm  text-gray-900">{{ opening.location }}</dd>
            <dd class="text-sm  text-gray-900">{{ opening.tel }}</dd>
            <dd class="text-sm text-gray-900">{{ opening.email }}</dd>
          </dl>
        </li>
      </ul>


    </div>
  </div>

</template>

<script setup>

const jobOpenings = [
  {
    id: 1,
    office: 'Superior Meat Head office',
    href: '#',
    location: '34 Hamilton Street, Oakleigh, VIC 3166',
    email: 'info@smeat.com.au',
    tel: '(03) 8820 6797',
  },
  {
    id: 2,
    office: 'Nikushiki Glen',
    href: '#',
    location: 'L009 The Glen Shopping Centre, 235 Springvale Rd, Glen Waverley VIC 3150',
    email: '',
    tel: '(03) 9803 7878',
  },
  {
    id: 3,
    office: 'Nikushiki CBD',
    href: '#',
    location: 'Melbourne Central, Shop GD070/360 Elizabeth St, Melbourne VIC 3000',
    email: '',
    tel: ' (03) 9367 9823',
  },
  {
    id: 4,
    office: 'USHIMATSU Chadstone',
    href: '#',
    location: 'G-121 Chadstone Shopping Centre, Dandenong Road, Malvern East VIC',
    email: '',
    tel: ' (03) xxxx xxxx',
  },
]


const faqs = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet",
    answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet",
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',
    answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',
    answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',
    answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet",
    answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',
    answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet",
  },
]











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


</style>
