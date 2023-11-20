const { createApp } = Vue
const emails = {
    data(){
        return{
            mailsArray : []
        }
    },
    methods: {
        generatoreEmail() {
            for (let i = 0; i < 10 + 1; i++) {
                const indexEmail =i;
                console.log(indexEmail)
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                console.log(resp.data.response)
                //this.mailsArray.push(resp.data.response)
            });
            }
            
        }
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
            // resp.data = dati ottenuti in risposta dal server
            // resp.status = codice HTTP di risposta (es. 200)
            // resp.statusText = codice HTTP di risposta (es. OK)
            console.log("Ricevuto: ", resp.data);

            //se la risposta è ok
            if(resp.data.success) {
                this.mailsArray = resp.data.response;
            }
        });
        
    }

}
createApp(emails).mount('#app')