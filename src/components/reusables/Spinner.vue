<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="3%" height="auto" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg>
</template>

<script>
export default {

}
</script>

<style>
.goog-te-spinner {
  margin: 2px 0 0 2px;
  animation: goog-te-spinner-rotator 1.4s linear infinite;
  transform: translateY(-50%);
}
.goog-te-spinner-path {
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  stroke: #1C1C1C;
  transform-origin: center;
  animation: goog-te-spinner-dash 1.4s ease-in-out infinite;
}
@keyframes goog-te-spinner-rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}
@keyframes goog-te-spinner-dash {
  0% {
    stroke-dashoffset: 187;
  }
  50% {
    stroke-dashoffset: 46.75;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    transform: rotate(450deg);
  }
}
</style>