const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/user/Index.vue") }]
  },
  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      { path: "", component: () => import("pages/admin/Admin.vue") },
      {
        path: "content",
        component: () => import("pages/admin/ManageContent.vue"),
        children: [
          {
            path: ":id"
          }
        ]
      },
      {
        path: "settings",
        component: () => import("pages/admin/AdminSettings.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
