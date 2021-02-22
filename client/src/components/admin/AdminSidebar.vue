<template>
  <q-scroll-area class="fit">
    <q-list padding v-for="(list, index) of navList" :key="index">
      <q-item clickable v-ripple :active="list.isActive" :to="list.url" exact>
        <q-item-section avatar>
          <q-icon :name="list.icon" />
        </q-item-section>

        <q-item-section>
          {{ list.name }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script>
export default {
  name: "AdminSidebar",
  props: {
    navList: {
      type: Array
    }
  }
};
</script>
