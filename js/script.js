const app= new Vue(
{
    el: '#root',

    data:{
        emails:[
            
        ],
    },
    

    created(){
        let result=[];
           for (let i = 0; i < 10; i++){
                axios.get( 'https://flynn.boolean.careers/exercises/api/random/mail' )
                .then((response)=>{
                    result[i] = response.data;
                    console.log(result)
                });
           }
           for (let i = 0; i < 10; i++){ 
                this.emails.push({
                     email: result[i]
                });
            }
     },
});