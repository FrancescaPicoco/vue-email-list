const { createApp } = Vue
const emails = {
    data(){
        return{
            mailsArray :[],
            mailsOk : false,
        }
    },
    methods: {
        generatoreEmail() {
            for (let i = 0; i < 10 ; i++) {
                this.mailsArray = [],
                this.mailsOk = false
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                console.log(resp.data.response)               
                let singleEmail = resp.data.response;
				this.mailsArray.push(singleEmail);
            });
            }
            this.mailsOk = true           
        }       
    },
    mounted() {
        
    }
}
createApp(emails).mount('#app')