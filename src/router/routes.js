const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/post",
        name: "post",
        component: () => import("pages/PostPage.vue"),
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("pages/DashboardPage.vue"),
      },
      {
        path: "/pet",
        name: "pet",
        component: () => import("pages/AnimalPage.vue"),
      },
      {
        path: "/map",
        name: "map",
        component: () => import("pages/MapPage.vue"),
      },
    ],
  },

  {
    path: "/main",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/register",
        name: "register",
        component: () => import("pages/RegisterPage.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("pages/LoginPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default routes;
