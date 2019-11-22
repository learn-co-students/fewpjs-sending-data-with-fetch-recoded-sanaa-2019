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
    document.body.innerHtml  = document.body.innerHtml+ obj.id + " ";
  })
  .catch(function(error){
    document.body.innerHtml = error.message;
  });
}