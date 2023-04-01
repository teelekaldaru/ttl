<template>
    <Navigation />
    <Header />
    <Footer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navigation from "@/components/Navigation.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Options({
    components: { Navigation, Header, Footer }
})
export default class Home extends Vue {}
</script>