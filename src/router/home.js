export default {
  path: "/",
  name: "home",
  redirect: "/home",
  component: () => import("@/layouts/MainLayout.vue"),
  children: [
    {
      path: "/home",
      name: "home_page",
      meta: {
        child: "home",
        requiresAdminRole: false,
      },
      component: () => import("@/views/HomePage.vue"),
    },
    {
      path: "/about",
      name: "about_page",
      meta: {
        child: "about",
        requiresAdminRole: false,
      },
      component: () => import("@/views/AboutUsPage.vue"),
    },
    {
      path: "/blog",
      name: "blog_page",
      meta: {
        child: "blog",
        requiresAdminRole: false,
      },
      component: () => import("@/views/BlogPage.vue"),
    },
    {
      path: "/blog/:id",
      name: "single_blog_page",
      meta: {
        child: "blog",
        requiresAdminRole: false,
      },
      component: () => import("@/views/SingleBlogPage.vue"),
    },
    {
      path: "/service",
      name: "service_page",
      meta: {
        child: "service",
        requiresAdminRole: false,
      },
      component: () => import("@/views/ServicePage.vue"),
    },
    {
      path: "/service/:id",
      name: "single_service_page",
      meta: {
        child: "service",
        requiresAdminRole: false,
      },
      component: () => import("@/views/SingleServicePage.vue"),
    },
  ],
};
