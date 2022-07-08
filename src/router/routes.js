// page
const p = (path) => {
  return () => import(`@/pages/${path}.vue`).then((m) => m.default || m);
};

// page layout
const pl = (path) => {
  return () => import(`@/layouts/${path}.vue`).then((m) => m.default || m);
};

export default [
  {
    path: "/",
    name: "home",
    components: {
      default: p("HomePage"),
      header: pl("HeaderComponent"),
      navbar: pl("NavBarComponent"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    components: {
      default: p("LoginPage"),
    },
    meta: {
      requiresVisitor: true,
    },
  },
];
