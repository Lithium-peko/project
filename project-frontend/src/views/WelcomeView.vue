<script setup>

</script>

<template>
  <div style="width: 100vw; height: 100vh; overflow: hidden; display: flex">

    <div style="flex: 1; background-color: black">
      <el-image style="width: 100%; height: 100%" fit="cover" src="src/assets/img/LoginBackground.png"/>
    </div>

    <div class="welcome-title">
      <div style="font-size: 50px; font-weight: bold">welcome</div>
    </div>

    <div class="right-card">
      <router-view v-slot="{Component}">
        <transition name="el-fade-in-linear" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </div>

  </div>
</template>

<style scoped>
.right-card {
  width: 500px;
  z-index: 1;
  background-color: white;
}

.welcome-title {
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
  text-shadow: 0 0 10px black;
}
</style>