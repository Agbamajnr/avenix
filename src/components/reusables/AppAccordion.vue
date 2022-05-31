<template>
  <div class="text-white accd flex flex-col  w-full gap-y-4 px-4 lg:px-10 py-4">
    <button
      @click="toggleAccordion()"
      class="flex flex flex-row w-full items-center text-left justify-between "
      :aria-expanded="isOpen"
      :aria-controls="`collapse${_uid}`"
    >
      <slot name="title" class="w-4/5"/>
      <svg
        class="w-4 transition-all duration-200 transform "
        :class="{
          'rotate-180': isOpen,
          'rotate-0': !isOpen,

        }"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 10"
        aria-hidden="true"
      >
        <path
          d="M15 1.2l-7 7-7-7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>


    <hr v-if="isOpen" class="w-full text-gray-500">
    <div v-show="isOpen" :id="`collapse${_uid}`" class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
    .accd {
        background: rgba(26, 25, 25, 0.85);
        border-radius: 5px;
        min-height: 62px;
        transition: all .5s ease-in-out;

    }
    .content {
      transition: all .5s ease-in-out;
    }
   hr {
       border-color: #3E3E3E;
   }
   .accd-title {
       color: #CFCFCF;
   }
</style>