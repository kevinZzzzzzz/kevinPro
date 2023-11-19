<template>
  <div class="btnMain">
    <div class="item">
      <kvButton>
        默认按钮
      </kvButton>
      <kvButton type="primary">
        主要按钮
      </kvButton>
      <kvButton type="success">
        成功按钮
      </kvButton>
      <kvButton type="info">
        信息按钮
      </kvButton>
      <kvButton type="warning">
        警告按钮
      </kvButton>
      <kvButton type="danger">
        危险按钮
      </kvButton>
    </div>
    
    <div class="item">
      <kvButton plain>
        朴素按钮
      </kvButton>
      <kvButton type="primary" plain>
        主要按钮
      </kvButton>
      <kvButton type="success" plain>
        成功按钮
      </kvButton>
      <kvButton type="info" plain>
        信息按钮
      </kvButton>
      <kvButton type="warning" plain>
        警告按钮
      </kvButton>
      <kvButton type="danger" plain>
        危险按钮
      </kvButton>
    </div>
    
    <div class="item">
      <kvButton round>
        圆角按钮
      </kvButton>
      <kvButton type="primary" round>
        主要按钮
      </kvButton>
      <kvButton type="success" round>
        成功按钮
      </kvButton>
      <kvButton type="info" round>
        信息按钮
      </kvButton>
      <kvButton type="warning" round>
        警告按钮
      </kvButton>
      <kvButton type="danger" round>
        危险按钮
      </kvButton>
    </div>
    
    <div class="item">
      <kvButton circle icon="icon-search" />
      <kvButton type="primary" circle icon="icon-edit" />
      <kvButton type="success" circle icon="icon-check" />
      <kvButton type="info" circle icon="icon-message" />
      <kvButton type="warning" circle icon="icon-star-off" />
      <kvButton type="danger" circle icon="icon-delete" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TestButton'
}
</script>
<script lang='ts' setup>
import { ref } from 'vue'
</script>
<style scoped lang="less">
.btnMain {
  width: auto;
  padding: 10px;
  margin: 10px;
  margin-top: 0px;
  border: 1px solid #fff;
  display: grid;
  // grid-template-columns: repeat(1, 100%);
  grid-gap: 10px;
}
</style>
