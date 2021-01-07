<template>
  <q-page>
    <div>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div class="row q-pt-md text-center">
          <div class="col topMarginHeader">
            <h5 class="no-margin text-bold text-primary">Package Tracking Numbers</h5>
          </div>
        </div>
        <div class="q-pt-md">
          <div class="row text-center">
            <div class="col">
              <div class="no-margin text-subtitle text-secondary">
                This will allow delivery personelle to show the
              </div>
            </div>
          </div>
          <div class="row text-center">
            <div class="col">
              <div class="no-margin text-subtitle text-secondary">
                package label to the camera and open the garage.
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <div>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div class="row">
          <div class="col q-pa-xl">
            <q-input v-model="newTrackingID" label="Add Tracking Number"  >
              <template v-slot:append>
                <q-btn
                  color="primary"
                  exact
                  size="sm"
                  push
                  round
                  icon="add"
                  @click="addNewPackage"
                />
              </template>
            </q-input>
          </div>
        </div>
      </transition>
    </div>
<div>
<transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
        >
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-btn-toggle
          v-model="status"
          spread
          size="16px"
          no-caps
          unelevated
          toggle-color="transparent"
          color="transparent"
          text-color="secondary"
          toggle-text-color="primary"
          :options="[
            { label: 'In-Progress', value: 'pending' },
            { label: 'Delivered', value: 'delivered' },
          ]"
        />
      </div>
    </div>
</transition>
</div>

    <div v-if="status == 'delivered'" class="q-pl-xl q-pr-xl">
      <div>
        <transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
        >
          <package
            v-for="(packageDetails, key) in deliveredPackages"
            :key="key"
            :packageDetails="packageDetails"
          />
        </transition>
      </div>
    </div>

    <div v-else class="q-pl-xl q-pr-xl">
      <transition
        appear
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
      >
        <div>
          <package
            v-for="(packageDetails, key) in pendingPackages"
            :key="key"
            :packageDetails="packageDetails"
          />
        </div>
      </transition>
    </div>
  </q-page>
</template>

<script>
import PackageDetails from "./PackageDetails";
import { mapState, mapActions } from "vuex";
export default {
  mounted() {},
  data() {
    return {
      status: "pending",
      newTrackingID: "",
    };
  },
  computed: {
    ...mapState("auth", ["userDetails"]),

    deliveredPackages() {
      if (this.userDetails.packages) {
        let deliveredPackages = [];
        let packages = this.userDetails.packages;
        console.log(packages);
        let keys = Object.keys(this.userDetails.packages);

        for (let key of keys) {
          if (packages[key].delivered) {
            deliveredPackages.push(packages[key]);
          }
        }

        console.log(deliveredPackages);

        return deliveredPackages;
      }
    },
    pendingPackages() {
      if (this.userDetails.packages) {
        let pendingPackages = [];
        let packages = this.userDetails.packages;
        let keys = Object.keys(this.userDetails.packages);
        for (let key of keys) {
          if (!packages[key].delivered) {
            pendingPackages.push(packages[key]);
          }
        }

        return pendingPackages;
      }
    },
  },
  methods: {
    ...mapActions("auth", ["addPackage"]),
    addNewPackage() {
      let payload = {
        trackingNumber: this.newTrackingID,
        delivered: false,
      };

      this.addPackage(payload);
    },
  },
  components: {
    package: PackageDetails,
  },
};
</script>

<style scoped>
.topMarginHeader {
  padding-top: 10%;
}
.centerBlock {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
