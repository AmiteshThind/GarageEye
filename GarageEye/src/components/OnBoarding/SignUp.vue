<template>
<q-page>
  <div>
    <div class="row q-pt-xl q-pl-md">
      <div class="col">
        <q-btn outline round color="primary" to="/welcomescreen" exact icon="keyboard_backspace" />
      </div>
    </div>
<div>
   
    <div class="inputs">
         <div class="row">
      <div class="col">
        <h5 class="text-center ">Sign Up</h5>
      </div>
    </div>
         <div class="row">
        <div class="col ">
          <q-input
            bg-color ='accent'
            class="input  centerBlock"
             outlined
           
            v-model="text"
            label="Username"
            :dense="dense"
          />
        </div>
      </div>
      <div class="row q-pt-lg">
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
      <div class="row q-pt-lg">
        <div class="col">
          <q-input
          bg-color='accent'
            class="input rounded centerBlock"
            outlined
            v-model="text"
            label="Password"
              type="password"
            :dense="dense"
          />
        </div>
      </div>
    </div>

    <div class="row text-center loginMargin">
      <div class="col loginMargin">
        <q-btn to="/faceupload" class="btn " unelevated color="primary" label="Next" />
      </div>
    </div>
    <div class="row">
      <div class="col"></div>
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

.loginMargin {
  padding-top: 15%;
}
</style>