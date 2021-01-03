<template>
  <q-page>
    <div class="row q-mt-xl text-center">
      <div class="col topMarginHeader">
        <h4 class="no-margin text-primary">Package Tracking Numbers</h4>
      </div>
    </div>
    <div class="q-mt-md">
      <div class="row text-center">
        <div class="col">
          <h7 class="no-margin text-secondary"
            >This will allow delivery personelle to show the</h7
          >
        </div>
      </div>
      <div class="row text-center">
        <div class="col">
          <h7 class="no-margin text-secondary"
            >package label to the camera and open the garage.</h7
          >
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col q-ma-xl">
        <q-input v-model="text" label="Add Tracking ID" outlined :dense="dense">
          <template v-slot:append>
            <q-btn dense color="primary" exact round icon="add" />
          </template>
        </q-input>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-btn-toggle
          v-model="secondModel"
          spread
          size="16px"
          no-caps
          unelevated
          toggle-color="transparent"
          color="transparent"
          text-color="secondary"
          toggle-text-color="primary"
          :options="[
            { label: 'In-Progress', value: 'one' },
            { label: 'Delievered', value: 'two' },
          ]"
        />
      </div>
    </div>
    <div v-if="secondModel == 'one'" class="q-pl-xl q-pr-xl">
      <package />
      <package />
      <package />
    </div>

    <div v-else class="q-pl-xl q-pr-xl">
      <package />
      <package />
    </div>
  </q-page>
</template>

<script>
import PackageDetails from "./PackageDetails";
export default {
  data() {
    return {
      model: "one",
      secondModel: "one",
    };
  },
  components: {
    package: PackageDetails,
  },
};
</script>

<style scoped>
.topMarginHeader {
  margin-top: 10%;
}
.centerBlock {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
