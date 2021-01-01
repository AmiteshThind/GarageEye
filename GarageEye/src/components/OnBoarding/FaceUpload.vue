<template>
  <q-page>
    <div>
      <div class="row q-ma-lg">
        <div class="col">
          <q-btn
            outline
            round
            color="primary"
            to="/signup"
            exact
            icon="keyboard_backspace"
          />
        </div>
      </div>
      <div class="marginTop">
        <div class="row q-ma-lg">
          <div class="col">
            <h5 class="text-center no-margin">Upload An Image of Your Face</h5>
          </div>
        </div>
        <div class="row q-ml-xl q-mr-xl">
          <div class="col">
            <h6 class="no-margin text-secondary text-center">
              This will help us identify
            </h6>
          </div>
        </div>
        <div class="row q-ml-xl q-mr-xl">
          <div class="col">
            <h6 class="no-margin text-secondary text-center">
              who is opening the garage
            </h6>
          </div>
        </div>
        <div class="inputs ">
          <div class="row " >
            <div class="col ">
              
                <q-uploader
                class="centerBlock uploadBox"
                    url="http://localhost:4444/upload"
                    color="secondary"
                    flat
                    bordered
                    
                />
            </div>
          </div>
          
           
        </div>

        <div class="row text-center loginMargin">
          <div class="col loginMargin">
            <q-btn
              to="/addlicenseplate"
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
  margin-top: 10%;
}

.btn {
  width: 80%;
  height: 100%;
  border-radius: 30px;
  font-size: 18px;
}

.marginTop {
  margin-top: 15%;
}

.loginMargin {
  margin-top: 25%;
}

.uploadBox{
    width: 70%;
    height: 250px;
}
</style>