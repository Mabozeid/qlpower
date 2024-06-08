<template>
    <div class="bg-white py-16 sm:py-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-600">{{ $t(stat.name) }}</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-yellow-500 sm:text-5xl">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </template>
  
  <script setup>
  const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44k' },
    { id: 2, name: 'Assets under holding', value: '119K' },
    { id: 3, name: 'New users annually', value: '46,000' },
    { id: 4, name: 'Projects accomplished', value: '225,000' },
  ]
  </script>