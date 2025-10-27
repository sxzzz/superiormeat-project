
import { defineStore } from 'pinia'

export const usePostStore = defineStore('postStore', {
    state: () => ({
        posts: [
            {
                id: 10,
                title: 'Vicki Sher - Iconic Wagyu Brand SHER',
                description:
                    'Vicki Sher, the founder of Australia’s legendary wagyu brand SHER Wagyu, recently visited the Nikushiki Glen store. During the visit, she met with Mr. Kai Gu and engaged in a warm exchange about premium wagyu products and the growing collaboration between the two brands.',
                imageUrl:'/assets/images/blog/03042025.jpg',
                date: 'Apr 03 2025',
                datetime: '2025-04-03',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 9,
                title: 'J-LEC 2024 Seminar',
                description:
                    'Mr. Kai Gu participated in the 2024 seminar “Processing Meat and Cooking Skills of Japanese Wagyu Beef for Exporting Nations”, successfully hosted by the Japan Livestock Products Export Promotion Council (J-LEC).',
                imageUrl:'assets/images/blog/01112024.jpg',
                date: 'Nov 01, 2024',
                datetime: '2024-11-01',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 8,
                title: 'J-LEC 2024 Seminar',
                description:
                    'Mr. Gu’s participation underscores his commitment to bringing authentic Japanese wagyu expertise to his operations and fostering high-quality beef standards for global markets.',
                imageUrl:'assets/images/blog/01112024JP-1.jpg',
                date: 'Nov 01, 2024',
                datetime: '2024-11-01',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 7,
                title: 'Pardoo Wagyu',
                description:
                    'Mr. Hossam Shabayk, Director of Sales and Marketing at Pardoo Wagyu, recently paid an official visit to the Nikishiku Glen store. During the visit, Mr. Shabayk met with Mr. Kai Gu to discuss strategic opportunities for deeper collaboration between Pardoo Wagyu and Superior Meat.\n' +
                    '\n' +
                    'The meeting highlighted both parties’ shared commitment to promoting the finest Australian wagyu and enhancing the premium dining experience for customers. The discussion also explored future partnership initiatives aimed at strengthening their long-term cooperation in the Australian and international markets.',
                imageUrl:'assets/images/blog/03092024.jpg',
                date: 'Sep 03, 2024',
                datetime: '2024-09-03',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },

            {
                id: 5,
                title: 'Pardoo farm visit',
                description:
                    'Mr. Kai Gu toured Pardoo Wagyu farm to see first-hand how premium Australian wagyu is raised and cared for. A great day learning about top-notch cattle management and wagyu production!',
                imageUrl:'assets/images/blog/18042024.jpg',
                date: 'Apr 18, 2024',
                datetime: '2024-04-18',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 6,
                title: 'Origin Omi Beef Trip',
                description:
                    'Mr. Kai Gu visited Azuchi-cho, renowned for premium Omi Beef. He toured the farm, observed cattle management, and discussed production techniques with the experts, reflecting his commitment to authentic Japanese wagyu practices.',
                imageUrl:'assets/images/blog/05092023.jpg',
                date: 'Sep 09, 2023',
                datetime: '2023-09-05',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
        ]
    }),
    actions: {
        setPosts(data) {
            this.posts = data
        }
    }
})