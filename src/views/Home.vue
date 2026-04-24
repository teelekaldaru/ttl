<template>
    <Header />
    <About />
    <Team />
    <Contact />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import About from './About.vue';
import Contact from './Contact.vue';
import Team from './Team.vue';
import Header from '../components/Header.vue';

export default defineComponent({
    components: { Header, About, Team, Contact }
});
</script>