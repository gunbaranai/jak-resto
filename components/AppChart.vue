<script setup>
    const options = ref(null);

    const props = defineProps({
        area: Object,
    });

    watchEffect(() => {
        options.value = {
            chart: {
                type: 'bar'
            },
            title: {
                text: props.area.name
            },
            xAxis: {
                categories: ['DKI Jakarta', props.area.name]
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            series: [{
                name: 'Jumlah Restoran',
                data: [4237, props.area.amount]
            }]
        }
    })
</script>

<template>
    <div>
        <highcharts :options="options" />
    </div>
</template>