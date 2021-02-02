import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/reset-password',
        name: 'ResetPassword',
        component: () => import('../views/ResetPassword.vue')
    },
    {
        path: '/terms-and-service',
        name: 'TermsAndService',
        component: () => import('../views/TermsAndService.vue')
    },
    {
        path: '/terms-and-service-company',
        name: 'TermsAndServiceCompany',
        component: () => import('../views/TermsAndServiceCompany.vue')
    },
    {
        path: '/login',
        name: 'LoginUser',
        component: () => import('../views/LoginUser.vue')
    },
    {
        path: '/register',
        name: 'RegisterUser',
        component: () => import('../views/RegisterUser.vue')
    },
    {
        path: '/register/company',
        name: 'RegisterCompany',
        component: () => import('../views/RegisterCompany.vue')
    },
    {
        path: '/flyer',
        name: 'FlyerCustomizer',
        component: () => import('../views/FlyerCustomizer.vue')
    },
    {
        path: '/scan',
        name: 'QrCodeScanner',
        component: () => import('../views/QrCodeScanner.vue')
    },
    {
        path: '/menu',
        name: 'RabattMenu',
        component: () => import('../views/RabattMenu.vue')
    },
    {
        path: '/inventar',
        name: 'RabattInventar',
        component: () => import('../views/RabattInventar.vue')
    },
    {
        path: '/user/settings',
        name: 'UserSettings',
        component: () => import('../views/UserSettings.vue'),
        children: [
            {
                path: 'profile',
                name: "Profile",
                component: () => import('../views/userSettings/Profile.vue')
            },
            {
                path: 'info',
                name: 'Info',
                component: () => import('../views/userSettings/Info.vue')
            },
            {
                path: 'help',
                name: 'Help',
                component: () => import('../views/userSettings/Help.vue')
            },
            {
                path: 'feedback',
                name: 'Feedback',
                component: () => import('../views/userSettings/Feedback.vue')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router