<template>
  <div>home</div>
</template>

<script setup lang="ts">
if (import.meta.env.VITE_PWA_ENABLE === 'true') {
  const file = 'virtual:pwa-register';
  const { registerSW } = await import(/* @vite-ignore */ file);
  onMounted(() => {
    registerSW({
      immediate: true,
      onRegisteredSW(_url: string, registration: ServiceWorkerRegistration) {
        console.log('🚀 ~ onRegisteredSW ~ registration:', registration)
        console.log('🚀 ~ onRegisteredSW ~ _url:', _url)
        setInterval(() => {
          registration && registration.update()
        }, 3600000)
      }
    })
  })
}
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
