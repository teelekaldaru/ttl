<template>
    <Navigation />
    <router-view />
    <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';

export default defineComponent({
    components: { Navigation, Footer }
});
</script>
