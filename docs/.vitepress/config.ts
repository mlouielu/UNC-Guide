import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'UNC Guide',
  description: 'A practical guide to life at UNC–Chapel Hill',
  cleanUrls: true,
  lastUpdated: true,
  locales: {
    root: { label: 'English', lang: 'en-US' },
    zh_TW: { label: '繁體中文', lang: 'zh-TW', link: '/zh_TW/' }
  },
  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/assets/og-default.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],
  themeConfig: {
    locales: {
      root: {
        nav: [
          { text: 'Campus', items: [{ text: 'Safety', link: '/campus/safety' }] }
        ],
        sidebar: [
          { text: 'Daily Life', items: [
            { text: 'Mobile Number', link: '/daily/comm' },
            { text: 'Home Internet', link: '/daily/broadband' },
            { text: 'Renting', link: '/daily/rental' }
          ]},
          { text: 'Transportation', items: [
            { text: 'RDU Pickup', link: '/transport/rdu-pickup' },
            { text: 'Car Purchase', link: '/vehicle/car-purchase' },
            { text: 'Auto Insurance', link: '/transport/auto-insurance' },
            { text: 'Auto Maintenance', link: '/transport/auto-maintenance' },
            { text: 'Buses', link: '/transport/buses' }
          ]},
          { text: 'Financial', items: [
            { text: 'Bank Accounts', link: '/finance/bank' },
            { text: 'Credit Basics', link: '/finance/credit' },
            { text: 'Money Transfer', link: '/finance/money-transfer' },
            { text: 'Retirement', link: '/finance/retire' }
          ]},
          { text: 'Academic', items: [
            { text: 'Course Registration', link: '/academic/course-registration' },
            { text: 'Student Record', link: '/academic/student-record' }
          ]},
          { text: 'Resources', items: [
            { text: 'Semester Calendar', link: '/resources/semester-calendar' }
          ]}
        ]
      },
      zh_TW: {
        nav: [
          { text: '校園', items: [{ text: '校園安全', link: '/zh_TW/campus/safety' }] }
        ],
        sidebar: [
          { text: '日常生活', items: [
            { text: '手機號碼', link: '/zh_TW/daily/comm' },
            { text: '網路服務', link: '/zh_TW/daily/broadband' },
            { text: '租屋', link: '/zh_TW/daily/rental' },
            { text: '天災停電', link: '/zh_TW/daily/outage' }
          ]},
          { text: '車輛相關', items: [
            { text: '買車指南', link: '/zh_TW/vehicle/car-purchase' },
            { text: '汽車保險', link: '/zh_TW/vehicle/auto-insurance' },
            { text: '汽車保養', link: '/zh_TW/vehicle/auto-maintenance' }
          ]},
          { text: '交通運輸', items: [
            { text: 'RDU 機場接送', link: '/zh_TW/transport/rdu-pickup' },
            { text: '公車系統', link: '/zh_TW/transport/buses' },
            { text: 'Uber/Lyft', link: '/zh_TW/transport/rideshare' }
          ]},
          { text: '學術相關', items: [
            { text: '課程註冊', link: '/zh_TW/academic/course-registration' },
            { text: '學生證明', link: '/zh_TW/academic/student-record' }
          ]},
          { text: '金融理財', items: [
            { text: '銀行開戶', link: '/zh_TW/finance/bank' },
            { text: '信用分數', link: '/zh_TW/finance/credit' },
            { text: '退休帳戶', link: '/zh_TW/finance/retire' },
            { text: '國際匯款', link: '/zh_TW/finance/money-transfer' }
          ]},
          { text: '資源', items: [
            { text: '學期行事曆', link: '/zh_TW/resources/semester-calendar' }
          ]}
        ]
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mlouielu/UNC-Guide' }
    ],
    footer: { message: 'Clear BSD License' }
  }
})

