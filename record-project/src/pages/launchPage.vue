<template>
  <div class="page-wrapper launch-page">
    <p>start</p>
  </div>
</template>

<script>
export default {
  name: "LaunchPage",
};
</script>

<style lang="scss" scoped>
.launch-page {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: palevioletred;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    font-size: 40px;
  }
}
</style>
