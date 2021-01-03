
 

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../components/WelcomeScreen.vue') },
      { path: 'login', component: () => import('../components/Login.vue') },
      { path: 'welcomescreen', component: () => import('../components/WelcomeScreen.vue') },
      { path: 'signup', component: () => import('../components/OnBoarding/SignUp.vue') },
      { path: 'faceupload', component: () => import('../components/OnBoarding/FaceUpload.vue') },
      { path: 'addlicenseplate', component: () => import('../components/OnBoarding/AddLicensePlate.vue') },
      { path: 'dashboard', component: () => import('../components/Dashboard.vue') },
      { path: 'mypackages', component: () => import('../components/MyPackages.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
