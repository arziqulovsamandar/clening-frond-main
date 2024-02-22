export default {
  path: "/admin",
  name: "admin",
  component: () => import("@/layouts/AdminLayout.vue"),
  meta: {
    requiresAdminRole: true,
  },
  children: [
    {
      path: "/messages",
      name: "messages",
      component: () => import("@/views/MessagesPage.vue"),
      meta: {
        child: "messages",
        requiresAdminRole: true,
      },
    },
    {
      path: "/services",
      name: "services",
      component: () => import("@/views/CategoriesPage.vue"),
      meta: {
        child: "services",
        requiresAdminRole: true,
      },
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("@/views/PostsPage.vue"),
      meta: {
        child: "posts",
        requiresAdminRole: true,
      },
    },
    {
      path: "/chat",
      name: "chat",
      component: () => import("@/views/ChatPage.vue"),
      meta: {
        child: "chat",
        requiresAdminRole: true,
      },
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("@/views/LogoutPage.vue"),
      meta: {
        child: "logout",
        requiresAdminRole: true,
      },
    },
  ],
};
