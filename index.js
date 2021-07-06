// Add your code here
function submitData(userName, userEmail){
  return fetch("http://localhost:3000/users",{
    method:"post",
    headers:{
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail 
    })
  })
  .then(function(responce){
    return responce.json();
  })
  .then(function(obj){
    console.log(obj);
    let h1 = document.createElement('h1')
    h1.innerHTML =  obj.id +" ";
    document.querySelector('body').appendChild(h1)
   
  })
  .catch(function(error){
     console.log("error");
     let h1 = document.createElement('h1')
     h1.innerHTML =  error.message +" ";
     document.querySelector('body').appendChild(h1)
  });
}
submitData("Aisha","aisha1rashed@gmail.com");