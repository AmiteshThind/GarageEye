<template >
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="true">
      
      <q-footer class="no-margin q-pt-sm q-pb-sm q-pl-xl q-pr-xl bg-white" >
        <q-tabs
        color="transparent"
        v-model="tab"
        narrow-indicator
        dense
        align="justify"
        class="text-primary"
        active-bg-color='transparent'
        
        indicator-color ='transparent'
      >
        <q-route-tab :ripple="false" to=/dashboard class="text-primary"  name="mails" icon="home" label="Home" />
        <q-route-tab :ripple="false" to=/mypackages class="text-primary"  name="alarms" icon="inventory_2" label="My Packages" />
        
      </q-tabs>
      </q-footer>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      tab: 'mails'
    }
  }
}
</script>
<style scoped>
 
</style>
