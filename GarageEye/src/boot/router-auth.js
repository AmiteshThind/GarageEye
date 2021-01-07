// import something here
import {LocalStorage} from 'quasar'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({router}) => {
   router.beforeEach((to,from,next)=>{
      //fired every time router tries to go to a different route
      let loggedIn = LocalStorage.getItem('loggedIn')
      if(!loggedIn && (to.path=='/dashboard' || to.path=='/mypackages')){
        next('/welcomescreen');
      }else{
        next();
      }
      next();
   })
}
