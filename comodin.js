/* fetch
var url = '';

if(opc == "senate"){
    url = "https://api.propublica.org/congress/v1/113/senate/members.json";
   } else {
       url = "https://api.propublica.org/congress/v1/113/house/members.json";
   }

$(function() {
fetch(url,{
method: 'GET',
headers: new Headers({
"X-API-Key": "hwFKB37RLFz0ntVG1cIX0pxzq0QYHsbX24hR6swX"
})
} ).then(function(response){
return response.json();
}).then (function(json){
    app.candidates = json.results[0].members;
    calcula(json.results[0].members);
}).catch(function(){
    if (app.candidates == undefined){
        console.log("Fail");
    } else {
    }
})
});

al html posar :

 <script>var opc = "house"</script>
    <script src="js/main.js"></script>

*/
/*loader
al css posar:

#loader,
#loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
}

#loader {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(128, 0, 0, 0.2);
    border-right: 1.1em solid rgba(128, 0, 0, 0.2);
    border-bottom: 1.1em solid rgba(128, 0, 0, 0.2);
    border-left: 1.1em solid darkred;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
}

@-webkit-keyframes load8 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes load8 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

i posar un id="loader" alla on vagi


*/

