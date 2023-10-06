const { createApp } = Vue;

createApp({
  data(){
    return{
      apriUrl:'https://flynn.boolean.careers/exercises/api/random/mail',

      emails: ' '
    }
  },

  methods:{
    getApi(){
      for (let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (risposta) => {
          console.log(risposta.data.response);
          this.emails = risposta.data.response;
          
        })
      }
      
        
    }
  },

  mounted(){
    
    this.getApi();
  }
}).mount('#app');