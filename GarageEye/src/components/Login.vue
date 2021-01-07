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

       <div class="row centerBlock text-center">
        <div class="col">
          <q-img style="width:15%;height:15%" src="../assets/logo.png"  spinner-color="primary" />
        </div>
      </div>

      <div class="inputs">
        <div class="row">
          <div class="col">
            <div class="no-margin text-h5 q-pb-lg text-bold text-center">Login To GarageEye</div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-input
              ref="email"
              :rules="[ val => isValidEmailAddress(val) || 'Please enter valid email address']" 
              lazy-rules
              
              class="input centerBlock"
              
              type="email"
              v-model="loginData.email"
              label="Email Address"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col">
            <q-input
              ref="password" 
              :rules="[ val => val.length >= 6 || 'Please use minimum 6 characters']"
              lazy-rules
              
              class="input rounded centerBlock"
               
              v-model="loginData.password"
              label="Password"
              type="password"
            />
          </div>
        </div>
      </div>

      <div class="row text-center loginMargin">
        <div class="col">
          <q-btn
            @click="login"
            class="btn"
            unelevated
            color="primary"
            label="Login"
          />
        </div>
      </div>
      <div class="row">
        <div class="col"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),
    login() {
        this.$refs.email.validate();
        this.$refs.password.validate();
        if(!this.$refs.password.hasError && !this.$refs.email.hasError){
                 this.loginUser(this.loginData);
            }
    },
    isValidEmailAddress(email){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
        }
  },
};
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
  padding-top: 10%;
}

.btn {
  width: 80%;
  height: 100%;
  border-radius: 30px;
  font-size: 18px;
}

.loginMargin {
  padding-top: 20%;
}
</style>