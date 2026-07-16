<template>
    <SponsorLogos title="Sponsorid" :sponsors="sponsors" class="page-section-last" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SponsorLogos from "../components/SponsorLogos.vue";
import { Sponsor } from "../domain/models/Sponsor";

export default defineComponent({
    components: { SponsorLogos },
    data() {
        return {
            sponsors: [] as Sponsor[]
        };
    },
    mounted() {
        this.sponsors = [
            { name: "harno", image: "harno-logo.png" },
            { name: "tamsalu-kool", image: "tamsalu-kool_logo.png" },
            { name: "tapa-vald", image: "Tapa-vald.png" },
            { name: "tamsalu-kultuurimaja", image: "tamsalu-kultuurimaja_logo.jpg" },
            { name: "tapa-valla-kultuurikeskus", image: "Tapa-valla-kultuurikeskus_logo.webp" },
            { name: "tapa-valla-spordikeskus", image: "tapa-valla-spordikeskus_logo.png" },
            { name: "magaziin", image: "Magaziin_logo_varv_hor.jpg" },
            { name: "lilli-loovusklubi", image: "lilli_loovusklubi_logo.png" },
            { name: "teamsport", image: "teamsport-logo.jpg" },
            { name: "parli-pizza", image: "parlipizza_logo.JPG" },
            { name: "tamsalu-ymca", image: "Tamsalu-YMCA-logo.png" },
            { name: "hooly", image: "hooly_logo.jpeg" },
            { name: "maskeraad-ou", image: "maskeraad-oü_logo.jpg" }
        ];
    }
});
</script>