<template>
    <Header />
    <About />
    <Team />
    <Sponsors />
    <Contact />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import About from './About.vue';
import Contact from './Contact.vue';
import Team from './Team.vue';
import Sponsors from './Sponsors.vue';
import Header from '../components/Header.vue';

export default defineComponent({
    components: { Header, About, Team, Sponsors, Contact }
});
</script>