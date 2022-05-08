<template>
  <div class="Register">
    <div class="logo" style="margin-right:100%;">
        <img src="@/assets/img/logo.png"  alt="logo" style="margin:2rem;" >
        <!-- <component :is="component" @next-step="getFirstData" @last-step="getSecondData"></component> -->
    </div>
     <FormOne/>
  </div>
</template>

<script>
import FormOne from '@/components/FormOne.vue'
// import Password from '@/components/Password.vue'

export default {
  components:{
   FormOne
  //  Password
    }
}
</script>

<style lang="scss">

</style>


