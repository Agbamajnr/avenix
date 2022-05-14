<template>
    <div class="main grid-center">
        <div class="container p-10 text-left flex flex-col text-left lg:justify-between gap-y-12 lg:gap-0">
            <div class="top col-flex gap-y-3">
                <p class="row-flex greeting-text text-white gap-x-1">Welcome back <img src="@/assets/img/memoji.svg" alt="">,</p>
                <p class="top-subtitle p-txt">Enter the passcode for your Avenix account to continue to your dashboard</p>
            </div>
            <div class="form w-full col-flex gap-y-1">
                <div id="otp" class="flex flex-row gap-x-2 w-full text-white">
                    <div class="flex flex-row gap-x-2 sm:gap-x-3 w-full overflow-scroll">
                        <input type="number" v-model="val1" @input="next" />
                        <input type="number" v-model="val2" @input="next" />
                        <input type="number" v-model="val3" @input="next" />
                        <input type="number" v-model="val4" @input="next" />
                        <input type="number" v-model="val5" @input="next" />
                        <input type="number" v-model="val6" @input="next" />
                    </div>
                    <img src="@/assets/img/previewi.svg" alt="">
                </div>
                <p class="font-sm" style="color: #FFD107;">Forgot passcode?</p>
            </div>
            <button @click="$emit('toUsernameComp')"  class="next-btn grid-center w-full">
                <p class="text-white font-medium">Continue</p>
            </button>
        </div>
    </div>
</template>

<script>
import {ref}  from 'vue'
export default {
    name:'password',
    setup() {

        const val1 = ref()
        const val2 = ref()
        const val3 = ref()
        const val4 = ref()
        const val5 = ref()
        const val6 = ref()

        const next = (e) => {
            e.target?.nextSibling?.focus();
        }

        return { next, val1, val2, val3, val4, val5, val6}
    }
}

</script>

<style scoped>
/* Some utitliy styles */
.container {
    width: 510px;
    height: 544px;
    background: #121212;
    border: 1px solid #3E3E3E;
}
.greeting-text {
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
}
.p-txt {
    color: #9F9F9F;
}
.top-subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
}
.btn-yellow {
    background-color: #FFD107;
    border-radius: 5px;
    height: 55px;
}

/* Inputs design */
input {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    text-align: center;
    background: #1C1C1C;
}

/* Design continue btn */
.next-btn {
    background: #313131;
    border-radius: 5px;
    height: 55px;

}
input:focus{
    border: none;
    outline: none !important;
    border: 2px solid #FFD107 !important;
    color: #fff;
}



/* media queries */

@media screen and (max-width: 768px) {
    .container {
        max-width: 474px;
        column-gap: 30px;
        border: none !important;
        width: 100%;
        height: 100%;
    }
    #otp{
        max-width: 100vw;
    }
    input {
        width: 40px;
        height: 36px;
    }
}

@media screen and (max-width: 475px) {
    .container {
        max-width: 100vw;
    }
    input {
        width: 40px;
        height: 40px;
    }
}
     

</style>