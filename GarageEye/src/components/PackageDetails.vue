<template>
<div class="row">
  <q-card class="my-card q-ma-sm bg-grey-4" bordered flat>
      <q-card-section>
        <p>{{trackingNumber}}</p>
      </q-card-section>
    </q-card>
</div>
</template>

<script>
export default {
    data(){
        return{
            trackingNumber:1234
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