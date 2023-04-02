import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Pictures from "../views/Pictures.vue";
import Register from "../views/Register.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/pildid",
        name: "Pildid",
        component: Pictures
    },
    {
        path: "/registreerimine",
        name: "Registreerimine",
        component: Register
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;