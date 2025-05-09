<script setup lang="ts">
import router from '@/routes';
import services from '@/services';
import { useAuthStore } from '@/stores/auth';
import type { AuthData } from '@/utils/types/authTypes';
import { useMutation } from '@tanstack/vue-query';
import { get } from 'lodash';
import { reactive } from 'vue';

// Stores
const authStore = useAuthStore();

const formState = reactive({
  username: '',
  password: '',
});

// Mutations
const handleLogin = useMutation({
  mutationFn: (data: AuthData) => {
    return services.auth.handleLogin(data);
  },
});

// Functions
function onSubmit() {
  const data: AuthData = {
    username: formState.username,
    password: formState.password,
  };

  handleLogin.mutate(data, {
    onError: error => {
      // An error happened!
      const message = get(error, 'data.message', 'Something went wrong');
      alert(`Login failed: ${message}`);
    },
    onSuccess: res => {
      const data = { ...get(res, 'data', {}), isAuthenticated: true };
      authStore.setAuthenticated(data);
      router.push('/');
    },
  });
}
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div>isAuthencatided: {{ authStore.userInfo.isAuthenticated ? 'yes' : 'no' }}</div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Username</label>
          <div class="mt-2">
            <input
              v-model="formState.username"
              type="text"
              name="username"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input
              v-model="formState.password"
              type="password"
              name="password"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            @click.prevent="onSubmit"
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Not a member?
        {{ ' ' }}
        <RouterLink to="/auth/register" class="font-semibold text-indigo-600 hover:text-indigo-500"
          >Register now</RouterLink
        >
      </p>
    </div>
  </div>
</template>
