 var quotes=[
    {
       'quote':' "Resentment is like drinking poison and waiting for your enemies to die."' ,
        'user':"--Nelson Mandela"
    },
    {
        'quote':'"Do not take life too seriously. You will not get out alive."',
         'user':"--Elbert Hubbard"
     },
     {
        'quote':'"The best revenge is massive success." ',
         'user':"--Frank Sinatra"
     },
     {
        'quote':` "It's not what happens to you, but how you react to it that matters."` ,
         'user':"--Epictetus"
     }
 ]


 function showQuote(){
 var num =  Math.floor(Math.random()*quotes.length)
 document.getElementById("quote").innerHTML=quotes[num].quote;
 document.getElementById("user").innerHTML=quotes[num].user;
if(quotes[num].quote==quotes[num+1].quote){
    num++;
}
 
 }
 