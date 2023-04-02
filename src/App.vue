<template>
    <Navigation />
    <Header />
    <router-view />
    <Footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';

@Options({
    components: { Navigation, Header, Footer }
})
export default class App extends Vue {}
</script>
