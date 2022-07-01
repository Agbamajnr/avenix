<template>
  <div class="main bg-black w-screen relative min-h-screen min-w-screen">
    <!--  Header -->
    <div
      class="
        header
        w-full
        bg-secondary
        h-16
        flex flex-row
        justify-center
        items-center
      "
    >
      <div
        class="
          main-header
          w-full
          sm:w-4/5
          flex flex-row
          items-center
          justify-between
          px-4
          sm:px-0
        "
      >
        <img src="../../assets/img/logo.png" alt="" />
        <img src="../../assets/img/memoji.svg" alt="" />
      </div>
    </div>

    <!-- Main dashboard grid -->
    <div
      class="
        body
        w-full
        h-full
        flex flex-row
        justify-center
        items-center
        mt-16
        py-5
      "
    >
      <div
        class="w-full sm:w-4/5 flex flex-col items-center gap-y-4 px-4 sm:px-0"
      >
        <!-- top -->
        <div
          class="
            top-main-info
            info
            flex flex-col
            sm:flex-row
            w-full
            items-center
            gap-y-4
            sm:gap-x-4
          "
        >
          <!-- Avenix wallet balance -->
          <div
            class="
              avenix-balance
              info-child
              p-5
              w-full
              col-flex
              justify-between
              h-full
            "
          >
            <p class="text-subtitle">Avenix wallet Balance</p>
            <p
              class="
                amount
                text-white
                font-black
                text-3xl
                row-flex
                items-center
              "
            >
              0.00
              <img
                class="ml-4"
                src="../../assets/img/dashboard/eye-hidden.svg"
                alt=""
              />
            </p>
            <!-- Referral code -->
            <div
              class="
                rfCode
                w-full
                flex-row flex
                items-center
                justify-between
                gap-x-3
              "
            >
              <div
                class="
                  code
                  h-12
                  w-full
                  rounded-3xl
                  bg-black
                  flex flex-row
                  items-center
                  justify-between
                  gap-x-1
                  px-2
                "
              >
                <!-- code -->
                <div class="delta flex flex-row items-center gap-x-1">
                  <span class="text-secondary">AD.</span>
                  <p class="uppercase text-white font-extralight">
                    an494jbgkr4
                  </p>
                </div>
                <div class="h-9 w-9 bg-secondary rounded-full grid-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div
                class="h-12 w-16 bg-black grid-center"
                style="border-radius: 50%"
              >
                <div class="bg-secondary h-9 w-11 rounded-full grid-center">
                  <svg
                    class="w-6 h-6"
                    fill="white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Top total wallet balance  -->

          <div
            class="
              total-balance
              info-child
              p-5
              w-full
              col-flex
              justify-between
              h-full
            "
          >
            <div class="top row-flex justify-between items-center">
              <p class="text-subtitle">Total wallet Balance</p>
              <p class="text-subtitle">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </p>
            </div>
            <p
              class="
                amount
                text-white
                font-black
                text-3xl
                row-flex
                items-center
              "
            >
              $0.00
            </p>

            <p class="text-subtitle">
              Here is an overview of your current total wallet balance
            </p>
          </div>

          <!-- Loan wallet balance -->
          <div
            class="
              loan-balance
              info-child
              p-5
              w-full
              col-flex
              justify-between
              h-full
            "
          >
            <div class="top row-flex justify-between items-center">
              <p class="text-subtitle">Loan wallet Balance</p>
              <p class="text-subtitle">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </p>
            </div>
            <p
              class="
                amount
                text-white
                font-black
                text-3xl
                row-flex
                items-center
              "
            >
              $0.00
            </p>

            <p class="text-subtitle">
              Here is an overview of your current loan wallet balance
            </p>
          </div>
        </div>

        <!-- crypto wallet -->
        <div
          class="
            crypto
            flex flex-col
            sm:flex-row
            items-center
            sm:gap-x-4
            h-full
            w-full
          "
        >
          <!-- Navigation bar -->
          <div class="nav bg-secondary w-full sm:flex hidden sm:w-2/6 p-5">
            <div class="item flex flex-row gap-x-3">
              <div class="logo">H</div>
              <div class="item-name">Home</div>
            </div>
          </div>

          <div
            class="
              wallets
              w-full
              sm:w-4/6
              flex
              gap-y-4
              sm:gap-x-4
              flex-col
              sm:flex-row
              items-center
            "
          >
            <div class="info flex flex-col w-full items-center gap-y-4">
              <div class="btc-wallet info-child w-full"></div>
              <div class="eth-wallet info-child w-full"></div>
            </div>
            <div class="info flex flex-col w-full items-center gap-y-4">
              <div class="tron-wallet info-child w-full"></div>
              <div class="xrp-wallet info-child w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
/* main styles */
/* body grid styles */
.info .info-child {
  background-color: #1c1c1c;
  height: 190px;
  border-radius: 10px;
}

.nav {
  background-color: #1c1c1c;
  border-radius: 10px;
  min-height: 400px;
}

/* utilities */
.text-subtitle {
  color: #9f9f9f;
}
.bg-btn-dark {
  background: rgb(14, 13, 13);
}

.bg-secondary {
  background-color: #1c1c1c;
}
.text-secondary {
  color: #1c1c1c;
}
.bg-item-nav {
  background: #282828;
}
</style>