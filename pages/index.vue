<template lang="pug">
.main 
  Header
  Hero(@show-popup="openPopup")
  AboutUs#about
  Catalog#catalog(:baskets="baskets"  @show-popup="openPopup")
  Constructor#constructor
  Questions#faq
  Reviews#review
  Contacts#contacts
  Footer
  Popup(:activePopup="activePopup" @show-popup="openPopup" :basket="basket")
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data(){
    return {
      activePopup: false,
      notSend: true,
      name: 'das',
      sended: 'false',
      basket: { "name": "Корзина «Дружеский презент»" },
      number: 'asd'
    }
  },
  async fetch ({ store }) {
      await store.dispatch('getBaskets')
  },
  computed: {
    baskets() {
      return this.$store.state.baskets
    },
  },
  methods: {
    openPopup (item) {
      this.activePopup = !this.activePopup
      this.basket = item
    },
    // submit () {
    //   const order = {
    //     name: this.name,
    //     phone: this.phone
    //   }
    //   const message = `<strong>${order.name}</strong> заказал(а) звонок \n Тел: <strong><a href="tel:+${order.phone}">${order.phone}</a></strong>`
    //   axios.post('https://api.telegram.org/bot5496395304:AAGmLMNyhdOGpnjbue4QjiCZI9ZOfsFsjGg/sendMessage', {
    //     chat_id: '-1001491584824',
    //     parse_mode: 'html',
    //     text: message
    //   }).then(this.notSend = false, this.sended = true)
    // }
  },
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "У нас вы можете купить фруктовые корзины в Москве с бесплатной доставкой. Широкий выбор свежих и качественных фруктов.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "фруктовые корзины, купить, Москва, доставка, свежие, качественные, фрукты",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Купить фруктовую корзину с доставкой по Москве - Mangolina",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "У нас вы можете купить фруктовые корзины в Москве с бесплатной доставкой. Широкий выбор свежих и качественных фруктов.",
        },
      ],
      // Заголовок страницы
      title: "Фруктовые корзины с доставкой по Москве - Mangolina",
    };
  },
})
</script>
