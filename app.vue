<script setup>
  const dataFetch = await $fetch('https://webapi.bps.go.id/v1/api/list/model/data/lang/ind/domain/3100/var/1207/key/11e3953affcb8e0a7a1d0cb996343eb2')
    
  const activeArea = ref({
    name: 'DKI Jakarta',
    amount: 4237,
  });

  const handleArea = (name, amount) => {
    activeArea.value = {
      name, amount
    }
  }
</script>

<template>
  <div class="grid grid-cols-2">
    <div>
      <AppMap @area="handleArea" :data="dataFetch" />
    </div>
    
    <div v-show="activeArea.name">
      <AppChart :area="activeArea" />
    </div>
  </div>
</template>
