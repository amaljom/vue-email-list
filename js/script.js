const app= new Vue(
{
    el: '#root',

    data:{
        emails:[
            
            
        ]
    },

    created(){
        axios.get( 'https://flynn.boolean.careers/exercises/api/random/mail' )
            .then((response)=>{
                const result= response.data;
                console.log(result);
                this.emails.push({
                    email: result
                });
            });
     },
});