export default {
  path: "/login",
  name: "login_page",
  meta: {
    child: "login",
    requiresAdminRole: false,
  },
  component: () => import("@/views/LoginPage.vue"),
};
