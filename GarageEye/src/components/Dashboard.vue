<template>
  <q-page>
    <div class="row text-center q-mt-xl">
      <div class="col topMarginHeader">
        <h4 class="no-margin text-primary">Welcome To GarageEye</h4>
      </div>
    </div>
    <div class="row q-mt-xl q-ml-lg q-mb-lg">
      <div class="col">
        <h5 class="no-margin">Garage Details</h5>
      </div>
    </div>
    <div class="row">
      <div class="col col q-ml-lg">
        <q-card class="my-card bg-blue-grey-1 text-black" style="height: 175px">
          <q-card-section>
            <div class="text-h6">Status</div>
            <q-btn v-if="true" class="bg-green" flat>Closed</q-btn>
            <q-btn flat v-else class="bg-red">Open</q-btn>
          </q-card-section>

          <q-card-actions>
            <q-btn
              v-if="true"
              class="bg-grey-1 text-grey-7 q-ml-lg q-mr-lg q-mb-sm"
              style="width: 100%"
              >Open</q-btn
            >
            <q-btn v-else class="q-ml-lg q-mr-lg q-mb-sm" style="width: 100%"
              >Close</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
      <div class="col q-ml-lg q-mr-lg">
        <q-card class="my-card bg-blue-grey-1 text-black" style="height: 100%;width:100%">
          <q-card-section>
            <div class="text-h6 q-mb-lg">Last Opened</div>
            <h6 class="no-margin text-grey-7">2:40am April 24th</h6>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mt-xl q-ml-lg q-mb-lg">
      <div class="col">
        <h5 class="no-margin">Live Garage Footage</h5>
      </div>
    </div>
    <div class="row ">
      <div class="col q-ml-lg q-mr-lg q-mb-xl">
        <q-card class=" bg-blue-grey-1 my-card">
          <q-img src="https://i.ytimg.com/vi/YVwgtN4iL8I/maxresdefault.jpg">
            
          </q-img>

          <q-card-actions >
            <q-btn class='bg-white  q-ma-sm q-pa-sm '>Show Garage Surroundings</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
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
