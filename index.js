// Add your code here
let myName= "Taghreed";
let myEmail="taghreed@gmail.com";

function submitData(name,email) {
  return fetch("http://localhost:3000/users",{
    method:"POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
       name: name,
        email:email
      })
})
.then(response=>response.json())
.then(function(object) {
  let myHeader=document.createElement("h2");
  myHeader.innerHTML="the new id value is "+ object.id;
document.querySelector("body").appendChild(myHeader);
myHeader.style.color="green";
})
.catch(error=>{let header=document.createElement("h3");
header.innerHTML="Unauthorized Access";
document.querySelector("body").appendChild(header);
header.style.color="red"
 })
}

submitData(myName,myEmail)
