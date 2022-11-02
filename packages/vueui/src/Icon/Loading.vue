<template>
  <svg
    class="mycircle"
    :width="style.width"
    :height="style.height"
    viewBox="0 0 100 100"
  >
    <path d="M 50 25 L50 0 Z" :stroke="style.color" stroke-width="4" />
    <path
      class="opacity-70"
      id="line11"
      d="M 65 35 L81 18 Z"
      :stroke="style.color"
      stroke-width="4"
    />

    <path d="M 75 50 L100 50 Z" :stroke="style.color" stroke-width="4" />
    <path
      class="opacity-70"
      id="line22"
      d="M 65 65 L81 82 Z"
      :stroke="style.color"
      stroke-width="4"
    />

    <path d="M 50 75 L50 100 Z" :stroke="style.color" stroke-width="4" />
    <path
      class="opacity-70"
      d="M 35 65 L18 82 Z"
      :stroke="style.color"
      stroke-width="4"
    />

    <path d="M 25 50 L0 50 Z" :stroke="style.color" stroke-width="4" />
    <path
      class="opacity-70"
      d="M 35 35 L17 17 Z"
      :stroke="style.color"
      stroke-width="4"
    />
  </svg>
</template>

<script lang="ts">
// 声明额外的选项
export default {
  name: "xzj-loading",
};
</script>

<script lang="ts" setup>
defineProps({
  style: {
    type: Object,
    default: () => ({
      width: "16px",
      height: "16px",
      color: "#000",
    }),
  },
});
</script>

<style>
.mycircle {
  animation: move linear 2s infinite;
}

@keyframes move {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
