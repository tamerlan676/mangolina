<template lang="pug">
.product
    .left 
        img(src="~/assets/images/basket.jpg")
    .right
        h1 {{ product.title.rendered }}
        .price {{ product.acf.price }} ₽
        a.green-btn(@click="showPopup(product.title.rendered)") Заказать
        .sostav {{ product.acf.description }}
        .country {{ product.acf.country }}
        .benefits 
            .benefit(v-for="item in benefits")
                img(:src="item.img")
                .info(v-html="item.text") {{ item.text }}
</template>

<script>
export default {
    name: 'ProductComp',
    data() {
        return {
            benefits: [
                        {
                        img: require("~/assets/images/baskets-icons/watch.svg"),
                        text: `<span class="bold">Доставка</span>: Привезем корзину сегодня в течении 2-3 часов.`
                        },
                        {
                        img: require("~/assets/images/baskets-icons/gift.svg"),
                        text: `<span class="bold">Упаковка</span>: Мы упаковываем корзины с фруктами в прозрачную пленку и украшаем бантом из рафии ручной работы.`
                        },
                        {
                        img: require("~/assets/images/baskets-icons/quality.svg"),
                        text: `<span class="bold">Гарантия качества</span>: Мы тчательно подбираем каждый фрукт в вашу корзину. Выбираем самоее свежее и красивое.`
                        },
                        {
                        img: require("~/assets/images/baskets-icons/photo.svg"),
                        text: `<span class="bold">Фотоконтроль</span>: По Вашему запросу отправим фото заказа перед доставой по WhatsApp или Telegram.`
                        },
                        {
                        img: require("~/assets/images/baskets-icons/dialog.svg"),
                        text: `<span class="bold">Остались вопросы?</span>: Оперативно ответим в чате или по телефону: <a class="phn" href="tel:79933645588">+7 993 364 55 88</a>`
                        }
                    ],
        }
    },
    props: {
      product: Object,
    },
    methods: {
        showPopup(title){
            this.$emit('show-popup', title)
        },
    }
}
</script>

<style lang="scss" scoped>
.product{
        padding: 40px 16px 80px;
        @media(min-width: 992px){
            display: flex;
            padding: 120px 32px 80px;
            align-items: center;
        }
        @media(min-width: 1200px){
            width: 1120px;
            margin: 0 auto;
        }
        .left{
            img{
                max-width: 100%;
                width: 100%
            }
            @media(min-width: 992px){
                width: 900px;
                margin-right: 20px;
            }
            @media(min-width: 1200px){
                margin-right: 24px;
            }
        }
        .right{
            h1{
                font-size: 24px;
                font-family: 'Bold';
                margin-bottom: 16px;
            }
            .price{
                margin-bottom: 16px;
                font-family: 'Bold';
                font-size: 20px;
            }
            .green-btn{
                margin-bottom: 16px;
                @media(min-width: 992px){
                    width: 200px;
                }
            }
            .sostav{
                margin-bottom: 24px;
            }
            .country{
                margin-bottom: 24px;
            }
            .benefits{
                .benefit{
                    display: flex;
                    align-items: center;
                    margin-bottom: 16px;
                    font-size: 14px;
                    @media(min-width: 992px){
                        width: 400px;
                    }
                    img{
                        margin-right: 16px;
                        width: 30px;
                    }
                    .bold{
                        color: red
                    }
                }
            }
        }
    }

</style>
