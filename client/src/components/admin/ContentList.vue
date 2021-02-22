<template>
  <div>
    <q-list bordered class="rounded-borders q-mb-xs" v-for="(data, index) in setContent" :key="index">
      <q-item>
        <q-item-section avatar center>
          <q-avatar square color="primary" text-color="white" size="34">{{ data.title.charAt(0).toUpperCase() }}</q-avatar>
        </q-item-section>

        <q-item-section center class="col-4 gt-xs">
          <q-item-label >{{ data.title }}</q-item-label>
        </q-item-section>

        <q-item-section center>
          <q-item-label lines="1">
            <span class="text-weight-medium">{{ data.partner }}</span>
            <span class="text-grey-8"> - {{ data.deliveryType }}</span>
          </q-item-label>
          <q-item-label caption lines="1">
            {{ data.platform }}
          </q-item-label>
          <q-item-label
            lines="1"
            class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
          >
          </q-item-label>
        </q-item-section>

        <q-item-section center side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn icon="settings" flat dense label="Configure" size="md" color="primary" @click="dialog = true" :to="`${currentPath}/${data._id}`"/>
          </div>
        </q-item-section>
      </q-item>
    </q-list>

    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      :transition-show="transition"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup  :to="`/admin/content`">
            <q-tooltip clickable content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <q-card class="my-card" flat bordered>
          <q-card-section horizontal style="height:93vh">
            <q-card-section>
              <q-uploader
            url="/api/upload"
            label="Drop/Select Files"
            multiple
          >
            <template v-slot:list="scope">
              <q-list separator>
                <q-item v-for="file in scope.files" :key="file.name">
                  <q-item-section>
                    <q-item-label class="full-width ellipsis">
                      {{ file.name }}
                    </q-item-label>

                    <q-item-label caption>
                      Status: {{ file.__status }}
                    </q-item-label>

                    <q-item-label caption>
                      {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                    </q-item-label>
                  </q-item-section>

                  <q-item-section
                    v-if="file.__img"
                    thumbnail
                    class="gt-xs"
                  >
                    <img :src="file.__img.src" style="width: auto;"/>
                  </q-item-section>

                  <q-item-section top side>
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                      @click="scope.removeFile(file)"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </template>
          </q-uploader>
            </q-card-section>

            <q-separator vertical />

            <q-card-section>
              a w
            </q-card-section>

            <q-separator vertical />
          </q-card-section>
        </q-card>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "ContentList",
  data() {
    return {
      setContent: [],
      dialog: false,
      transition: "slide-up",
      maximizedToggle: true,
      currentPath: this.$router.currentRoute.path
    };
  },
  methods: {
    onItemClick() {
      console.log(this)
    },
    displayData(){
      this.$axios.get('/api')
        .then(response => {
          this.setContent = response.data;
        })
        .catch(error => console.log(error))
    }
  },
  created() {
    if(this.$route.params.id != undefined){
      this.dialog = true;
      this.transition = "none";
    }
  },
  mounted() {
    this.displayData();
  },
};
</script>
