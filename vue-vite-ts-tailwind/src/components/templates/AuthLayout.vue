<script setup lang="ts">
import router from '@/routes';
import { useAuthStore } from '@/stores/auth';
import { watchEffect } from 'vue';

// Store
const authStore = useAuthStore();

// State

watchEffect(() => {
  if (authStore.userInfo.isAuthenticated) {
    router.push('/');
  }
});
</script>

<template>
  <div>
    <p class="text-primary text-2xl">Auth layout</p>
    <router-view />
  </div>
</template>
