<template>
  
  <q-page>
    <div>
      <div class="row q-pt-xl q-pl-md">
        <div class="col">
          <q-btn
            outline
            round
            color="primary"
            to="/welcomescreen"
            exact
            icon="keyboard_backspace"
          />
        </div>
      </div>
      <div>
          <div class="row centerBlock text-center">
        <div class="col">
          <q-img style="width:15%;height:15%" src="../../assets/logo.png"  spinner-color="primary" />
        </div>
      </div>
        <div class="inputs">
          <div class="row">
            <div class="col">
              <div class="text-h5 q-pb-md text-bold text-center">Create Your Account</div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <q-input
                ref="username"
                
                class="input centerBlock"
                 rounded  
                 
                 v-model="signUpUserData.username"
                label="Username"
                :rules="[
                  (val) => val.length != 0 || 'Please enter a username',
                ]"
                lazy-rules
              />
            </div>
          </div>
          <div class="row q-pt-sm">
            <div class="col">
              <q-input
              
                ref="email"
                :rules="[
                  (val) =>
                    isValidEmailAddress(val) ||
                    'Please enter valid email address',
                ]"
                lazy-rules
                
                class="input centerBlock"
                 rounded  
                type="email"
                v-model="signUpUserData.email"
                label="Email Address"
              />
            </div>
          </div>
          <div class="row q-pt-sm">
            <div class="col">
              <q-input
                ref="password"
                :rules="[
                  (val) => val.length >= 6 || 'Please use minimum 6 characters',
                ]"
                lazy-rules
                
                class="input rounded centerBlock"
                 rounded  
                v-model="signUpUserData.password"
                label="Password"
                type="password"
              />
            </div>
          </div>
        </div>

        <div class="row text-center loginMargin">
          <div class="col loginMargin">
            <q-btn
              @click="storeUsersSignUpBasicInfo"
              class="btn"
              unelevated
              color="primary"
              label="Next"
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
import { mapActions, mapState } from "vuex";

export default {
  mounted() {
    console.log(this.userSignUpDetails);
    this.signUpUserData.username = this.userSignUpDetails.username;
    this.signUpUserData.password = this.userSignUpDetails.password;
    this.signUpUserData.email = this.userSignUpDetails.email;
  },
  data() {
    return {
      signUpUserData: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState("auth", ["userSignUpDetails"]),
  },
  methods: {
    ...mapActions("auth", ["storeUsersSignUpPageInfo"]),
    storeUsersSignUpBasicInfo() {
      this.$refs.username.validate() 
      this.$refs.email.validate();
      this.$refs.password.validate();
      if (!this.$refs.password.hasError && !this.$refs.email.hasError && !this.$refs.username.hasError) {
        this.storeUsersSignUpPageInfo(this.signUpUserData);
        this.$router.push("/faceupload");
      }
       
    },

    isValidEmailAddress(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
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

.centerImage {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
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
  padding-top: 10%;
}
</style>