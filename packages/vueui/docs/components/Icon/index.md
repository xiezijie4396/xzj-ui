# Icon 图标
提供了一套常用的图标集合。

## 使用实例
<div>
  <xzj-icon type="PencilSquareIcon" />
  <xzj-icon type="ShareIcon" />
  <xzj-icon type="EnvelopeIcon" />
</div>

::: details 查看代码
```html
<xzj-icon type="PencilSquareIcon" />
<xzj-icon type="ShareIcon" />
<xzj-icon type="EnvelopeIcon" />
```
:::

## 图标集合
<style>
  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }
  .flex-div {
    flex-basis: 130px;
    width: 130px;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    box-sizing: border-box;
    border: 1px solid #eee;
    cursor: pointer;
  }
  .flex-div:hover {
    background: #eee;
  }
  .flex-text {
    width: 100%;
    padding: 4px;
    text-align: center;
    word-break: break-all;
    font-size: 12px;
  }
</style>
<div class="flex-container">
  <div
    class="flex-div"
    title="点击复制代码"
    v-for="(item, idx) in list"
    :key="idx"
    @click="copyCode(item)">
    <xzj-icon :type="item" size="28" />
    <div class="flex-text">{{ item }}</div>
  </div>
</div>

<script>
  import * as OUTLINE from '@heroicons/vue/24/outline'
  import * as SOLID from '@heroicons/vue/24/solid'
  import { copy } from '@xiezijie/shared'

  export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      const list = ['loading']
      Object.keys(OUTLINE).forEach(type => {
        list.push(type)
      })
      Object.keys(SOLID).forEach(type => {
        list.push(type + '-1')
      })
      this.list = list
    },
    methods: {
      copyCode(content) {
        copy(`<xzj-icon type="${content}" size="28" />`, function() {
          alert('复制成功')
        })
      }
    }
  }
</script>

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
      <td>type</td>
      <td>类型</td>
      <td>string</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>color</td>
      <td>图标颜色</td>
      <td>string</td>
      <td>-</td>
      <td>#000</td>
    </tr>
    <tr>
      <td>size</td>
      <td>图标大小</td>
      <td>string | number</td>
      <td>-</td>
      <td>16</td>
    </tr>
  </tbody>
</table>