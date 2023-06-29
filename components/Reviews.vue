<template lang="pug">
section.reviews
    h2.section-title(v-html="title") {{ title }}
    .reviews-wrapper
        .review(v-for="(review, i) in reviews" :key="i")
            .header 
                .name {{ review.name }}
                .source {{ review.source }} 
            .main
                img.circle(:src="review.img" @click="index = i")
                .text {{ review.text }}
        </template>
        
        <script>
        export default {
            name: 'ReviewsComp',
          data() {
            return {
                title: `Наши клиенты остаются довольными <br> Вот доказательства:`,
                reviews: [ 
                    {
                        img: require("~/assets/images/persons/1.jpg"),
                        source: 'WhatsApp',
                        name: 'Наталья',
                        text: 'Захотелось поесть вкусных фруктов, так как рядом с моим домом только Пятерочка, а фрукты там так себе бывают. Нашла ребят из frut-atlas  в интернете. Осталась полностью довольна своим заказом.'
                    },  
                    {
                        img: require("~/assets/images/persons/2.jpg"),
                        source: 'WhatsApp',
                        name: 'Мира',
                        text: 'Доброе утро! Да,курьер привез подарочную корзину в оговоренное время. Сами фрукты сочные и вкусные. Спасибо вам'
                    },  
                    {
                        img: require("~/assets/images/persons/4.jpg"),
                        source: 'WhatsApp',
                        name: 'Элина',
                        text: 'Заказывала сестрам в подарок корзину из фруктов. Корзины привезли вовремя, красиво запакованные с открыткой. Сами фрукты в корзине были очень вкусными. Сестры остались довольны.'
                    },  
                    {
                        img: require("~/assets/images/persons/3.jpg"),
                        source: 'WhatsApp',
                        name: 'Максим',
                        text: 'Заказывал корзины в офис на 8 марта и на день рождения сотрудницам. Всегда привозят хорошие фрукты. Мне нравится что если товар плохой, то нам звонят и говорят, что к примеру груш сегодня хороших нет, а не пихают лишь бы заработать.'
                    }, 
                    {
                        img: require("~/assets/images/persons/5.jpg"),
                        source: 'WhatsApp',
                        name: 'Ирина',
                        text: 'Покупаем в этой лавке фрукты. Корзины не заказаывали. Ребята молодцы, заказы собирают тщательно. Думаю с корзинами все так же четко как и с обычными заказами'
                    },   
                    {
                        img: require("~/assets/images/persons/6.jpg"),
                        source: 'WhatsApp',
                        name: 'Кристина',
                        text: 'Попропсила собрать корзину из разного вида манго. Мне его даже красиво упаковали в подарочную корзинку с бантиком. Сам манго был тоже очень вкусный.'
                    }, 
                ],
              index: null,
            }
          }
        }
        </script>
        
        <style lang="scss" scoped>
        .reviews{
            padding: 40px 24px;
            @media(min-width: 1200px){
                width: 1120px;
                padding: 120px 0;
                margin: 0 auto;
            }
            .section-title::before{
                position: absolute;
                content: '';
                width: 350px;
                height: 8px;
                bottom: 14px;
                background: #FDDF55;
                display: block;
                z-index: -1;
            }
            p{
                margin-bottom: 40px;
            }
            .reviews-wrapper{
                @media(min-width: 992px){
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 20px;
                    margin-bottom: 40px;
                }
                @media(min-width: 1200px){
                    width: 1120px;
                    margin: 0 auto 40px;
                }
                .review{
                    background: #F5F5F5;
                    border-radius: 15px;
                    padding: 16px;
                    margin-bottom: 20px;
                    @media(min-width: 992px){
                        margin-bottom: 0;
                    }
                    .header{
                        display: flex;
                        justify-content: flex-end;
                        margin-bottom: 16px;
                        .name{
                            margin-right: 50px;
                        }
                    }
                    .main{
                        display: flex;
                        .circle{
                            width: 60px;
                            height: 60px;
                            border-radius: 100%;
                            margin-right: 20px;
                            cursor: pointer
                        }
                    }
                }
            }
            .transp-btn{
                border: 1px solid #000;
                color: #000;
                @media(min-width: 992px){
                    width: 300px;
                    margin: 0 auto;
                }
            }
        }
        </style>