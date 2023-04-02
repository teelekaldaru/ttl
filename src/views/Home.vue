<template>
    <About />
    <Team />
    <Contact />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import About from "./About.vue";
import Contact from "./Contact.vue";
import Team from "./Team.vue";

@Options({
    components: { About, Team, Contact }
})
export default class Home extends Vue {}
</script>