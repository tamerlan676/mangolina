<template lang="pug">
.about-us 
    .about-wrapper 
        .left
            h2.section-title Сделаем все в лучшем виде для ваших близких
            p {{ text }}
            p {{ text }}
        .right
            img(src="~/assets/images/gift.jpg")
</template>

<script>
export default {
    data() {
        return {
            text: 'Самое главное во фруктовой корзине - это качество фруктов. Мы возим их со всего мира уже на протяжении 8 лет и за это время выстроили отношения исключительно с проверенными поставщиками. Каждый фрукт в корзине - это гарантия вкуса и спелости.',
        }
    }

}
</script>

<style lang="scss" scoped>
.about-us{
    width: 100%;
    padding: 80px 24px;
    @media(min-width: 992px){
        padding: 120px 32px;
    }
    .about-wrapper{
        @media(min-width: 992px){
            display: flex;
            align-items: center;
            width: 1120px;
            margin: 0 auto; 
        }
        .left{
            margin-right: 24px;
            @media(min-width: 992px){
                width: 600px;
            }
        }
        .right{
            img{
                width: 500px;
            }
        }
    }
    .section-title::before{
        position: absolute;
        content: '';
        width: 250px;
        height: 8px;
        bottom: 14px;
        background: #FDDF55;
        display: block;
        z-index: -1;
    }
    p{
        margin-bottom: 24px;
        font-family: "Light";
        @media(min-width: 992px){
            margin-bottom: 40px;
        }
    }
    img{
        margin-bottom: 24px;
    }
    .green-btn{
        @media(min-width: 768px){
            width: 200px;
            margin: 0 auto;
        }
    }
}

</style>
