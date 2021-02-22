<template>
  <div>
    <q-layout view="hHh Lpr lff" container style="height: 100vh">
      <q-header elevated class="bg-primary">
        <q-toolbar>
          <q-toolbar-title>Ad Showcase | Admin</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <AdminSidebar :navList="navList" />
      </q-drawer>
      <q-page-container>
        <q-page>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import AdminSidebar from "../components/admin/AdminSidebar";
export default {
  name: "AdminLayout",
  components: { AdminSidebar },
  data() {
    return {
      miniState: true,
      navList: [
        {
          icon: "fastfood",
          name: "Dasboard",
          url: "/admin",
          isActive: false
        },
        {
          icon: "note_alt",
          name: "Manage Content",
          url: "/admin/content",
          isActive: false
        },
        {
          icon: "emoji_flags",
          name: "New Request",
          url: "request",
          isActive: false
        },
        {
          icon: "settings_suggest",
          name: "Settings",
          url: "/admin/settings",
          isActive: false
        }
      ]
    };
  }
};
</script>
