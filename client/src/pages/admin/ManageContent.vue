<template>
  <div class="q-pa-md row items-start q-gutter-md add-content">
    <div
      class="row no-wrap items-center q-mt-md q-pa-sm bg-grey-3 rounded-borders add-content__Header"
    >
      <q-btn
        flat
        color="primary"
        icon="filter_alt"
        dense
        label="Filter"
        size="sm"
      />
      <q-space />
      <div>
        <q-btn
          color="primary"
          icon="add_to_queue"
          label="Create New Content"
          size="sm"
          @click="open('right')"
        />
      </div>
    </div>
    <q-dialog
      v-model="dialog"
      :position="position"
      full-height
      class="no-padding"
    >
      <q-card style="width: 350px; height:" full-height square>
        <AddContent />
      </q-card>
    </q-dialog>
    <q-card class="add-content__Card" flat bordered>
      <q-card-section>
        <ContentList />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import ContentList from "../../components/admin/ContentList";
import AddContent from "../../components/admin/AddContent";

export default {
  name: "ManageContent",
  components: { ContentList, AddContent },
  data() {
    return {
      dialog: false,
      position: "left"
    };
  },
  methods: {
    open(position) {
      this.position = position;
      this.dialog = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.add-content {
  .add-content__Header {
    width: 100%;
  }
  .add-content__Card {
    width: 100%;
    height: 82.3vh;
    overflow: auto;
  }
}
</style>
