<template>
  <component :is="componentName" :style="customStyle" />
</template>

<script lang="ts" setup>
import * as OUTLINE from "@heroicons/vue/24/outline/esm/index.js";
import * as SOLID from "@heroicons/vue/24/solid/esm/index.js";
import Loading from "./Loading.vue";
import { computed } from "vue";

interface Props {
  type: string;
  color?: string;
  size?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  color: "#000",
  size: 16,
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

<script lang="ts">
// 声明额外的选项
export default {
  name: "xzj-icon",
};
</script>
