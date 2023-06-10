<template lang="pug">
section.footer
    .footer-wrapper 
        .block 
            img(src='~/assets/images/logo-light.svg')
        .block(v-html="text") {{ text }}
        .block 
            a(href="") Политика конфиденциальности
</template>

<script>
export default {
    name: 'ContactsComp',
    data() {
        return {
            text: `© 2008–2023<br> ИП Годжиев Т. С., ОГРН 1097746232682,<br> ИНН 7736602705`
        }
    }

}
</script>

<style lang="scss" scoped>
.footer{
    padding: 40px 16px;
    background: #000;
    @media(min-width: 992px){
        padding: 80px 32px;
    }
    p{
        margin-bottom: 40px;
    }
    .footer-wrapper{
        align-items: center;
        @media(min-width: 768px){
            display: flex;
            justify-content: space-around;
        }
        @media(min-width: 1200px){
            width: 1120px;
            margin: 0 auto;
        }
        .block{
            color: #fff;
            margin-bottom: 24px;
            text-align: center;
            font-size: 14px;
            &:nth-child(2){
                @media(min-width: 992px){
                    text-align: center;
                    width: 380px;
                }
            }
            a{
                color: #9AD6F8;
                text-decoration: none;
            }
        }
    }
}
</style>
