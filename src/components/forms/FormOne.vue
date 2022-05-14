<template>
    <div class="main grid-center">
        <div class="container p-10 text-left flex flex-col text-left lg:justify-between gap-y-10 lg:gap-0">
            <div class="top col-flex gap-y-3">
                <p class="row-flex greeting-text text-white gap-x-1">Hello <img src="@/assets/img/memoji.svg" alt="">,</p>
                <p class="top-subtitle p-txt">In a few steps, you can buy, send and receive, save and borrow crypto funds with just your email address.</p>
            </div>
            <div class="form w-full col-flex gap-y-3">
                <input type="email" name="Email" v-model="data.email" class="pl-4 w-full"  placeholder="Email Address">
                <p class="p-txt form-subtitle">By entering your personal email address, you agree to our <a href="#" class="underline terms-p">Terms & Conditions</a></p>
            </div>
            <button @click="$emit('toUsernameComp')"  :class="{'btn-yellow grid-center w-full': data.email.length > 0, 'next-btn grid-center w-full': data.email.length < 1}">
                <p class="text-white font-medium" v-if="data.email.length < 1">Continue</p>
                <p class="text-white font-medium" v-if="data.email.length > 0" style="color: #1C1C1C">Continue</p>
            </button>
        </div>
    </div>
</template>

<script>
import {ref, reactive} from 'vue'

export default {
    name:'FormOne',
    setup() {
        // Define data for model
        const data = reactive({
            email: ''
        })


        // Export data
        return {data}
    }

}
</script>

<style scoped>
/* Some utitliy styles */
.container {
    width: 510px;
    height: 500px;
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
.form-subtitle {
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
}
.btn-yellow {
    background-color: #FFD107;
    border-radius: 5px;
    height: 55px;
}
/* Inputs design */

input[type=email]{
    background: #313131;
    border: none;
    height: 55px;
    background: #313131;
    border-radius: 5px 5px 0px 0px;
    border-bottom: 1px solid #6E6E6E;
}
input[type=email]:focus{
    border: none;
    outline: none !important;
    border-bottom: 2px solid #FFD107;
    color: #fff;
}


input::placeholder {
    transition: 0.2s ease-in;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */


    color: #6E6E6E;
}
.terms-p:hover {
    color: #FFD107;
}

/* Design continue btn */
.next-btn {
    background: #313131;
    border-radius: 5px;
    height: 55px;

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
    }

</style>



