<template lang="pug">
.popup(:class="{ active: activePopup }")
    .popup-window
      .popup-header
        img(:src="require(`~/assets/images/close.svg`)" @click="showPopup")
      form(@submit.prevent="submitForm")
        .fields(v-if="notSend")
          h3 Введите данные
          .field
            input(type="text" v-model="name" placeholder="Как вас зовут?" required)
          .field
            input(type="tel" @input="onPhoneInput" v-model="phone" maxlength="18" placeholder="+7 (888) 888-88-88" required)
          .field
            button(type="submit") Отправить
        .message(v-if="sended")
          //- img(:src="require(``)")
          h3 Ваш запрос отправлен!
          p Наш менеджер уже набирает ваш номер, не убирайте далеко телефон.
</template>

<script>
import axios from 'axios'
export default {
    name: 'PoPup',
    props: {
      activePopup: Boolean,
      basket: {
        type: Object,
        default() {
          return {name: 'Просто звонок'}
        }
      }
    },
    data(){
      return {
        notSend: true,
        name: '',
        phone: '',
        sended: false,
        number: 'asd'
      }
  },
  methods: {
    showPopup(){
      this.$emit('show-popup')
    },
    submitForm() {
            const order = {
                name: this.name,
                phone: this.phone,  
                basket: this.basket.name
            }
            const message = `Заказ корзины: \n Имя: ${order.name} \n Телефон ${order.phone} \n ${order.basket}`
            axios.post('https://api.telegram.org/bot5561581589:AAHOqK8z6VzxVouFK0m-pC9u-HruGIPALfs/sendMessage', {
            chat_id: '-1001187047227',
            parse_mode: 'html',
            text: message
            }
            ).then(
                this.sended = true,
                this.notSend = false
            )
        },
      onPhoneInput(event){
          let inputNumbersValue = event.target.value.replace(/\D/g, "");
          let formattedValue = '';

          if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
          const firstSymbols = (inputNumbersValue[0] === "8") ? "+7" + inputNumbersValue : "+7";
          formattedValue = event.target.value = firstSymbols + " ";
          if (inputNumbersValue.length > 1) {
              formattedValue += '(' + inputNumbersValue.substring(1, 4);
          }
          if (inputNumbersValue.length >= 5) {
              formattedValue += ') ' + inputNumbersValue.substring(4, 7);
          }
          if (inputNumbersValue.length >= 8) {
              formattedValue += '-' + inputNumbersValue.substring(7, 9);
          }
          if (inputNumbersValue.length >= 10) {
              formattedValue += '-' + inputNumbersValue.substring(9, 11);
      } 
          this.phone = formattedValue
          if(formattedValue.length === 18){
              this.canSend = true
          }else{
              this.canSend = false
          }
      },
  }

}
</script>

<style lang="scss">
  .popup{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(41, 39, 39, 0.8);
    top: 0;
    z-index: 12;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    display: none;
    opacity: 0;
    transition: all .5s ease;
    .popup-window{
      width: 100%;
      padding: 20px;
      border-radius: 10px;
      background: #fff;
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      justify-content: center;
      @media (min-width : 768px) {
        width: 400px;
      }
      @media (min-width : 992px) {
        padding: 32px;
        width: 450px;
      }
      .popup-header{
        width: 100%;
        text-align: right;
        margin-bottom: 10px;
        img{
          cursor: pointer;
          width: 30px;
        }
      }
      form{
        width: 100%;
      }
      .fields{
        h3{
          margin-bottom: 16px;
        }
      }
      .field{
        margin-bottom: 16px;
        width: 100%;
      }
      input{
        height: 40px;
        width: 100%;
        padding-left: 8px;
        border-radius: 5px;
        border: 1px solid #c6e2ff;
        font-size: 16px;
      }
      button{
        width: 100%;
        padding: 10px;
        border: none;
        background: red;
        color: #fff;
        font-weight: 500;
        cursor: pointer;
        border-radius: 5px;
        height: 40px;
        font-size: 16px;
      }
      .message{
        text-align: center;
        h3{
          margin-bottom: 16px;
        }
        img{
          width: 200px;
          margin-bottom: 10px;
        }
      }
    }
    &.active{
      opacity: 1;
      display: flex;
    }
  }
</style>
