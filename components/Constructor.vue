<template lang="pug">
section.constructor
    h2.section-title(v-html="title") {{ title }}
    img(src="~/assets/images/constructor.jpg")
    nuxt-link.yellow-btn(to="quiz") Собрать корзину
</template>

<script>
export default {
    name: 'ConstructorComp',
    data() {
        return {
            title: `Опробуйте наш конструктор, который учтет ваш <br> бюджет и пожелания.`
        }
    }

}
</script>

<style lang="scss" scoped>
.constructor{
    padding: 80px 24px;
    @media(min-width: 992px){
        width: 1120px;
        padding: 120px 0;
        margin: 0 auto;
    }
    .section-title{
        @media(min-width: 992px){
            text-align: center;
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
        left: 377px;
    }
    p{
        margin-bottom: 24px;
    }
    img{
        width: 100%;
        display: block;
        margin: 0 auto 40px;
        @media(min-width: 768px){
            width: 600px;
        }
    }
    a{
        @media(min-width: 768px){
            width: 300px;
            margin: 0 auto;
        }
    }
}
</style>
