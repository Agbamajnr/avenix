<template>
  <div class="main flex justify-center w-full min-h-screen" ref="main">
      <div class="body h-full flex flex-col items-center" v-if="active_nav === false" @mousewheel="hideProductModal" >
            <!-- Mobile Navigation -->
        <div :class="{'mobile-nav-active h-full absolute w-full grid-center': productModal === true, 'hidden': productModal === false}">
            <MobileNav @closeNav="hideProductModal" />
        </div>
        <div class="top bg-black w-full px-5 sm:w-4/5 flex flex-col lg:px-0 pt-5 h-full">
            <div class="header flex flex-row items-center w-full justify-between text-white">
                <div class="logo">
                    <img src="../assets/img/logo.svg" alt="">
                </div>
                <button class="mobile-nav lg:hidden block" @click="handleNav"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button>
                <div class="nav gap-x-6 lg:flex flex-row hidden">
                    <a href="#" @click="showProductModal"><p class="row-flex items-center gap-x-1">Products<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-5 transition-all duration-200 transform" :class="{'rotate-180': productModal === true,'rotate-0': !productModal, }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg></p></a>
                    <a href="#"><p>Company</p></a>
                </div>
                <img class="lg:block hidden" src="../assets/img/coming-soon.svg" alt="">
            </div>

            <div class="hero mt-28  flex flex-col gap-y-16">
                <div class="flex-col flex items-center justify-center gap-y-4 text-white text-center w-full" id="hero-top">
                    <p class="text-3xl lg:text-5xl w-full font-black text-white lg:px-8 hero-head" id="heading" style=" max-width: 1082px;">Buy, sell and manage <span style="color: #FFD107;">crypto</span> process in one app</p>
                    <p class="w-full lg:w-3/5 lg:px-9 text-grey-300 text-xl" style="color: #F7F7F7">Manage your cryptocurrency portfolio on the simplest app</p>
                    <div class="waiting-form flex w-full flex-col mt-7 h-full gap-y-5 justify-center sm:flex-row gap-x-7">
                        <input type="email" placeholder="avenix@support.com" class="h-full px-3">
                        <button class="text-black w-full">Get early access</button>
                    </div>
                </div>
                <img class="lg:block hidden hero-img" src="../assets/img/home-hero-img.svg"  alt="">
                <img class="lg:hidden block hero-img" src="../assets/img/home-hero-img-sm.svg" alt="">
            </div>
        </div>

        <div class="main-info w-full h-full flex-col flex items-center">
            <div class="wallet-catalogue flex lg:w-4/5 flex-col lg:gap-x-24 lg:flex-row w-full h-full mt-28 text-left p-5 items-center" id="sell-crypto">
                <img src="../assets/img/buy-btc-sm.svg" class="block lg:hidden mb-7 w-full" alt="">
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
                        <p class="" style="border-bottom: 1px solid  #D9DDEE; color: #FFD107;">Coming soon</p>
                        <svg  class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                    
                </div>
                <img src="../assets/img/buy-btc.svg" class="w-1/2 hidden lg:block " alt="">
                <!-- <img src="../assets/img/wallet-pic-intro-sm.svg" class="w-full block lg:hidden" alt=""> -->
            </div>
            <div class="wallet-catalogue flex lg:w-4/5 flex-col lg:gap-x-24 lg:flex-row-reverse w-full h-full mt-28 text-left p-5 items-center" id="borrow-crypto">
                <img src="../assets/img/borrow-crypto-sm.svg" class="block lg:hidden mb-7 w-full" alt="">
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
                        <p class="" style="border-bottom: 1px solid  #D9DDEE; color: #FFD107;">Coming soon</p>
                        <svg  class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                    
                </div>
                <img src="../assets/img/borrow-crypto.svg" class="w-1/2 hidden lg:block " alt="">
                <!-- <img src="../assets/img/wallet-pic-intro-sm.svg" class="w-full block lg:hidden" alt=""> -->
            </div>
            <div class="wallet-catalogue flex lg:w-4/5 flex-col lg:gap-x-24 lg:flex-row w-full h-full mt-28 text-left p-5 items-center" id="send-crypto">
                <img src="../assets/img/send-bitcoin-sm.svg" class="block lg:hidden mb-7 w-full" alt="">
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
                        <p class="" style="border-bottom: 1px solid  #D9DDEE; color: #FFD107;">Coming soon</p>
                        <svg  class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                    
                </div>
                <img src="../assets/img/send-bitcoin.svg" class="w-1/2 hidden lg:block " alt="">
                <!-- <img src="../assets/img/wallet-pic-intro-sm.svg" class="w-full block lg:hidden" alt=""> -->
            </div>

            <div class="footer bg-black flex flex-col items-center w-full h-full mt-32 text-white py-8 gap-y-8">
                <h1 class="text-3xl lg:text-4xl font-black">Questions asked frequently</h1>
                <Faq />
                <div class="socials w-full lg:w-4/5 flex  flex-col items-center justify-center text-center lg:mt-7 mt-3 gap-y-7 ">
                    <div class="info px-5 w-full col-flex gap-y-4">
                        <p class="font-bold text-white text-2xl sm:text-4xl">Join our Avenixx community</p>
                        <p class="text-smtext-lg sm: text-white">Stay in touch with the latest news and releases</p>
                    </div>
                    <div class="social-links flex flex-row gap-x-3">
                        <a href="#" class="link"><div class="bg-white h-10 w-10 sm:h-12 sm:w-12 grid-center" style="border-radius: 50%"><img src="../assets/img/socials/twitter.svg" alt=""></div></a>
                        <a href="#" class="link"><div class="bg-white h-10 w-10 sm:h-12 sm:w-12 grid-center" style="border-radius: 50%"><img src="../assets/img/socials/insta.svg" alt=""></div></a>
                        <a href="#" class="link"><div class="bg-white h-10 w-10 sm:h-12 sm:w-12 grid-center" style="border-radius: 50%"><img src="../assets/img/socials/fb.svg" alt=""></div></a>
                        <a href="#" class="link"><div class="bg-white h-10 w-10 sm:h-12 sm:w-12 grid-center" style="border-radius: 50%"><img src="../assets/img/socials/telegram.svg" alt=""></div></a>
                        <a href="#" class="link"><div class="bg-white h-10 w-10 sm:h-12 sm:w-12 grid-center" style="border-radius: 50%"><img src="../assets/img/socials/tiktok.svg" alt=""></div></a>
                    </div>
                    <hr class="w-4/5 lg:w-full mt-8">
                    <p>&copy; 2022 Avenixx. All rights reserved</p>
                </div>
                
            </div>
        </div>

        
      </div>
      <div :class="{'overlay lg:hidden w-full sm:w-4/5 px-5 h-full py-5 flex flex-col min-h-screen': active_nav === true, 'hidden': active_nav === false,}">
          <div class="header flex flex-col items-center w-full justify-between text-white">
            <div class="top row-flex justify-between w-full">
                <div class="logo">
                    <img src="../assets/img/logo.svg" alt="">
                </div>
                <button class="text-xl font-bold" @click="handleNav"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            </div>
            <div class="mt-16 gap-y-8 flex flex-col w-full items-start text-2xl">
                <a href="/"><p>Home</p></a>
                <a href="#" @click="handleDropdownMenu"><p class="flex flex-row items-center gap-x-1">Products<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-5 transition-all duration-200 transform" :class="{'rotate-180': dropdownOpen === true,'rotate-0': !dropdownOpen, }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg></p></a>
                <div class="dropdown-menu ml-10 flex flex-col gap-y-4 " v-if="dropdownOpen === true">
                    <a href="">P2P Trade</a>
                    <a href="">Crypto Loan</a>
                </div>
                <a href="/"><p>Company</p></a>
            </div>
        </div>
      </div>
  </div>
