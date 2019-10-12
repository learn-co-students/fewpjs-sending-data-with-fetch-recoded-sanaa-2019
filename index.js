// Add your code here
// let header = document.getElementById('heading');
function submitData(name,email){
    return fetch('http://localhost:3000/users',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(
            {
                name:name,
                email:email
            }
        )
    }).then((jsonRes)=>jsonRes.json()).then((res)=>document.body.innerHTML = res.id).catch((err)=>document.body.innerHTML = err.message);
}

submitData('jalal','jalal@jalal.com');