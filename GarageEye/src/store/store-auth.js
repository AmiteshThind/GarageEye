import Vue from "vue";
import {
  fireBaseAuth,
  fireBaseDatabase
} from "../boot/firebase";
import { Loading, LocalStorage, QSpinnerFacebook, uid } from "quasar";
const state = {
  loggedIn: false,
  garageState:'',  
  userDetails: {
    details: {
      licensePlate: "",
      username: ""
    },
    packages: {}
  },
  userSignUpDetails: {
    username: "",
    email: "",
    password: "",
    faceImage: "",
    licensePlate: ""
  }
};

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value;
  },

  storeUsersSignUpPageInfo(state, payload) {
    state.userSignUpDetails.username = payload.username;
    state.userSignUpDetails.password = payload.password;
    state.userSignUpDetails.email = payload.email;
  },
  storeUserLicensePlateInfo(state, payload) {
    state.userSignUpDetails.licensePlate = payload;
  },
  storeUserFaceImageInfo(state, payload) {
    state.userSignUpDetails.faceImage = payload;
  },
  resetUserSignUpInfo(state) {
    state.userSignUpDetails = {
      username: "",
      email: "",
      password: "",
      faceImage: "",
      licensePlate: ""
    };
  },
  updateData(state, payload) {
    state.userDetails.packages = payload.packages;
    state.userDetails.details = payload.details;
  },
  addPackage(state, payload) {
    //Vue.set(state.userDetails.packages,payload.id,payload.packageDetails); //store object under path as package_id:{packageInfo}
  },
  updateGarageState(state,payload){
      state.garageState = payload; 
  },

  clearData(state) {
    state.userDetails.packages = {};
    state.userDetails.details.licensePlate = "";
    state.userDetails.details.username = "";
  }
};

const actions = {
  addPackage({ dispatch }, newPackageInfo) {
    let packageID = uid();
    let payload = {
      id: packageID,
      packageDetails: newPackageInfo
    };

    dispatch("fbAddPackage", payload);
  },
  clearData({ commit }) {
    commit("clearData");
  },
  fbAddPackage({}, payload) {
    let userId = fireBaseAuth.currentUser.uid;
    let packageRef = fireBaseDatabase.ref(
      "Users/" + userId + "/packages/" + payload.id
    );
    packageRef.set(payload.packageDetails);
  },

  storeUsersSignUpPageInfo({ commit }, payload) {
    commit("storeUsersSignUpPageInfo", payload);
  },

  storeUserLicensePlateInfo({ commit }, payload) {
    commit("storeUserLicensePlateInfo", payload);
  },
  storeUserFaceImageInfo({ commit }, payload) {
    commit("storeUserFaceImageInfo", payload);
  },

  registerUser({ commit, state }, payload) {
    Loading.show({
      spinner: QSpinnerFacebook,
      spinnerColor: "primary"
    });
    fireBaseAuth
      .createUserWithEmailAndPassword(
        state.userSignUpDetails.email,
        state.userSignUpDetails.password
      )
      .then(authUser => {
        let userId = fireBaseAuth.currentUser.uid;
        let newUserRef = fireBaseDatabase.ref("Users/" + userId);
        let userInfo = {
          details: {
            username: state.userSignUpDetails.username,
            licensePlate: state.userSignUpDetails.licensePlate
          },
          packages: {}
        };
        newUserRef.set(userInfo);
        commit("resetUserSignUpInfo");
      })
      .catch(error => console.log(error));
  },

  loginUser({}, payload) {
    Loading.show({
      spinner: QSpinnerFacebook,
      spinnerColor: "primary"
    });
    fireBaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(authUser => console.log(authUser))
      .catch(error => console.log(error));
  },

  logOutUser({ commit }, payload) {
    commit("clearData");
    fireBaseAuth.signOut();
  },

  handleAuthStateChange({ commit, dispatch }) {
    console.log("work");
    fireBaseAuth.onAuthStateChanged(user => {
      Loading.hide();
      if (user) {
        console.log("loggedIn");
        commit("setLoggedIn", true);
        LocalStorage.set("loggedIn", true); // if user leaves app and comes back it stores state on device (before app starts)
        dispatch("fbReadData");
        dispatch("fbReadGarageState");
        this.$router.push("/dashboard").catch(err => {});
      } else {
        LocalStorage.set("loggedIn", false);
        commit("setLoggedIn", false);
        this.$router.replace("/welcomescreen").catch(err => {});
      }
    });
  },

  fbReadData({ commit }) {
    //user logged in and retireve data
    fireBaseDatabase
      .ref("Users/" + fireBaseAuth.currentUser.uid)
      .on("value", dataSnapShot => {
        //value means if any change to database then this listerner is triggered
        let data = dataSnapShot.val();
        console.log(data);
        commit("updateData", data);
      });
  },

  fbReadGarageState({commit}){
    fireBaseDatabase
      .ref("GarageState")
      .on("value", dataSnapShot => {
        //value means if any change to database then this listerner is triggered
        let data = dataSnapShot.val();
        console.log(data);
        commit("updateGarageState", data);
      });
  },
  changeGarageState({commit},garageState){
     let garageStateRef = fireBaseDatabase.ref(
      "GarageState"
    );
      garageStateRef.set(garageState);
     // commit('changeGarageState',garageState);
  }
};

const getters = {
  packagesDelievered(state) {}
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
