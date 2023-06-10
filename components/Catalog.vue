<template lang="pug">
section.catalog
    h2.section-title Каждая корзина состоит из отборнейших фруктов
    .catalog-wrapper 
        .item(v-for="item in baskets")
            nuxt-link(:to="`/baskets/${item.id}`")
                img(:src="item.acf.image")
            h4 {{ item.title.rendered }}
            p.descr {{ item.acf.description }}
            .wrapper
                .prices 
                    .old-price {{ item.acf.price * 1.3 }} ₽
                    .price {{ item.acf.price }} ₽
                button.yellow-btn(@click="showPopup(item)") Заказать
</template>

<script>
export default {
    name: 'CatalogComp',
    data() {
        return {
        }
    },
    props: {
      baskets: Array,
    },
    methods: {
        showPopup(item){
            const data = {
                name: item.title.rendered
            }
            this.$emit('show-popup', data)
        },
    },
    computed: {
    }

}
</script>

<style lang="scss" scoped>
.catalog{
    padding: 40px 0;
    @media(min-width: 992px){
        width: 1120px;
        margin: 0 auto; 
    }
    .section-title{
        padding: 0 24px;
        margin-bottom: 32px;
        @media(min-width: 992px){
            padding: 0;
        }
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
    .catalog-wrapper{
        display: flex;
        overflow: auto;
        padding-left: 24px;
       @media(min-width: 990px){
        width: 1120px;
        margin: 0 auto;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
       }
        .item{
            flex: 0 0 auto;
            width: 100%;
            width: 250px;
            margin-right: 16px;
            @media(min-width: 990px){
                margin-bottom: 24px;
                margin-right: 24px;
            }
            img{
                width: 100%;
                border: 1px solid #e5e5e5
            }
            h4{
                margin-bottom: 16px;
                font-size: 16px;
                line-height: 18px;
                font-family: "Medium";
            }
            .descr{
                font-family: "Light";
                font-size: 14px;
                line-height: 20px;
                margin-bottom: 16px;
            }
            .wrapper{
                display: flex;
                    .prices{
                        margin-right: 16px;
                        .old-price{
                            color: #FB9292;
                            text-decoration: line-through;
                            font-size: 18px;
                            font-family: "Semi-Bold";
                        }
                        .price{
                            font-size: 16px;
                            color: #0B9208;
                        }
                    }
                    button{
                        width: 150px;
                    }
            }
            a{
                @media(min-width: 992px){
                    width: 200px;
                }
            }
        }
        &::-webkit-scrollbar {
            display: none;
          }
    }
}
</style>
