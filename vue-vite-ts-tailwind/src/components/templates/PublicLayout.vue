<script lang="ts" setup>
import router from '@/routes';
import { useAuthStore } from '@/stores/auth';
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const authStore = useAuthStore();

watchEffect(() => {
  if (!authStore.userInfo.isAuthenticated) {
    router.push('/auth/login');
  }
});
</script>

<template>
  <div>
    <h1 class="mb-4 text-xl font-bold">Welcome to home page</h1>
    <p><strong>Current route path:</strong> {{ route.fullPath }}</p>
    <div class="flex gap-4">
      <RouterLink class="btn-primary" to="/users">Go to Users</RouterLink>
      <RouterLink class="btn-primary" to="/auth/login">Go to Login</RouterLink>
      <RouterLink class="btn-primary" to="/auth/register">Go to Register</RouterLink>
    </div>

    <main>
      <RouterView />
    </main>
  </div>
</template>
