<template>
<div class="row">
  <q-card class="my-card q-ma-sm bg-blue-grey-1" bordered flat>
      <q-card-section>
        <p>{{packageDetails.trackingNumber}}</p>
      </q-card-section>
    </q-card>
</div>
</template>

<script>
export default {
    props:['packageDetails'],
 
    data(){
        return{
           
            
        }
    }
}
</script>

<style scoped>
.my-card{
  width: 100%;
  height: 50px;
  
}
</style>