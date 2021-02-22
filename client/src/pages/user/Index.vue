<template>
  <q-page class="Adlib-contianer">
    <div class="col-lg q-px-xl q-pt-lg q-pb-xl adlib-header">
      <div class="row q-px-lg-xl q-px-md-lg q-px-sm-md">
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-5 q-pa-sm">
            <q-img src="../../assets/adlib-logo.svg" alt="adlib-logo" />
        </div>
      </div>

      <div class="row items-center q-px-lg-xl q-pb-lg-xl q-px-md-lg q-pb-md-xl q-px-sm-md">
        <div class="col-lg-6 col-md-6 col-xs-12 Adlib-left-side q-py-xl">
          <p class="text-h2 text-white">Choose <span class="bg-primary rounded-borders q-px-sm">Ad-Lib’fied</span> templates for your creative.</p>
        </div>
        <div class="col-lg-6 col-md-6 self-end q-px-xl col-xs-12 self-center q-pl-none Adlib-right-side">
          <q-img src="../../assets/undraw_content_team_3epn.svg" alt="right-content" />
        </div>
      </div>

    </div>

    <div class="row justify-center Adlib-Search">
      <div class="col-7">
        <q-input outlined v-model="ph" placeholder="Enter a keyword for filter" class="text-center bg-white rounded-borders shadow-7" input-class="text-center">
          <template v-slot:prepend>
            <q-btn icon="filter_list" dense flat/>
          </template>
        </q-input>
      </div>
    </div>

    <div class="image-wrapper row q-pa-lg-xl">
      <div class="col q-ma-xl q-pa-md bg-white">
        <stack :column-min-width="300" :gutter-width="15" :gutter-height="15" monitor-images-loaded>
          <stack-item class="img-container" v-for="(item, i) in images" :key="i">
            <img :src="`https://via.placeholder.com/${item}`" @click="clickImg(item)">
          </stack-item>
        </stack>
      </div>
    </div>

  </q-page>
</template>

<script>
import { Stack, StackItem } from "vue-stack-grid";

export default {
  name: "PageIndex",
  components: { Stack, StackItem },
  data () {
    return {
      text: '',
      ph: '',
      dense: false,
      images: [
        '350x150',
        '728x90',
        '320x50',
        '300x500',
        '400x200',
        '200x200',
        '400x400',
        '200x200',
        '200x250',
        '500x500',
        '300x250',
        '970x250',
        '200x300',
        '300x300',
        '500x200',
        '300x300',
        '250x250',
        '300x500',
        '200x200',
        '400x400',
        '200x200',
        '200x250',
        '500x500',
        '300x250',
        '400x200',
        '200x300',
        '350x150',
        '300x500',
        '400x200',
        '200x200',
        '350x150',
        '300x500',
        '400x200',
        '200x200',
        '400x400',
        '300x250',
        '400x200',
        '200x300',
        '300x300',
        '500x200',
      ]
    }
  },
  methods: {
    clickImg(e){
      console.log(e)
    }
  },
};
</script>

<style lang="scss" scoped>
.Adlib-contianer{
  background-color: #F3F4F9;
  .adlib-header{
    background-color:#13062A;
    background-image: url(https://assets.website-files.com/5fef96e9ea5148eb6ea7bcb5/601d6e12495face9c00dc05b_bottom--right-blob-platform.svg);
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: right;
    background-size: contain;
    .image-curve{
      position: absolute;
      width: 50rem;
      height: auto;
      bottom: 4.7rem;
      left: -5.5rem;
    }
    .Adlib-left-side{
      line-height: 1.2em;
      z-index: 999;
      span{
        font-weight: 700;
      }
    }
  }

  .Adlib-Search{
    margin-top: -1.9rem;
  }

  .image-wrapper{
    .img-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: center;
      overflow: hidden;
      margin: 0;
      object-fit: fill;
      cursor: pointer;
        img {
        display: block;
        margin: 0;
        width: 100%;
        height: auto;
      }

      figcaption {
        margin: 3px 0;
        text-align: center;
      }
    }
  }
}
</style>
