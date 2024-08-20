import { createRouter, createWebHashHistory } from "vue-router";
import { ROUTER_WHITE_LIST } from "@/config";
import { staticRouter, errorRouter } from "@/routers/modules/staticRouter.ts";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...staticRouter, ...errorRouter],
    strict: false,
    scrollBehavior: () => ({ left: 0, top: 0})
})

router.beforeEach(async (to, from, next) => {
    // 判断访问页面是否为路由白名中，如果存在直接放行
    if (ROUTER_WHITE_LIST.includes(to.path)) return next()
    from.path
    next()
})

export default router