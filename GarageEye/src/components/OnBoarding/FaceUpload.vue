<template>
  <q-page>
    <div>
      <div class="row q-pt-xl q-pl-md">
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
        <div class="row q-pa-md">
          <div class="col">
            <div class="text-center text-h5 text-bold no-margin">
              Upload An Image of Your Face
            </div>
          </div>
        </div>
        <div class="row q-pl-xl q-pr-xl">
          <div class="col">
            <div class="no-margin text-subtitle text-secondary text-center">
              This will help GarageEye identify
            </div>
          </div>
        </div>
        <div class="row q-pl-xl q-pr-xl">
          <div class="col">
            <div class="text-subtitle no-margin text-secondary text-center">
              who is trying to open the garage
            </div>
          </div>
        </div>
        <div class="inputs">
          <div class="row">
            <div class="col">
              <q-uploader
                class="centerBlock uploadBox"
                color="secondary"
                flat
                bordered
                ref="uploader"
                :multiple="false"
                @added="added"
              />
            </div>
          </div>
        </div>

        <div class="row text-center loginMargin">
          <div class="col loginMargin">
            <q-btn
              
              class="btn"
              unelevated
              color="primary"
              label="Next"
              @click="uploadFile"
            />
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
import { fireBase, fireBaseStorage } from "../../boot/firebase";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("auth", ["userSignUpDetails"]),
  },
  data() {
    return {
      file: undefined,
    };
  },

  methods: {
    uploadFile() {
    this.$q.notify.setDefaults({
    position: 'bottom',
    timeout: 2000,
    textColor: 'white',
    color:'secondary',
    actions: [{  color: 'white' }]
})

      if (this.file) {
        const ref = "faces/" + this.userSignUpDetails.username;
        fireBaseStorage.ref().child(ref).put(this.file);
        this.$router.push('addlicenseplate');
      }else {
          this.$q.notify('Please Upload An Image');
      }
    },
    added(file) {
        console.log(file)
      this.file = file[0];
    },
  },
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
  padding-top: 5%;
}

.uploadBox {
  width: 70%;
  height: 250px;
}
</style>