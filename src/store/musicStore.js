import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMusicStore = defineStore('brand', () => {
    const musicList = ref([
        {
            id:'1',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/joe.jpeg',
            band: 'Joe Satriani',
            album: 'The Extremist',
            song: 'Rubinas Blue Sky Happiness',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/rubina.mp3',
        },
        {
            id:'21',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/tristram.jpeg',
            band: 'Diablo',
            album: 'Diablo',
            song: 'Tristram',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/tristram.mp3',
        },
        {
            id:'2',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/Avalanche.jpg',
            band: 'Evan Baker',
            album: 'Light the Air',
            song: 'Avalanche',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/Avalanche.mp3',
        },
        {
            id:'16',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/zard.jpeg',
            band: 'ZARD 坂井泉水',
            album: 'forever you',
            song: 'ハイヒール脱ぎ捨てて',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/kick.mp3',
        },
        {
            id:'3',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/runaway.jpg',
            band: 'CJ Burnett',
            album: 'Dream Shore',
            song: 'Runaway',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/Runaway.mp3',
        },
        {
            id:'4',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/tang.jpg',
            band: 'Tang Dynasty',
            album: 'Tang Dynasty',
            song: 'Legend',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/legend.mp3',

        },
        {
            id:'17',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/memory.jpg',
            band: 'Every Little Thing',
            album: 'Many Pieces',
            song: 'キヲクm',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/memory.mp3',
        },
        {
            id:'5',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/zhang.jpg',
            band: 'Zhang Chu',
            album: 'Zhang Chu',
            song: 'Shameful being left alone',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/shameful.mp3',
        },
        {
            id:'13',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/running.jpg',
            band: 'FM-84',
            album: 'Atlas',
            song: 'Running in the night',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/Running in the Night.mp3',

        },
        {
            id:'14',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/spitz.jpg',
            band: 'SPITZ',
            album: 'SPITZ',
            song: 'ロビンソン',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/SPITZ.mp3',

        },
        {
            id:'15',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/memories.jpeg',
            band: 'The Midnight ',
            album: 'Endless Summer',
            song: 'Memories',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/Memories.mp3',

        },
        {
            id:'6',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/Dou.jpg',
            band: 'Dou Wei',
            album: 'Black Dream',
            song: 'Advanced Animal',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/advanced.mp3',
        },
        {
            id:'7',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/steve.jpg',
            band: 'Steve Vai',
            album: 'SEX&RELIGION',
            song: 'In My Dreams With you',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/In+My+Dreams+With+You.mp3',
        },
        {
            id:'18',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/rakuen.jpeg',
            band: 'Do As Infinity',
            album: 'Need Your Love',
            song: 'Rakuen',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/rakuen.mp3',
        },
        {
            id:'8',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/III.jpg',
            band: 'Athletics',
            album: 'III',
            song: 'who you are is not enough',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/III.mp3',
        },
        {
            id:'9',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/eric.jpg',
            band: 'Eric Johnson',
            album: 'Ah Via Musicom',
            song: 'Cliffs of Dover',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/Cliffs Of Dover.mp3',

        },
        {
            id:'10',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/skidrow.jpeg',
            band: 'Skid Row',
            album: 'Skid Row',
            song: '18 and Life',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/18 and Life.mp3',
        },
        {
            id:'20',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/Silhouette Dance.jpeg',
            band: 'R4',
            album: 'ridge racer type 4',
            song: 'Silhouette Dance',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/Silhouette Dance.mp3',
        },
        {
            id:'11',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/Dream.jpg',
            band: 'Dream Theater',
            album: 'Awake',
            song: 'Lifting Shadows Off a Dream',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/Lifting Shadows Off a Dream.mp3',
        },
        {
            id:'19',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/the world.jpeg',
            band: 'Jason Mraz',
            album: 'Love is a Four Letter Word',
            song: 'The World as I See it',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/The World As I See It.mp3',
        },
        {
            id:'12',
            cover: 'https://d1nuow4z6t9ani.cloudfront.net/images/music/White Lion.jpg',
            band: 'White Lion',
            album: 'Pride',
            song: 'Wait',
            src: 'https://d1nuow4z6t9ani.cloudfront.net/music/Wait.mp3',

        },

    ])

    const currentIndex = ref(0)
    const currentMusic = computed(() => musicList.value[currentIndex.value])

    return {
        musicList,
        currentIndex,
        currentMusic,
    }
})