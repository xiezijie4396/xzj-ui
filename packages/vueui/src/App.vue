<template>
  <XzjButton>Default</XzjButton>
  <XzjButton type="primary" @click="test">Primary</XzjButton>
  <XzjButton type="success" @click="test">Success</XzjButton>
  <XzjButton type="info">Info</XzjButton>
  <XzjButton type="warning">Warning</XzjButton>
  <XzjButton type="danger">Danger</XzjButton>

  <div></div>
  <XzjButton plain>Default</XzjButton>
  <XzjButton type="primary" plain>Primary</XzjButton>
  <XzjButton type="success" plain>Success</XzjButton>
  <XzjButton type="info" plain>Info</XzjButton>
  <XzjButton type="warning" plain>Warning</XzjButton>
  <XzjButton type="danger" plain>Danger</XzjButton>
  <div></div>

  <XzjButton type="primary">
    <XzjIcon type="PencilIcon" />
  </XzjButton>

  <XzjButton type="primary" icon="PencilIcon"></XzjButton>
  <XzjButton type="success" icon="PencilIcon">哈哈哈</XzjButton>
  <XzjButton type="success" icon="PencilIcon" plain></XzjButton>
</template>

<script lang="ts" setup>
import XzjButton from "./Button/Button.vue";
import XzjIcon from "./Icon/Icon.vue";
const test = (e) => {
  console.log(e);
};
</script>
