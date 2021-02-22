<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="admin__Card" flat bordered>
      <q-card-section>
        Admin
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "AdminIndex"
};
</script>

<style lang="scss" scoped>
.admin__Card {
  width: 100%;
  height: 91vh;
  overflow: auto;
}
</style>
