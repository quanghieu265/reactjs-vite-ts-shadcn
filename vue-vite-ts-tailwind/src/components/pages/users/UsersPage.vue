<script setup lang="ts">
import services from '@/services';
import { useQuery } from '@tanstack/vue-query';
import { reactive, watch } from 'vue';

const page = reactive({
  page: 0,
  size: 10,
});

// Queries
const { data: userData, isError } = useQuery({
  queryKey: ['users', page],
  queryFn: async () => {
    const res = await services.product.getListUser({
      page: page.size,
      size: page.page,
    });
    return res?.data;
  },
  retry: 1,
});

watch(isError, () => {
  if (isError) {
    alert('Something went wrong');
  }
});
</script>

<template>
  <div v-for="user in userData" :key="user.id">
    {{ user.username }}
  </div>
</template>
