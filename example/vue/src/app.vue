<template>
  <div>
    {{ name }}
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      name: '12',
    };
  },
  setup() {
    const testFunction = () => {
      console.log('滚!!!');
    };
    return {
      testFunction,
    };
  },
};
</script>
<style></style>
