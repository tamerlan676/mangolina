<template lang="pug">
div
    Header
    .quiz
        transition(name="slide")
            .step(v-if="currentStep === 1")
                .step-info Шаг 1 из 4
                h2 Выберите бюджет для вашей корзины
                .prices-wrapper
                  .price(v-for="price, index in prices" :key="index" @click="getPrice(price)" :class="{ active: basketPrice == price }") {{ price }} ₽
                button.yellow-btn(@click="nextStep") Далее
        transition(name="slide")
              .step(v-if="currentStep === 2")
                .step-info Шаг 2 из 4
                h2 Выберите фрукты, которые хотите добавить в вашу корзину
                .fruits-wrapper
                  .fruit(v-for="fruit, index in fruits" :key="index" @click="getFruit(fruit.title)" :class="{ active: fruitInArray(fruitsList, fruit.title) }") 
                    img(:src="fruit.img")
                    .title {{ fruit.title }} 
                button.yellow-btn(@click="nextStep") Далее
        transition(name="slide")
              .step(v-if="currentStep === 3")
                .step-info Шаг 3 из 4
                h2 К каждой корзине мы добавляем открытку. Укажите что на ней написать
                textarea.text-area(placeholder="Введите текст поздравления тут" v-model="greetings")
                button.yellow-btn(@click="nextStep") Далее
        transition(name="slide")
              .step(v-if="currentStep === 4")
                .step-info Шаг 4 из 4
                h2 Если у вас остались пожелания по корзине, напишите их в этом поле
                textarea.text-area(placeholder="Введите текст ваших пожеланий" v-model="comments")
                button.yellow-btn(@click="nextStep") Далее
        transition(name="slide")
              .step(v-if="currentStep === 5")
                h2 Мы учтем все ваши пожелания! 
                .field
                  input(type="text" placeholder="Введите имя")
                .field
                  input(type="tel" placeholder="Введите номер телефона")
                button.yellow-btn(@click="nextStep") Отправить
    Footer
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      basketPrice: '',
      prices: [
        '3 000', '5 000', '7 0000', '10 000', '12 000', '15 000'
      ],
      fruitsList: [],
      fruits: [
        {
          img: require('~/assets/images/fruits-svg/avo.svg'),
          title: 'Авокадо',
          exp: true,
        },
        {
          img: require('~/assets/images/fruits-svg/pineapple.svg'),
          title: 'Ананас',
          exp: true,
        },
        {
          img: require('~/assets/images/fruits-svg/oranges.svg'),
          title: 'Апельсины',
          exp: true,
        },
        {
          img: require('~/assets/images/fruits-svg/watermelon.svg'),
          title: 'Арбуз',
          exp: true,
        },
        {
          img: require('~/assets/images/fruits-svg/banana.svg'),
          title: 'Бананы',
          exp: true,
        },
        {
          img: require('~/assets/images/fruits-svg/grapes.svg'),
          title: 'Виноград',
          exp: true,
        },
        {
          img: require('~/assets/images/fruits-svg/granat.svg'),
          title: 'Гранат',
          exp: true,
        },
        {
          img: require('~/assets/images/fruits-svg/grapefruit.svg'),
          title: 'Грейпфрут',
          exp: true,
        },
        {
          img: require('~/assets/images/fruits-svg/blueberries.svg'),
          title: 'Голубика',
          exp: true,
        },
        {
          img: require('~/assets/images/fruits-svg/pear.svg'),
          title: 'Груши',
          exp: true,
        },
        {
          img: require('~/assets/images/fruits-svg/kiwi.svg'),
          title: 'Киви',
          exp: true,
        },
        {
          img: require('~/assets/images/fruits-svg/mango.svg'),
          title: 'Манго',
          exp: true,
        },
        {
          img: require('~/assets/images/fruits-svg/aplles.svg'),
          title: 'Яблоки',
          exp: true,
        },
      ],
      greetings: '',
      comments: ''
    };
  },
  methods: {
    nextStep() {
      this.currentStep++;
      location.href="#"
    },
    prevStep() {
      this.currentStep--;
    },
    getPrice(price) {
      this.basketPrice = price
    },
    getFruit(fruit) {
      this.fruitsList.push(fruit)
    },
    fruitInArray(fruitsList, str) {

      return fruitsList.includes(str)
    }
  },
};
</script>

<style scoped lang="scss">
.quiz{
  display: flex;
  padding: 40px 16px;
  @media(min-width: 992px){
      padding: 120px 0;
  }
    .step{
        padding: 40px 16px;
        height: 100%;
        overflow-y: auto;
        margin: 0 auto;
        .start-img{
          max-width: 100%;
          margin: 0 auto;
          @media(min-width: 992px){
              width: 520px;
              display: block;
              margin-bottom: 20px;
          }
        }
        .start-text{
          text-align: center;
          margin-bottom: 20px;
        }
        .step-info{
          text-align: center;
          margin-bottom: 16px;
        }
        h2{
          text-align: center;
          margin-bottom: 16px;
        }
        .prices-wrapper{
          display: flex;
          flex-wrap: wrap;
          .price{
            background: #EFEFEF;
            padding: 15px;
            width: 100%;
            margin-bottom: 16px;
            text-align: center;
            transition: all .5s ease;
            cursor: pointer;
            &.active{
              background: orange;
              color: #fff
            }
          }
          .btn-wrapper{
            display: flex;
          }
        }
        .fruits-wrapper{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          @media(min-width: 1200px){
              width: 1120px;
              margin: 0 auto;
            }
          .fruit{
            width: 100%;
            background: #EFEFEF;
            padding: 15px;
            margin-bottom: 16px;
            text-align: center;
            transition: all .5s ease;
            display: flex;
            align-items: center;
            cursor: pointer;
            @media(min-width: 992px){
              width: 230px;
            }
            @media(min-width: 1200px){
              width: 260px;
            }
            img{
              width: 50px;
              margin-right: 20px;
            }
            &.active{
              background: orange;
              color: #fff
            }
          }
        }
        .text-area{
          border: 2px solid #A7A7A7;
          width: 100%;
          font-family: inherit;
          padding: 10px;
          margin-bottom: 24px;
          font-size: 16px;
          font-style: italic;
          height: 200px;
        }
        .field{
          margin-bottom: 20px;
          input{
            width: 100%;
            border: 2px solid #A7A7A7;
            height: 50px;
            padding: 10px;
            font-size: 16px;
            font-style: italic;
          }
        }

}

.yellow-btn{
  width: 200px;
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active,
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s linear, transform 0.5s linear;
}

.fade-enter,
.fade-leave-to,
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: scale(0);
}}
</style>
  