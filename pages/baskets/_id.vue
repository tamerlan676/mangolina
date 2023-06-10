<template lang="pug">
.inner
    Header
    Product(:product="getItem")
    Reviews
    Contacts
    Footer
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
            }
        },
        async fetch ({ store }) {
          await store.dispatch('getBaskets')
        },
        computed: {
            getItem() {
                return this.$store.state.baskets.filter(item => item.id === +this.$route.params.id)[0]
            }
      },
    }
</script>
