<template>
  <div>
    <xzj-button>Default</xzj-button>
    <xzj-button type="primary">Primary</xzj-button>
    <xzj-button type="success">Success</xzj-button>
    <xzj-button type="info">Info</xzj-button>
    <xzj-button type="warning">Warning</xzj-button>
    <xzj-button type="danger">Danger</xzj-button>
  </div>

  <div>
    <xzj-button plain>Plain</xzj-button>
    <xzj-button type="primary" plain>Primary</xzj-button>
    <xzj-button type="success" plain>Success</xzj-button>
    <xzj-button type="info" plain>Info</xzj-button>
    <xzj-button type="warning" plain>Warning</xzj-button>
    <xzj-button type="danger" plain>Danger</xzj-button>
  </div>

  <div>
    <xzj-button round>Round</xzj-button>
    <xzj-button type="primary" round>Primary</xzj-button>
    <xzj-button type="success" round>Success</xzj-button>
    <xzj-button type="info" round>Info</xzj-button>
    <xzj-button type="warning" round>Warning</xzj-button>
    <xzj-button type="danger" round>Danger</xzj-button>
  </div>

  <div>
    <xzj-button icon="MagnifyingGlassIcon" circle />
    <xzj-button type="primary" icon="PencilSquareIcon" circle />
    <xzj-button type="success" icon="CheckIcon" circle />
    <xzj-button type="info" icon="EnvelopeIcon" circle />
    <xzj-button type="warning" icon="StarIcon" circle />
    <xzj-button type="danger" icon="PowerIcon" circle />
  </div>

  <div>
    <xzj-button disabled>Default</xzj-button>
    <xzj-button type="primary" disabled>Primary</xzj-button>
    <xzj-button type="success" disabled>Success</xzj-button>
    <xzj-button type="info" disabled>Info</xzj-button>
    <xzj-button type="warning" disabled>Warning</xzj-button>
    <xzj-button type="danger" disabled>Danger</xzj-button>
  </div>

  <div>
    <xzj-button plain disabled>Plain</xzj-button>
    <xzj-button type="primary" plain disabled>Primary</xzj-button>
    <xzj-button type="success" plain disabled>Success</xzj-button>
    <xzj-button type="info" plain disabled>Info</xzj-button>
    <xzj-button type="warning" plain disabled>Warning</xzj-button>
    <xzj-button type="danger" plain disabled>Danger</xzj-button>
  </div>

  <div>
    <xzj-button type="text">文字按钮</xzj-button>
    <xzj-button type="text" disabled>文字按钮</xzj-button>
  </div>


  <div>
    <xzj-button type="primary" icon="PencilSquareIcon" />
    <xzj-button type="primary" icon="ShareIcon" />
    <xzj-button type="primary" icon="EnvelopeIcon" />
    <xzj-button type="primary" icon="MagnifyingGlassIcon">Search</xzj-button>
  </div>


  <div>
    <xzj-button type="primary" plain :loading="true">加载中</xzj-button>
    <xzj-button type="primary" :loading="true">加载中</xzj-button>
  </div>

</template>

<script>

</script>