# Button 按钮
常见的操作按钮

## 基础用法
使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

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

::: details 查看代码
```html
<xzj-button>Default</xzj-button>
<xzj-button type="primary">Primary</xzj-button>
<xzj-button type="success">Success</xzj-button>
<xzj-button type="info">Info</xzj-button>
<xzj-button type="warning">Warning</xzj-button>
<xzj-button type="danger">Danger</xzj-button>

<xzj-button plain>Plain</xzj-button>
<xzj-button type="primary" plain>Primary</xzj-button>
<xzj-button type="success" plain>Success</xzj-button>
<xzj-button type="info" plain>Info</xzj-button>
<xzj-button type="warning" plain>Warning</xzj-button>
<xzj-button type="danger" plain>Danger</xzj-button>

<xzj-button round>Round</xzj-button>
<xzj-button type="primary" round>Primary</xzj-button>
<xzj-button type="success" round>Success</xzj-button>
<xzj-button type="info" round>Info</xzj-button>
<xzj-button type="warning" round>Warning</xzj-button>
<xzj-button type="danger" round>Danger</xzj-button>

<xzj-button icon="MagnifyingGlassIcon" circle />
<xzj-button type="primary" icon="PencilSquareIcon" circle />
<xzj-button type="success" icon="CheckIcon" circle />
<xzj-button type="info" icon="EnvelopeIcon" circle />
<xzj-button type="warning" icon="StarIcon" circle />
<xzj-button type="danger" icon="PowerIcon" circle />
```
:::

## 禁用状态
你可以使用 `disabled` 属性来定义按钮是否被禁用。
使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

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

::: details 查看代码
```html
<xzj-button disabled>Default</xzj-button>
<xzj-button type="primary" disabled>Primary</xzj-button>
<xzj-button type="success" disabled>Success</xzj-button>
<xzj-button type="info" disabled>Info</xzj-button>
<xzj-button type="warning" disabled>Warning</xzj-button>
<xzj-button type="danger" disabled>Danger</xzj-button>

<xzj-button plain disabled>Plain</xzj-button>
<xzj-button type="primary" plain disabled>Primary</xzj-button>
<xzj-button type="success" plain disabled>Success</xzj-button>
<xzj-button type="info" plain disabled>Info</xzj-button>
<xzj-button type="warning" plain disabled>Warning</xzj-button>
<xzj-button type="danger" plain disabled>Danger</xzj-button>
```
:::

## 文字按钮
没有边框和背景色的按钮。

<div>
  <xzj-button type="text">文字按钮</xzj-button>
  <xzj-button type="text" disabled>文字按钮</xzj-button>
</div>

## 图标按钮
使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 icon 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。 

<div>
  <xzj-button type="primary" icon="PencilSquareIcon" />
  <xzj-button type="primary" icon="ShareIcon" />
  <xzj-button type="primary" icon="EnvelopeIcon" />
  <xzj-button type="primary" icon="MagnifyingGlassIcon">Search</xzj-button>
</div>

::: details 查看代码
```html
<xzj-button type="primary" icon="PencilSquareIcon" />
<xzj-button type="primary" icon="ShareIcon" />
<xzj-button type="primary" icon="EnvelopeIcon" />
<xzj-button type="primary" icon="MagnifyingGlassIcon">Search</xzj-button>
```
:::

## 加载中
点击按钮后进行数据加载操作，在按钮上显示加载状态。

<div>
  <xzj-button type="primary" plain :loading="true">加载中</xzj-button>
  <xzj-button type="primary" :loading="true">加载中</xzj-button>
</div>

::: details 查看代码
```html
<xzj-button type="primary" plain :loading="true">加载中</xzj-button>
<xzj-button type="primary" :loading="true">加载中</xzj-button>
```
:::

## 属性
<table>
  <thead>
    <th>参数</th>
    <th>说明</th>
    <th>类型</th>
    <th>可选值</th>
    <th>默认值</th>
  </thead>
  <tbody>
    <tr>
      <td>size</td>
      <td>尺寸</td>
      <td>string</td>
      <td>large / default / mini</td>
      <td>default</td>
    </tr>
    <tr>
      <td>type</td>
      <td>类型</td>
      <td>string</td>
      <td>primary / success / warning / danger / info / text</td>
      <td>-</td>
    </tr>
    <tr>
      <td>plain</td>
      <td>是否朴素按钮</td>
      <td>boolean</td>
      <td>-</td>
      <td>false</td>
    </tr>
    <tr>
      <td>round</td>
      <td>是否圆角按钮</td>
      <td>boolean</td>
      <td>-</td>
      <td>false</td>
    </tr>
    <tr>
      <td>circle</td>
      <td>是否圆形按钮</td>
      <td>boolean</td>
      <td>-</td>
      <td>false</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>是否加载中状态</td>
      <td>boolean</td>
      <td>-</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用状态</td>
      <td>boolean</td>
      <td>-</td>
      <td>false</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>图标类名</td>
      <td>string</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>