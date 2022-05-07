<template>
    <div class="main flex flex-col justify-start w-full py-12 min-h-screen min-w-screen" ref="main">
        <div class="header bg-red-800 w-full flex flex-row gap-x-5">
            <img src="/images/logo.png" alt="">
            <p>Avenix</p>
        </div>
        <div class="components w-full h-full min-w-screen flex justify-center">
            <component :is="component"></component>
        </div>
    </div>
</template>

<script>
//Import components
import FirstStep from '@/components/forms/FirstStep.vue'
import SecondStep from '@/components/forms/SecondStep.vue'
import LastStep from '@/components/forms/ThirdStep.vue'

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
    .main {
        background: #090B13;
        font-family: Neue Machina;
    }
    .form-comp {
        width: 510px;
        height: 500px;
    }
</style>