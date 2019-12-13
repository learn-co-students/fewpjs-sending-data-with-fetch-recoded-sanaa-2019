// Add your code here
function submitData(name,email){
    return fetch('http://localhost:3000/users',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(
            {
                name,
                email
            }
        )
    }).then(function(response) {
    return response.json();
  }).then(data=>{
    let p = document.createElement('p')
      p.innerHTML = data.id
      document.querySelector('body').appendChild(p)
  })
  .catch(function(err) {
     let sp = document.createElement('span')
      sp.innerHTML = err.message
      document.querySelector('body').appendChild(sp)
  });
  
  
  submitData('name','name@mail.com')
    
}
