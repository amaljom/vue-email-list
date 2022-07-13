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
        },
        loadingBarClass: function(){
            switch (this.emails.length){
                case 3:
                    return 'w-25'
                    break;
                case 5:
                    return 'w-50'
                    break;
                case 7:
                    return 'w-75'
                    break;
                case 10:
                    return 'w-10';
                    break;
            }
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