</template>



<script>
import {ref, reactive} from 'vue'
import Faq from "../components/FAQ.vue";
import MobileNav from '../components/MobileNav.vue'

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from "vue";

export default {
    components: {
        Faq,
        MobileNav,
    },
    setup() {
        gsap.registerPlugin(ScrollTrigger)

        const main = ref()
        const active_nav = ref(false)

        const productModal = ref(false)
        const dropdownOpen = ref(false)


        const handleNav = () => {
            active_nav.value = !active_nav.value;
            if(active_nav.value == true) {
                main.value.style.overflow = "hidden";
            }
            if(active_nav.value == false) {
                main.value.style.overflow = "initial";
            }
        }

        onMounted(() => {
            gsap.fromTo(
                "#hero-top",
                {
                    opacity: 0,
                    y: -150,
                },
                {
                    duration: 1.5,
                    opacity: 1,
                    y: 0,
                }
            );


            gsap.fromTo( "#sell-crypto", 
                {
                    scrollTrigger: "#sell-crypto",
                    duration: 1.5,
                    opacity: 0,
                    y: -150,
                },
                {
                    scrollTrigger: "#sell-crypto",
                    duration: 2,
                    opacity: 1,
                    y: 0,
                },
            )

            gsap.fromTo( "#borrow-crypto", 
                {
                    scrollTrigger: "#borrow-crypto",
                    duration: 2,
                    opacity: 0,
                    x: -150,
                },
                {
                    scrollTrigger: "#borrow-crypto",
                    duration: 1,
                    opacity: 1,
                    x: 0,
                },
            )

            gsap.fromTo( "#send-crypto", 
                {
                    scrollTrigger: "#send-crypto",
                    duration: 1.5,
                    opacity: 0,
                    y: 150,
                },
                {
                    scrollTrigger: "#send-crypto",
                    duration: 2,
                    opacity: 1,
                    y: 0,
                },
            )


            gsap.fromTo( ".hero-img", 
                {
                    scrollTrigger: ".hero-img",
                    duration: 1.5,
                    opacity: 0,
                    x: -150,
                },
                {
                    scrollTrigger: ".hero-img",
                    duration: 3.2,
                    opacity: 1,
                    x: 0,
                },
            )

            gsap.fromTo( ".socials", 
                {
                    scrollTrigger: ".socials",
                    duration: 1.5,
                    opacity: 0,
                    y: 150,
                },
                {
                    scrollTrigger: ".socials",
                    duration: 2.2,
                    opacity: 1,
                    y: 0,
                },
            )


        })

        

        const showProductModal = () => {
            productModal.value = !productModal.value;
        }
        const hideProductModal = () => {
            productModal.value = false;
        }

        const handleDropdownMenu = () => {
           dropdownOpen.value = !dropdownOpen.value;
        }

        window.addEventListener("scroll", hideProductModal);




        return {main, active_nav, handleNav, showProductModal, hideProductModal, productModal, dropdownOpen, handleDropdownMenu}
    }
}
</script>

<style scoped>
    hr {
        border-color: #3E3E3E;
    }
    
    .main-info {
        background: #F7F7F7;
    }
    .hero-head {
        font-size: 65px;
        line-height: 82px;
    }
    .waiting-form input {
        background: #1C1C1C;
        border-radius: 10px;
        width: 431px;
        height: 55px;
    }
    .waiting-form button {
        background: #FFD107;
        width: 193px;
        border-radius: 10px;
        height: 55px;
    }

    .hero-title {
        font-weight: 900;
        font-size: 35px;
        line-height: 160%;
    }
    .footer {
        min-height: 800px;
    }
    
   .socials {
        border-radius: 15px;
        height: 370px;
        background-color: #000000;
    }


    @media screen and (max-width: 768px) {
        .hero-title {
            font-weight: 700;
            font-size: 28px;
            line-height: 160%;
        }
        .hero-head {
            font-size: 32px;
            line-height: 40px;
        }
        .waiting-form {
            min-height: fit-content
        }
        .waiting-form input {
            width: 100%;
            height: 55px;
        }
        .waiting-form button {
            width: 100%;
            height: 55px;
        }
    }
</style>
