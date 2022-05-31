<template>
  <div class="faqs w-full px-5 lg:w-4/5 flex flex-col text-left">
    <app-accordion class="mb-4">
        <template v-slot:title>
            <span class="font-semibold text-lg accd-title ">What is Avenixx?</span>
        </template>
        <template v-slot:content>
            <p> Avenixx is a simple and safest platform to buy, sell, manage and borrow crypto. Get ready to experience the best from crypto with Avenixx</p>
        </template>
    </app-accordion>

    <app-accordion class="mb-4">
        <template v-slot:title>
            <span class="font-semibold text-lg accd-title w-4/5">Why should i sign up to Avenixx?</span>
        </template>
        <template v-slot:content>
            <p>Hello. Do you want freedom in crypto? If yes, then Avenixx is offering you freedom with your crypto. No need to wait for your assets to rise. Enjoy first </p>
        </template>
    </app-accordion>

    <app-accordion class="mb-4">
        <template v-slot:title>
            <span class="font-semibold text-lg accd-title w-4/5">Can i store my crypto assets on Avenixx?</span>
        </template>
        <template v-slot:content>
            <p> Can i store my crypto assets on Avenixx?</p>
        </template>
    </app-accordion>

    <app-accordion class="mb-4">
        <template v-slot:title>
            <span class="font-semibold text-lg accd-title w-4/5">Can i collect crypto loan with no digital collateral?</span>
        </template>
        <template v-slot:content>
            <p>No boss, Avenixx considers asset security as important and will require a crypto assets before giving out any loan </p>
        </template>
    </app-accordion>

    <app-accordion class="mb-4">
        <template v-slot:title>
            <span class="font-semibold text-lg accd-title w-4/5">Can i swap my crypto easily?</span>
        </template>
        <template v-slot:content>
            <p>Yes boss, Easy swap with no hidden fees on Avenixx. We are currently building for six different swap pairs</p>
        </template>
    </app-accordion>

    <app-accordion class="mb-4">
        <template v-slot:title>
            <span class="font-semibold text-lg accd-title w-4/5">Can i use peer to peer in buying and selling crypto?</span>
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
</template>

<script>
import AppAccordion from "../components/reusables/AppAccordion.vue";
export default {
    components: {
        AppAccordion
    },
}
</script>

<style scoped>
    .accd-title {
       color: #CFCFCF;
    }

    @media screen and (max-width: 768px) {
        .accd-title {
            font-weight: 400;
            font-size: 16px;
            line-height: 170%;
            /* or 27px */


            color: #F7F7F7;
        }
    }
</style>