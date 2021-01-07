<template>
  <q-page>
    <div>
      <div class="row q-pt-xl q-pl-md">
        <div class="col">
          <q-btn
            outline
            round
            color="primary"
            to="/faceupload"
            exact
            icon="keyboard_backspace"
          />
        </div>
      </div>
      <div class="marginTop">
        <div class="row q-pa-lg">
          <div class="col">
            <div class="text-center text-h5 text-bold no-margin">Enter License Plate Number</div>
          </div>
        </div>
        <div class="row q-pl-xl q-pr-xl">
          <div class="col">
            <div class="no-margin text-secondary text-center">
              This will help GarageEye identify your
            </div>
          </div>
        </div>
        <div class="row q-pl-xl q-pr-xl">
          <div class="col">
            <div class="no-margin text-secondary text-center">
              vehicle in order to open the garage
            </div>
          </div>
        </div>
        <div class="inputs ">
         <div class="row q-pt-lg">
        <div class="col">
          <q-input
            :rules="[ val => val.length == 6 || 'Please enter a valid license plate number']" 
            lazy-rules 
            ref="licensePlate"
            
            class="input rounded centerBlock"
            
            v-model="licensePlateNumber"
            @change="updateLicensePlateNumber"
            label="eg. BLS787"
            
          />
        </div>
      </div>
          
           
        </div>

        <div class="row text-center loginMargin">
          <div class="col loginMargin">
            <q-btn
              @click="createNewUser"
              class="btn"
              unelevated
              color="primary"
              label="Next"
              
            />
          </div>
        </div>
        <div class="row">
          <div class="col">

          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {

    mounted(){
        console.log(this.userSignUpDetails)
        this.licensePlateNumber = this.userSignUpDetails.licensePlate;
    },
    data(){
      return{ 
        licensePlateNumber:''
      }
    },
    computed: {
       ...mapState('auth',['userSignUpDetails']),
    },
    methods : {
        ...mapActions('auth',['storeUserLicensePlateInfo','registerUser']),
        updateLicensePlateNumber(){
            this.storeUserLicensePlateInfo(this.licensePlateNumber)
        },
        createNewUser(){
             this.$refs.licensePlate.validate();
             if(!this.$refs.licensePlate.hasError){
                 this.registerUser();
             }
             
        }
    }

};
</script>

<style scoped>
body {
  font-family: "baloo";
}

.input {
  width: 80%;
  height: 100%;
}

.centerBlock {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.inputs {
  padding-top: 10%;
}

.btn {
  width: 80%;
  height: 100%;
  border-radius: 30px;
  font-size: 18px;
}

.marginTop {
  padding-top: 15%;
}

.loginMargin {
  padding-top: 15%;
}

 
</style>