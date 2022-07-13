const app= new Vue(
{
    el: '#root',

    data:{
        lunghezzaArray:'',
        emails:[
            
        ],
    },

    methods:{
        lenghtTester:function(){
            return this.emails.length>=10;
        },

        loadingBarClass: function(){
            if (this.emails.length >= 2){
                this.lunghezzaArray='w-25'
                if(this.emails.length >= 5){
                    this.lunghezzaArray='w-50'
                    if(this.emails.length >= 7){
                        this.lunghezzaArray='w-75'
                        if(this.emails.length >9){
                            this.lunghezzaArray='w-100'
                        }
                    }
                }
            }  
            return this.lunghezzaArray;
        },
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