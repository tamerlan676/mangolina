<template lang="pug">
header
    .header-wrapper
        nuxt-link(to="/")
                .name
                    img(src="~/assets/images/logo.svg")
                    .mini Доставка фруктовых корзин
        .burger(@click='$emit("turnMenu")' :class="{active: activeBurger}")
            span
        nav.menu-lg
            ul.parent-ul
                li 
                    nuxt-link(:to="{ path: '/', hash:'#about'}") О Нашей компании
                li 
                    nuxt-link(:to="{ path: '/', hash:'#catalog'}") Каталог
                li 
                    nuxt-link(:to="{ path: '/', hash:'#constructor'}") Конструктор
                li 
                    nuxt-link(:to="{ path: '/', hash:'#review'}") Отзывы
                li 
                    nuxt-link(:to="{ path: '/', hash:'#faq'}") Вопрос-ответ
                li 
                    nuxt-link(:to="{ path: '/', hash:'#contacts'}") Контакты
    </template>
    
    <script>
    export default {
      name: 'HeaderComponent',
      props: {
          activeBurger: {
            type: Boolean,
            default: false
          },
      },
      data() {
        return{
          catDroodown: false,
          collectionsDropdown: false
        }
      },
      methods: {
          turnCatMenu () {
            this.catDroodown = !this.catDroodown
            if(this.collectionsDropdown){
              this.collectionsDropdown = false
            }
          }
      },
      computed: {
              cart() {
                return this.$store.state.cart
              },
              totalProducts() {
                return this.$store.state.totalProducts
              },
            },
    }
    </script>
    
    <style scoped lang="scss">
    header{
      width: 100%;
      box-sizing: border-box;
      position: sticky;
      top: 0;
      padding: 24px 24px;
      display: flex;
      justify-content: space-between;
      background:#fff;
      z-index: 20;
      @media(min-width: 992px){
        padding: 40px 32px;
      }
      @media(min-width: 1200px){
        margin: 0 auto 20px;
      }
      .header-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        @media(min-width: 1200px){
          width: 1120px;
          margin: 0 auto;
        }
      }
      .name{
        display: flex;
        img{
            width: 100px;
            margin-right: 10px;
            @media(min-width: 1200px){
                width: 150px;
            }
        }
        .mini{
          width: 80px;
          font-size: 10px;
          line-height: 12px;
          color: #000;
          border-left: 1px solid #000;
          padding: 3px 0 3px 10px;
        }
      }
      .burger{
        width: 50px;
        height: 50px;
        position: relative;
        background: #FDDF55;
        border-radius: 100%;
        @media(min-width: 992px){
          display: none;
        }
        cursor: pointer;
        &::before{
          content: '';
          position: absolute;
          top: 17px;
          width: 25px;
          right: 12px;
          height: 1px;
          background: #000;
          transition: all .5s ease;
        }
        &::after{
          content: '';
          position: absolute;
          width: 23px;
          right: 12px;
          top: 25px;
          height: 1px;
          background: #000;
          transition: all .5s ease;
        }
        span{
          width: 25px;
          height: 1px;
          background: #000;
          right: 12px;
          position: absolute;
          top: 34px;
          transition: all .5s ease;
        }
        &.active{
          span{
                display: none;
              }
            &:before{
              transform: rotate(40deg);
              bottom: 10px;
              background: rgb(124, 36, 36);
            }
            &:after{
              transform: rotate(-40deg);
              top: 12px;
              background: rgb(124, 36, 36);
            }
        }
        }
      .menu-lg{
        display: none;
        @media(min-width: 992px){
          display: block;
        }
        .parent-ul {
          list-style: none;
          margin: 0;
          padding-left: 0;
          display: flex;
        }
        li {
          color: #000;
          display: block;
          position: relative;
          transition-duration: 0.5s;
          padding: 10px;
          font-size: 12px;
          a{
            color: #000;
            font-size: 16px;
            text-decoration: none;
            font-weight: bold;
            transition: all .5s ease;
            &:hover{
                color:#FAB854;
            }
          }
        }
        .child-ul {
          background: #ffffff;
          visibility: hidden;
          opacity: 0;
          position: absolute;
          transition: all 1s ease;
          pointer-events: none;
          left: 0;
          width: 200px;
          padding: 10px;
          transform: matrix(1, 0, 0, 1, 3, -20);
          a{
            width: 100%;
            display: block;
            color: #fff;
            transition: all .5s ease;
            &:hover{
              color: brown;
            }
          }
        }
        ul li:hover > ul,
        ul li ul:hover {
          visibility: visible;
          pointer-events: all;
          opacity: 1;
          transform: matrix(1, 0, 0, 1, 0, 10);
        }
      }
    }
    </style>