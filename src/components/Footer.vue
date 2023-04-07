<template>
    <div class="copyright bg-dark py-4 text-center text-white">
        <div class="container">
            <small>
                Copyright &copy; TAMSALU TANTSULAAGER
                {{ new Date().getFullYear() }}
            </small>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    components: {}
})
export default class Footer extends Vue {}
</script>