<template>
    <section class="page-section section-sponsors text-center" id="sponsorid">
        <div class="container">
            <h3 class="page-section-heading text-center text-secondary">
                {{ title }}
            </h3>
            <div class="sponsor-grid">
                <template v-for="sponsor in sponsors" :key="sponsor.image">
                    <div class="sponsor-logo">
                        <img :src="getImageUrl(sponsor.image)" :alt="sponsor.name" />
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Sponsor } from '../domain/models/Sponsor';

export default defineComponent({
    props: {
        title: String,
        sponsors: {
            required: true,
            type: Array as () => Sponsor[]
        }
    },
    methods: {
        getImageUrl(image: string) {
            return new URL(`../assets/img/sponsors/${image}`, import.meta.url).href;
        }
    }
});
</script>

<style scoped>
.sponsor-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.sponsor-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 180px;
}

.sponsor-logo img {
    max-width: 100%;
    max-height: 100px;
    object-fit: contain;
}
</style>