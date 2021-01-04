<template>
  <q-page>
    <div class="marginTop">
      <div class="row centerImage">
        <div class="col">
          <q-img src="../assets/logo.png" spinner-color="primary" />
        </div>
      </div>
      <div class="row">
        <div class="col text-center q-mt-xl">
          <h3 class="no-margin baloo text-primary">
            <div class="q-ma-md">Welcome To GarageEye</div>
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col no-margin text-center">
          <h5 class="baloo no-margin text-weight-light text-secondary">
            Control and Monitor Your Garage Effortlessely
          </h5>
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
