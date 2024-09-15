<script setup>
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
      <AppMap @area="handleArea" />
    </div>
    
    <div v-show="activeArea.name">
      <AppChart :area="activeArea" />
    </div>
  </div>
</template>
