<template>
  <div
    class="m-1 min-w-min select-none inline-flex items-center justify-center box-border"
    :class="btnType"
    @click:any="handleClick"
  >
    <XzjIcon
      v-if="iconStyle.component"
      :class="iconStyle.className"
      :type="iconStyle.component"
      :size="iconStyle.size"
      :color="iconStyle.color"
    />
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from "vue";
import { getType, calStyle, handleIcon } from "./handleStyle";
import XzjIcon from "../Icon/Icon.vue";

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

interface Props {
  type?: string;
  disabled?: boolean;
  round?: boolean;
  circle?: boolean;
  plain?: boolean;
  icon?: string;
  size?: string;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "default",
  disabled: false,
  round: false,
  circle: false,
  plain: false,
  icon: "",
  size: "default",
  loading: false,
});

const slots = useSlots();

// 按钮类型
const btnType = computed(() => {
  const type = getType(props.type);
  return calStyle(type, props);
});

// 按钮点击事件
const handleClick = (e) => {
  if (props.disabled) return;
  if (props.loading) return;
  emit("click", e);
};

// 处理图标组件
const iconStyle = computed(() => {
  const type = getType(props.type);
  return handleIcon(type, props, slots);
});
</script>

<script lang="ts">
// 声明额外的选项
export default {
  name: "xzj-button",
};
</script>
