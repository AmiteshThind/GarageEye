<template >
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="loggedIn">
      <q-footer
        class="no-margin q-pt-sm q-pb-sm q-pl-sm q-pr-sm bg-white text-center"
      >
        <q-tabs
          color="transparent"
          narrow-indicator
          dense
          align="justify"
          class="text-primary"
          active-bg-color="transparent"
          indicator-color="transparent"
        >
          <q-route-tab :ripple="false" to=/dashboard class="text-primary"
          name="mails" icon="home" label="Home" /> <q-route-tab :ripple="false"
          to=/mypackages class="text-primary" name="alarms" icon="inventory_2"
          label="My Packages" /> <q-route-tab :ripple="false" to=/welcomescreen
          class="text-primary" @click="logOutUser" name="alarms" icon="logout"
          label="Logout" />
        </q-tabs>
      </q-footer>
    </q-header>

    <q-page-container>
      <vue-page-transition name="fade">
        <router-view />
      </vue-page-transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {};
  },
  computed: {
    ...mapState("auth", ["loggedIn"]),
  },
  methods: {
    ...mapActions("auth", ["logOutUser"]),
  },
};
</script>
<style scoped>
</style>
