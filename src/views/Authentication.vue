<template>
    <div class="main flex flex-col  items-center w-full py-10" ref="main">
        <div class="header w-4/5">
            <img src="../assets/img/logo.svg" alt="">
        </div>
        <div class="components w-full h-full min-w-screen min-h-screen flex justify-center items-center">
            <component @toUsernameComp="component = 'second-step'" :is="component"></component>
        </div>
    </div>
</template>

<script>
//Import components
import FirstStep from '@/components/forms/FormOne.vue'
import SecondStep from '@/components/forms/FormTwo.vue'
import LastStep from '@/components/forms/Password.vue'

//Import tools
import {ref, reactive, onBeforeMount, provide, computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import axios from 'axios'
export default {
    components: {
        'first-step':FirstStep,
        'second-step':SecondStep,
        'last-step': LastStep

    },
    setup () {
        const component = ref('first-step')

        return {component}
    }
}
</script>

<style scoped>
    
</style>