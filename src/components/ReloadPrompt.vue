<script setup lang="ts">
import { ref, onMounted } from 'vue';

const offlineReady = ref(false);
const needRefresh = ref(false);
let updateServiceWorker: (() => void) | null = null;

const close = () => {
  offlineReady.value = false;
  needRefresh.value = false;
};

if (import.meta.env.VITE_PWA_ENABLE === 'true') {
  onMounted(async () => {
    const file = 'virtual:pwa-register';
    const { useRegisterSW } = await import(/* @vite-ignore */ file);
    const { offlineReady: ready, needRefresh: refresh, updateServiceWorker: update } = useRegisterSW();

    // 绑定响应式状态
    offlineReady.value = ready.value;
    needRefresh.value = refresh.value;
    updateServiceWorker = update;
  });
}
</script>

<template>
  <div v-if="offlineReady || needRefresh" class="pwa-toast" role="alert">
    <div class="message">
      <span v-if="offlineReady">App ready to work offline</span>
      <span v-else>New content available, click on reload button to update.</span>
    </div>
    <button v-if="needRefresh" @click="updateServiceWorker && updateServiceWorker()">Reload</button>
    <button @click="close">Close</button>
  </div>
</template>

<style>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: white;
}
.pwa-toast .message {
  margin-bottom: 8px;
}
.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}
</style>