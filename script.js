const { createApp } = Vue;

createApp({
  data(){
    return{
      apriUrl:'https://flynn.boolean.careers/exercises/api/random/mail',

      emails: []
    }
  },

  methods:{
    getApi(){
      for (let i = 0; i < 10; i++){
        axios.get(this.apriUrl)
        .then( (risposta) => {
          console.log(risposta.data.response);
          this.emails.push(risposta.data.response);
          
        })
      }
      
        
    }
  },

  mounted(){
    
    this.getApi();
  }
}).mount('#app');