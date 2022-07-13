const app= new Vue(
{
    el: '#root',

    data:{
        emails:[
            
        ],
    },

    methods:{
        lenghtTester:function(){
            return this.emails.length>=10;
        }
    },
    

    created(){
            for (let i = 0; i < 10; i++){
                axios.get( 'https://flynn.boolean.careers/exercises/api/random/mail' )
                .then((res)=>{
                    this.emails.push(res.data.response);
                });
            }
           
     },
});