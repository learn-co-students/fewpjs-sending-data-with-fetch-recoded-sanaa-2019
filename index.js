// Add your code here
function submitData(nam,emai){
    return fetch("http://localhost:3000/users",{
    method:"POST",
    headers:{
        'content-type':'application/json',
        "accept":"application/json"
    },
    body:JSON.stringify({
        name:nam,
        email:emai
    })
}).then(resp=>resp.json()).then(function(json){
    
    
    document.querySelector("body").innerHTML+=json.id;
    console.log(json);
    
}).catch(function(ob){
    document.querySelector("body").innerHTML+=' '+ob.message;
});
};
let name = "Mohammed";
let email="mo@gmail.com";
submitData(name,email);
