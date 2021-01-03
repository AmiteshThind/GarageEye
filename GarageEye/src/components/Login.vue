<template>
<q-page>
  <div>
    <div class="row q-mt-xl q-ml-md">
      <div class="col">
        <q-btn outline round color="primary" to="/welcomescreen" exact icon="keyboard_backspace" />
      </div>
    </div>

    

    <div class="inputs">
        <div class="row">
      <div class="col">
        <h4 class="text-center ">Login To GarageEye</h4>
      </div>
    </div>
      <div class="row">
        <div class="col ">
          <q-input
            bg-color ='accent'
            class="input  centerBlock"
             outlined
             type="email"
            v-model="text"
            label="Email Address"
            :dense="dense"
          />
        </div>
      </div>
      <div class="row q-mt-lg">
        <div class="col">
          <q-input
          bg-color='accent'
            class="input rounded centerBlock"
            outlined
            v-model="text"
            label="Password"
            :dense="dense"
              type="password"
          />
        </div>
      </div>
    </div>

    <div class="row text-center loginMargin">
      <div class="col">
        <q-btn class="btn " to='/dashboard' unelevated color="primary" label="Login" />
      </div>
    </div>
    <div class="row">
      <div class="col"></div>
    </div>

    



  </div>
</q-page>
</template>

<script>
export default {};
</script>

<style>
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
  margin-top: 10%;
}

.btn {
  width: 80%;
  height: 100%;
  border-radius: 30px;
  font-size: 18px;
   
}

.loginMargin {
  margin-top: 30%;
}
</style>