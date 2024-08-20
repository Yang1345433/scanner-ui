import { RouteRecordRaw } from "vue-router";

export const staticRouter: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/layout',
        name: 'layout',
        component: () => import('@/layouts/index.vue'),
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import('@/views/index/index.vue'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/operationCheck',
                name: 'operationCheck',
                redirect: '/operationCheck/page',
                component: () => import('@/views/project/operationCheck/index.vue'),
                meta: {
                    title: '滑板运维检验'
                },
                children: [
                    {
                        path: 'page',
                        name: 'operationCheckPage',
                        component: () => import('@/views/project/operationCheck/OperationCheckProjectPage.vue'),
                        meta: {
                            title: '项目分页'
                        }
                    },
                    {
                        path: 'nationalRailwayDetail',
                        name: 'operationCheckNationalRailwayDetail',
                        component: () => import('@/views/project/operationCheck/nationalRailway/NationalRailwayDetail.vue'),
                        meta: {
                            title: '国铁项目详情'
                        }
                    },
                    {
                        path: 'nationalRailwayAdd',
                        name: 'operationCheckNationalRailwayAdd',
                        component: () => import('@/views/project/operationCheck/nationalRailway/NationalRailwayAdd.vue'),
                        meta: {
                            title: '国铁项目新增'
                        }
                    },
                    {
                        path: 'nationalRailwayAnalyze',
                        name: 'operationCheckNationalRailwayAnalyze',
                        component: () => import('@/views/project/operationCheck/nationalRailway/NationalRailwayAnalyze.vue'),
                        meta: {
                            title: '国铁项目分析'
                        }
                    }
                ]
            },
        ]
    }
]

export const errorRouter = []