<template lang="pug">
section.contacts
    h2.section-title Контакты
    p.section-desc Если у вас есть вопросы по доставке или какие-либо предложения мы с радостью вас выслушаем! Просто свяжитесь с нами любым удобным способом.
    .contacts-wrapper
        .contact
            img(src='~/assets/images/call.svg')
            .type-name Телефон
            .type-desc Мы доступны для звонка с 9:00 до 18:00
            a.numero(href="tel:79933645588" target="_blank") +7 993 364 55 88
        .contact
            img(src='~/assets/images/whats.svg')
            .type-name WhatsApp
            .type-desc Пишите нам в WhatsApp в любое время
            a.numero(href="https://wa.me/79933645588" target="_blank") Написать в WhatsApp
        .contact
            img(src='~/assets/images/tlg.svg')
            .type-name Telegram
            .type-desc Пишите нам в Telegram в любое время
            a.numero(href="https://t.me/fruit_atlas" target="_blank") Написать в Телеграм
</template>

<script>
export default {
    name: 'ContactsComp',
    data() {
        return {
            text: 'Мы осуществляем доставку наших фруктовых корзин по всей России. В Москве и Московской области доставка осуществляется курьерской службой, в другие регионы - транспортными компаниями. Мы осуществляем доставку наших фруктовых корзин по всей России. В Москве и Московской области доставка осуществляется курьерской службой, в другие регионы - транспортными компаниями. Мы осуществляем доставку наших фруктовых корзин по всей России. В Москве и Московской области доставка осуществляется курьерской службой, в другие регионы - транспортными компаниями.'
        }
    }

}
</script>

<style lang="scss" scoped>
.contacts{
    padding: 80px 16px;
    background: #fff;
    @media(min-width: 992px){
        padding: 120px 0;
    }
    @media(min-width: 1200px){
        margin: 0 auto;
        width: 1120px
    }
    p{
        margin-bottom: 40px;
    }
    .contacts-wrapper{
        @media(min-width: 992px){
            display: flex;
            justify-content: space-around;
        }
        @media(min-width: 1200px){
            width: 1120px;
            margin: 0 auto;
        }
        .contact{
            margin-bottom: 24px;
            width: fit-content;
            @media(min-width: 992px){
                width: 300px;
            }
            img{
                margin-bottom: 8px;
                width: 60px;
            }
            .type-name{
                margin-bottom: 8px;
            }
            .type-desc{
                color: #8F8F8F;
                margin-bottom: 8px;
            }
            .numero{

                font-size: 20px;
                text-decoration: none;
                color: rgb(73, 146, 214);
            }
            &:nth-child(1){
                .numero{
                    color: #675CA8;
                }
            }
            &:nth-child(2){
                .numero{
                    color: #25D366;
                }
            }
            &:nth-child(3){
                .numero{
                    color: #2CA3DB;
                }
            }
        }
    }
}
</style>
