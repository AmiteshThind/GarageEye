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
            <h5 class="text-center no-margin">Enter License Plate Number</h5>
          </div>
        </div>
        <div class="row q-pl-xl q-pr-xl">
          <div class="col">
            <h6 class="no-margin text-secondary text-center">
              This will help us identify
            </h6>
          </div>
        </div>
        <div class="row q-pl-xl q-pr-xl">
          <div class="col">
            <h6 class="no-margin text-secondary text-center">
              who is opening the garage
            </h6>
          </div>
        </div>
        <div class="inputs ">
         <div class="row q-pt-lg">
        <div class="col">
          <q-input
          bg-color='accent'
            class="input rounded centerBlock"
            outlined
            v-model="text"
            label="Enter License Plate Number"
            :dense="dense"
          />
        </div>
      </div>
          
           
        </div>

        <div class="row text-center loginMargin">
          <div class="col loginMargin">
            <q-btn
              to="/dashboard"
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
export default {};
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