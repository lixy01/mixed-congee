<template>
  <div>
    app
  </div>
</template>
<script>
import { getCurrentInstance, defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const current = getCurrentInstance();
    current.proxy.$mc.objEach({ a: '1' }, (v, k) => {
    });
  },
});
</script>
<style></style>
