<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="admin__Card-settings" flat bordered>
      <q-card-section>
        <q-banner class="bg-grey-3">
          <q-icon class="q-mr-sm" name="signal_wifi_off" color="primary" size="sm"/>
          You can configure admin here
        </q-banner>
        asdada
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "AdminSettings"
};
</script>

<style lang="scss" scoped>
.admin__Card-settings {
  width: 100%;
  height: 91vh;
  overflow: auto;
}
</style>
