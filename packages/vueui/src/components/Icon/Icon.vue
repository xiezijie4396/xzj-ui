<template>
  <component :is="componentName" :style="customStyle" />
</template>

<script lang="ts">
// 声明额外的选项
export default {
  name: "xzj-icon",
};
</script>

<script lang="ts" setup>
import * as OUTLINE from "@heroicons/vue/24/outline";
import * as SOLID from "@heroicons/vue/24/solid";
import Loading from "./Loading.vue";
import { computed } from "vue";

const props = defineProps({
  type: { type: String, required: true },
  color: { type: String, default: "#000" },
  size: { type: [String, Number], default: 16 },
});

const componentName = computed(() => {
  const type = props.type;
  if (type === "loading") {
    return Loading;
  }
  const arr = type.split("-");
  if (arr.length > 1) {
    return SOLID[arr[0]];
  } else {
    return OUTLINE[arr[0]];
  }
});

const customStyle = computed(() => {
  return {
    color: props.color,
    width: props.size + "px",
    height: props.size + "px",
    display: "inline-block",
  };
});
</script>
