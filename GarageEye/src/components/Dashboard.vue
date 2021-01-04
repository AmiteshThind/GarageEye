<template>
  <q-page>
      <div class="q-pt-lg" >
    <div class="row text-center  ">
      <div class="col ">
        <h5 class="no-margin text-primary">Lebron's Garage</h5>
      </div>
    </div>
    <div class="row q-pt-lg q-pl-lg q-pb-md">
      <div class="col">
        <h6 class="no-margin">Garage Details</h6>
      </div>
    </div>
    <div class="row">
      <div class="col col q-pl-lg">
        <q-card class="my-card bg-blue-grey-1 text-black" >
          <q-card-section>
            <div class="text-h6 q-mb-sm">Status</div>
            <q-btn v-if="true" class="bg-green" no-caps flat>Closed</q-btn>
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
      <div class="col q-pl-lg q-pr-lg">
        <q-card class="my-card bg-blue-grey-1 text-black" style="height: 100%;width:100%">
          <q-card-section>
            <div class="text-h6  q-pb-lg">Last Opened</div>
            <h7 class="no-margin text-grey-7">2:40am April 24th</h7>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-pt-lg q-pl-lg q-pb-md">
      <div class="col">
        <h6 class="no-margin">Live Garage Footage</h6>
      </div>
    </div>
    <div class="row ">
      <div class="col q-pl-lg q-pr-lg q-pb-md">
        <q-card class=" no-margin  bg-blue-grey-1 my-card">
          <q-img src="https://videos.cctvcamerapros.com/wp-content/files/security-camera-home-driveway.jpg">
            
          </q-img>

          <q-card-actions class='centerBlock'>
            <q-btn no-caps class='bg-white  centerBlock q-ma-sm q-pa-sm '>Show Garage Surroundings</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
      </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style scoped>
 
 .topMarginHeader {
  padding-top: 0%;
}
.centerBlock {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
