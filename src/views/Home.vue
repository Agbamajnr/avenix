<template>
  <div class="main flex justify-center w-full min-h-screen" ref="main">
      <div class="body h-full flex flex-col items-center" v-if="active_nav === false">
        <div class="top w-4/5 flex flex-col lg:px-0 pt-5 h-full">
            <div class="header flex flex-row items-center w-full justify-between text-white">
                <div class="logo">
                    <img src="../assets/img/logo.svg" alt="">
                </div>
                <button class="mobile-nav lg:hidden block" @click="handleNav"><p>=</p></button>
                <div class="nav gap-x-6 lg:flex flex-row hidden">
                    <a href="#" ><p class="row-flex items-center gap-y-1">Products<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg></p></a>
                    <a href="#"><p>Company</p></a>
                </div>
                <img src="../assets/img/coming-soon.svg" alt="">
            </div>

            <div class="hero mt-28  flex flex-col gap-y-16">
                <div class="flex-col flex items-center justify-center gap-y-4 text-white text-center w-full">
                    <p class="text-3xl lg:text-5xl w-full font-black text-white lg:px-8 hero-head" style=" max-width: 1082px;">Buy, sell and manage <span style="color: #FFD107;">crypto</span> process in one app</p>
                    <p class="w-full lg:w-3/5 lg:px-9 text-grey-300 text-xl" style="color: #F7F7F7">Manage your cryptocurrency portfolio on the simplest app</p>
                    <div class="waiting-form flex sm:flex-row gap-x-7 sm:mt-7">
                        <input type="email" placeholder="avenix@support.com" class="h-full px-3">
                        <button class="text-black">Get early access</button>
                    </div>
                </div>
                <img src="../assets/img/home-hero-img.svg" alt="">
            </div>
        </div>

        <div class="main-info w-full h-full flex-col flex items-center">
            <div class="wallet-catalogue flex lg:w-4/5 flex-col lg:gap-x-24 lg:flex-row w-full h-full mt-28 text-left p-5 items-center">
                <div class="details w-full lg:w-1/2 gap-0 col-flex gap-y-4 ">
                    <p class="hero-title">Buy, Sell and Borrow </p>
                    <div class="flex flex-row gap-x-3 items-start">
                        <img src="../assets/img/check.svg" alt="">
                        <p class="text-sm font-4xl w-full "><span class="font-bold">Purchase instantly:</span> gLorem ipsum dolor sit amet, consectetur adipiscing elit. Non est amet non scelerisque. Quis dolor massa semper faucibus. Lectus nec nisl amet.Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="flex flex-row gap-x-3 items-start">
                        <img src="../assets/img/check.svg" alt="">
                        <p class="text-sm font-4xl w-full "><span class="font-bold">Stake Instantly:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non est amet non sceleris</p>
                    </div>
                    <div class="flex flex-row gap-x-3 items-start">
                        <img src="../assets/img/check.svg" alt="">
                        <p class="text-sm font-4xl w-full "><span class="font-bold">Swap instantly:</span> gLorem ipsum dolor sit amet, consectetur adipiscing elit. Non est amet non scelerisque. Quis dolor massa semper faucibus. Lectus nec nisl amet.Lorem ipsum dolor sit amet</p>
                    </div>

                    <div class="row-flex gap-x-2 items-center cursor-pointer">
                        <p class="" style="border-bottom: 1px solid  #D9DDEE; color: #FFD107;">Get Started</p>
                        <svg  class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                    
                </div>
                <img src="../assets/img/buy-btc.svg" class="w-1/2 hidden lg:block " alt="">
                <!-- <img src="../assets/img/wallet-pic-intro-sm.svg" class="w-full block lg:hidden" alt=""> -->
            </div>
            <div class="wallet-catalogue flex lg:w-4/5 flex-col lg:gap-x-24 lg:flex-row-reverse w-full h-full mt-28 text-left p-5 items-center">
                <div class="details w-full lg:w-1/2 gap-0 col-flex gap-y-4 ">
                    <p class="hero-title">Borrow and Enjoy </p>
                    <div class="flex flex-row gap-x-3 items-start">
                        <img src="../assets/img/check.svg" alt="">
                        <p class="text-sm font-4xl w-full "><span class="font-bold">Purchase instantly:</span> gLorem ipsum dolor sit amet, consectetur adipiscing elit. Non est amet non scelerisque. Quis dolor massa semper faucibus. Lectus nec nisl amet.Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="flex flex-row gap-x-3 items-start">
                        <img src="../assets/img/check.svg" alt="">
                        <p class="text-sm font-4xl w-full "><span class="font-bold">Stake Instantly:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non est amet non sceleris</p>
                    </div>
                    <div class="flex flex-row gap-x-3 items-start">
                        <img src="../assets/img/check.svg" alt="">
                        <p class="text-sm font-4xl w-full "><span class="font-bold">Swap instantly:</span> gLorem ipsum dolor sit amet, consectetur adipiscing elit. Non est amet non scelerisque. Quis dolor massa semper faucibus. Lectus nec nisl amet.Lorem ipsum dolor sit amet</p>
                    </div>

                    <div class="row-flex gap-x-2 items-center cursor-pointer">
                        <p class="" style="border-bottom: 1px solid  #D9DDEE; color: #FFD107;">Get Started</p>
                        <svg  class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                    
                </div>
                <img src="../assets/img/borrow-crypto.svg" class="w-1/2 hidden lg:block " alt="">
                <!-- <img src="../assets/img/wallet-pic-intro-sm.svg" class="w-full block lg:hidden" alt=""> -->
            </div>
            <div class="wallet-catalogue flex lg:w-4/5 flex-col lg:gap-x-24 lg:flex-row w-full h-full mt-28 text-left p-5 items-center">
                <div class="details w-full lg:w-1/2 gap-0 col-flex gap-y-4 ">
                    <p class="hero-title">Send and Receive Funds </p>
                    <div class="flex flex-row gap-x-3 items-start">
                        <img src="../assets/img/check.svg" alt="">
                        <p class="text-sm font-4xl w-full "><span class="font-bold">Purchase instantly:</span> gLorem ipsum dolor sit amet, consectetur adipiscing elit. Non est amet non scelerisque. Quis dolor massa semper faucibus. Lectus nec nisl amet.Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="flex flex-row gap-x-3 items-start">
                        <img src="../assets/img/check.svg" alt="">
                        <p class="text-sm font-4xl w-full "><span class="font-bold">Stake Instantly:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non est amet non sceleris</p>
                    </div>
                    <div class="flex flex-row gap-x-3 items-start">
                        <img src="../assets/img/check.svg" alt="">
                        <p class="text-sm font-4xl w-full "><span class="font-bold">Swap instantly:</span> gLorem ipsum dolor sit amet, consectetur adipiscing elit. Non est amet non scelerisque. Quis dolor massa semper faucibus. Lectus nec nisl amet.Lorem ipsum dolor sit amet</p>
                    </div>

                    <div class="row-flex gap-x-2 items-center cursor-pointer">
                        <p class="" style="border-bottom: 1px solid  #D9DDEE; color: #FFD107;">Get Started</p>
                        <svg  class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                    
                </div>
                <img src="../assets/img/send-bitcoin.svg" class="w-1/2 hidden lg:block " alt="">
                <!-- <img src="../assets/img/wallet-pic-intro-sm.svg" class="w-full block lg:hidden" alt=""> -->
            </div>


        </div>

        <div class="footer bg-black flex flex-col items-center w-full h-full mt-5 text-white py-8 gap-y-8">
            <h1 class="text-3xl lg:text-4xl font-black">Questions asked frequently</h1>
            <div class="faqs w-4/5 flex flex-col text-left">
                <app-accordion class="mb-4">
                    <template v-slot:title>
                        <span class="font-semibold text-lg accd-title">What is Avenixx?</span>
                    </template>
                    <template v-slot:content>
                        <p> Avenixx is a simple and safest platform to buy, sell, manage and borrow crypto. Get ready to experience the best from crypto with Avenixx</p>
                    </template>
                </app-accordion>

                <app-accordion class="mb-4">
                    <template v-slot:title>
                        <span class="font-semibold text-lg accd-title">Why should i sign up to Avenixx?</span>
                    </template>
                    <template v-slot:content>
                        <p>Hello. Do you want freedom in crypto? If yes, then Avenixx is offering you freedom with your crypto. No need to wait for your assets to rise. Enjoy first </p>
                    </template>
                </app-accordion>

                <app-accordion class="mb-4">
                    <template v-slot:title>
                        <span class="font-semibold text-lg accd-title">Can i store my crypto assets on Avenixx?</span>
                    </template>
                    <template v-slot:content>
                        <p> Can i store my crypto assets on Avenixx?</p>
                    </template>
                </app-accordion>

                <app-accordion class="mb-4">
                    <template v-slot:title>
                        <span class="font-semibold text-lg accd-title">Can i collect crypto loan with no digital collateral?</span>
                    </template>
                    <template v-slot:content>
                        <p>No boss, Avenixx considers asset security as important and will require a crypto assets before giving out any loan </p>
                    </template>
                </app-accordion>

                <app-accordion class="mb-4">
                    <template v-slot:title>
                        <span class="font-semibold text-lg accd-title">Can i swap my crypto easily?</span>
                    </template>
                    <template v-slot:content>
                        <p>Yes boss, Easy swap with no hidden fees on Avenixx. We are currently building for six different swap pairs</p>
                    </template>
                </app-accordion>

                <app-accordion class="mb-4">
                    <template v-slot:title>
                        <span class="font-semibold text-lg accd-title">Can i use peer to peer in buying and selling crypto?</span>
                    </template>
                    <template v-slot:content>
                        <p>Yes boss,  P2P is available to all registered users. You need crypto freedom, we are giving you full control of your crypto process</p>
                    </template>
                </app-accordion>

                <app-accordion class="mb-4">
                    <template v-slot:title>
                        <span class="font-semibold text-lg accd-title">Do i need technical skills to use Avenixx</span>
                    </template>
                    <template v-slot:content>
                        <p>No boss,  if you’re familiar with software tools, then you’re good to go</p>
                    </template>
                </app-accordion>
            </div>
        </div>
      </div>
      <div :class="{'overlay lg:hidden w-4/5 h-full py-5 flex flex-col min-h-screen': active_nav === true, 'hidden': active_nav === false,}">
          <div class="header flex flex-col items-center w-full justify-between text-white">
            <div class="top row-flex justify-between w-full">
                <div class="logo">
                    <img src="../assets/img/logo.svg" alt="">
                </div>
                <button class="text-xl font-bold" @click="handleNav">X</button>
            </div>
            <div class="mt-16 gap-y-8 flex flex-col text-xl">
                <a href="/"><p>Home</p></a>
                <a href="/dashboard"><p>Gameplay</p></a>
                <a href="/dashboard"><p>Staking</p></a>
                <a href="#"><p>Whitepaper</p></a>
                <a href="#" class="mt-8"><button disabled class="grid-center bg-green-rabbit w-40 h-16 text-white"><p class="text-sm font-bold">Play Now</p></button></a>
            </div>
        </div>
      </div>
  </div>
</template>



<script>
import {ref, reactive} from 'vue'
import AppAccordion from "../components/reusables/AppAccordion.vue";
export default {
    components: {
        AppAccordion
    },
    setup() {
        const main = ref()
        const active_nav = ref(false)


        const handleNav = () => {
            active_nav.value = !active_nav.value;
            if(active_nav.value == true) {
                main.value.style.overflow = "hidden";
            }
            if(active_nav.value == false) {
                main.value.style.overflow = "initial";
            }
        }


        return {main, active_nav, handleNav}
    }
}
</script>

<style scoped>
    .main {
        background: #000000;
    }
    .main-info {
        background: #F7F7F7;
    }
    .hero-head {
        font-size: 65px;
        line-height: 82px;
    }
    .waiting-form {
        height: 55px;
    }
    .waiting-form input {
        background: #1C1C1C;
        border-radius: 10px;
        width: 431px;
    }
    .waiting-form button {
        background: #FFD107;
        width: 193px;
        border-radius: 10px;
    }

    .hero-title {
        font-weight: 900;
        font-size: 35px;
        line-height: 160%;
    }
    .footer {
        min-height: 800px;
    }
    .accd-title {
       color: #CFCFCF;
   }
</style>