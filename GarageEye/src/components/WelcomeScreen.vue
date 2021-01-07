<template>
  <q-page>
    <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
    <div class="marginTop">
       
      <div class="row centerImage">
        <div class="col">
          <q-img src="../assets/logo.png" spinner-color="primary" />
        </div>
      </div>
      <div class="row">
        <div class="col text-center q-mt-xl">
          <div class="text-h3 sno-margin baloo text-primary">
            <div class="q-ma-md">GarageEye</div>
          </div>
        </div>
      </div>
      <div class="row q-pt-sm">
        <div class="col no-margin text-center">
          <div class="baloo text-h6 no-margin text-weight-light text-secondary">
            Control and Monitor  
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col no-margin text-center">
          <div class="baloo text-h6 no-margin text-weight-light text-secondary">
             Your Garage Effortlessely
          </div>
        </div>
      </div>
      <div class="marginTop">
        <div class="row text-center q-mt-lg">
          <div class="col">
            <q-btn
              class="baloo btn q-pa-sm"
              unelevated
              color="primary"
              to="/login"
              exact
              label="Login"
            />
          </div>
        </div>

        <div class="row text-center baloo q-mt-lg">
          <div class="col">
            <q-btn
              to="/signup"
              outline
              rounded
              class="btn q-pa-sm"
              color="primary"
              label="Sign Up"
            />
          </div>
        </div>
      </div>
      
    </div>
     </transition>
  </q-page>
</template>

<script>
export default {};
</script>

<style>

 

.centerImage {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

.btn {
  width: 80%;
  height: 100%;
  border-radius: 30px;
  padding: 10px;
  font-size: 18px;
}

.marginTop {
  padding-top:15%
}

.baloo {
  font-family: "baloo";
}
</style>
