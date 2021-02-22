<template>
  <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
    <q-item-label header class="text-white bg-primary">
      Content Details
    </q-item-label>

    <q-card-section class="row items-center no-wrap">
      <div class="column q-gutter-y-xs full-width">
        <div class="col q-mb-xs">
          <q-input outlined v-model="state.text" label="Creative Name" />
        </div>
      </div>
    </q-card-section>
    <q-separator class="q-ma-none" />
    <q-card-section class="row items-center no-wrap q-pt-none">
      <div class="column q-gutter-y-xs full-width">
        <div class="col" v-for="(data, index) in state.addInput" :key="index">
          <q-select
            outlined
            v-model="data.model"
            :options="data.options"
            :label="data.label"
          />
        </div>
      </div>
    </q-card-section>
    <q-separator class="q-ma-none" />
    <q-card-actions align="center" class="q-mt-md">
      <q-btn
        outline
        color="red"
        icon="restart_alt"
        label="Reset"
        type="reset"
      />
      <q-btn outline color="teal" icon="save" label="Create" type="submit"/>
    </q-card-actions>
  </q-form>
</template>

<script>
import { ref, reactive } from '@vue/composition-api';

export default {
  name: 'AddContent',
  setup(props, ctx){
    const state = reactive({
      text: '',
      addInput: [
        {
          label: 'Partner',
          model: null,
          options: ['Virgin', 'Specsavers', 'Nestle']
        },
        {
          label: 'Delivery Type',
          model: null,
          options: ['Trafficked', 'Non-Trafficked', 'Pre-Render']
        },
        {
          label: 'Creative Format',
          model: null,
          options: ['Display', 'Video']
        },
        {
          label: 'Platform',
          model: null,
          options: ['Google Web Designer', 'Vanilla Javascript']
        }
      ]
    })

    function onSubmit(){
      const isInputHasNull =
      (state.text != '') ?
        (state.addInput.filter(value => value.model === null).length > 0) ?
          true : false
        : true;


      if(isInputHasNull){
        this.$q.notify({
          message: "Please fill all empty fields.",
          type: "warning",
          onDismiss: () => { console.log('Dismissed') }
        })
      }else{

        this.$axios.post('/api/addContent', {
          title: state.text,
          partner: state.addInput[0].model,
          deliveryType: state.addInput[1].model,
          creativeFormat: state.addInput[2].model,
          platform: state.addInput[3].model
        })
        .then(response =>  this.$q.notify({ message: response.data.msg, type: "positive", onDismiss: () => { console.log('Dismissed') } }))
        .catch(error => this.$q.notify({ message: error.data.msg, type: "negative" }))
      }
    }

    function onReset(){
      console.log("reset");
    }

    return {
      state,
      onSubmit,
      onReset
    }
  }
}
</script>
