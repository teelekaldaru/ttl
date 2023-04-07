<template>
    <Navigation />
    <router-view />
    <Footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';

@Options({
    components: { Navigation, Footer }
})
export default class App extends Vue {}
</script>
