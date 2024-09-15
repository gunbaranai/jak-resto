<script setup lang="ts">
    const props = defineProps({
        data: Object,
    });

    const zoom = ref(9);
    const coords = [
        { name: "Kep Seribu", coord: {
            lat: -5.656435,
            lng: 106.57341
        }},
        { name: "Jakarta Selatan", coord: {
            lat: -6.25,
            lng: 106.8
        }},
        { name: "Jakarta Timur", coord: {
            lat: -6.21,
            lng: 106.94
        }},
        { name: "Jakarta Pusat", coord: {
            lat: -6.17,
            lng: 106.82
        }},
        { name: "Jakarta Barat", coord: {
            lat: -6.185,
            lng: 106.731
        }},
        { name: "Jakarta Utara", coord: {
            lat: -6.12,
            lng: 106.9
        }},
    ]

    const emit = defineEmits(['area']);
    const handleclick = (areaName: string) => {
        let index = coords.findIndex(x => x.name === areaName);
        emit('area', areaName, Object.values(props.data.datacontent)[index]);
    };
</script>

<template>
    <LMap
        ref="map"
        :zoom="zoom"
        :center="[-6.1750, 106.8266]"
        :use-global-leaflet="false"
    >
        <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
            layer-type="base"
            name="OpenStreetMap"
        />
        <LMarker v-for="area in coords" :lat-lng="[area.coord.lat, area.coord.lng]" v-on:click="handleclick(area.name)" />
    </LMap>
</template>