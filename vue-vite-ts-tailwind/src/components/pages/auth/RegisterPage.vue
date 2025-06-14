<script setup lang="ts">
import router from '@/routes';
import services from '@/services';
import { useMutation } from '@tanstack/vue-query';
import { reactive } from 'vue';
import { get } from 'lodash';
import type { AuthData } from '@/utils/types/authTypes';
// State
const formState = reactive({
  email: '',
  username: '',
  password: '',
});

// Mutations
const handleRegister = useMutation({
  mutationFn: (data: AuthData) => {
    return services.auth.handleRegister(data);
  },
});

// Functions

function onSubmit() {
  const data: AuthData = {
    email: formState.email,
    username: formState.username,
    password: formState.password,
  };
  handleRegister.mutate(data, {
    onError: error => {
      const message = get(error, 'data.message', 'Something went wrong');
      // An error happened!
      alert(`Register failed: ${message}`);
    },
    onSuccess: () => {
      alert('Register success');
      router.push('/auth/login');
    },
  });
}
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
          <div class="mt-2">
            <input
              v-model="formState.email"
              type="email"
              name="email"
              id="email"
              required="true"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Username </label>
          <div class="mt-2">
            <input
              v-model="formState.username"
              type="text"
              name="username"
              id="username"
              required="true"
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
              id="password"
              required="true"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            @keydown.enter="onSubmit"
            @click.prevent="onSubmit"
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Register
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Already a member?
        {{ ' ' }}
        <RouterLink to="/auth/login" class="font-semibold text-indigo-600 hover:text-indigo-500"
          >Login now</RouterLink
        >
      </p>
    </div>
  </div>
</template>
