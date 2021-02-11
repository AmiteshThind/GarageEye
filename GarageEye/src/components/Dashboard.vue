<template>
  <q-page>
      <div>
          <transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
        >
      <div class="q-pt-xl" >
    <div class="row text-center ">
      <div class="col ">
        <h5 class="text-bold no-margin text-primary">{{userDetails.details.username}}'s Garage</h5>
      </div>
    </div>
    <div class="row q-pt-lg q-pl-lg q-pb-md">
      <div class="col">
        <h6 class="no-margin text-bold">Garage Details</h6>
      </div>
    </div>
    <div class="row">
      <div class="col col q-pl-lg">
        <q-card class="my-card bg-info text-black" >
          <q-card-section >
            <div class=" text-h6 q-mb-md text">Status</div>
            <div class="text-center">
            <q-btn v-if="garageState=='closed'" class="bg-green-4  " no-caps flat><div class="text-white  text-bold text-caption">Closed</div></q-btn>
            <q-btn flat v-if="garageState=='open'" class="bg-red" no-caps ><div class="text-caption text-white text-bold">Open</div></q-btn>
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn
              v-if="garageState=='closed' "
              push
              @click="openGarage"
              no-caps
              class="bg-primary  text-grey-1 text-bold q-ml-lg q-mr-lg q-mb-sm"
              style="width: 100%"
              >Open</q-btn
            >
            <q-btn @click="closeGarage" v-if="garageState=='open'" push class="bg-primary text-white text-bold q-ml-lg q-mr-lg q-mb-sm" no-caps style="width: 100%"
              >Close</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
      <div class="col q-pl-lg q-pr-lg">
        <q-card class="my-card bg-info text-black" style="height: 100%;width:100%">
          <q-card-section>
            <div class="text-h6  q-pb-lg">Last Opened</div>
            <div class="text-subtitle text-center no-margin text-grey-9">{{dateGarageLastOpened}}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-pt-lg q-pl-lg q-pb-md">
      <div class="col">
        <h6 class="no-margin text-bold">Live Garage Footage</h6>
      </div>
    </div>
    <div class="row ">
      <div class="col q-pl-lg q-pr-lg q-pb-md">
        <q-card class=" no-margin  bg-info my-card">
          <q-img src="https://videos.cctvcamerapros.com/wp-content/files/security-camera-home-driveway.jpg">
            
          </q-img>

          <q-card-actions class='centerBlock'>
            <q-btn no-caps push class='bg-primary text-white text-bold  centerBlock q-ma-sm q-pa-sm '>Show Garage Surroundings</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
      </div>
          </transition>
      </div>
  </q-page>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed: {
        ...mapState('auth',['userDetails','garageState','dateGarageLastOpened'])
    },
    methods: {
        ...mapActions('auth',['changeGarageState']),

        openGarage(){
            this.changeGarageState('open')
        },
        closeGarage(){
            this.changeGarageState('closed')
        }
        }
};
</script>

<style scoped>
 
.my-card{
    border-radius:10px;
}

 .topMarginHeader {
  padding-top: 0%;
}
.centerBlock {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
