const submitData = (name, email) => {
return  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  })
    .then(response => response.json())
    .then(object => {
      console.log(object)
      let h1 = document.createElement('h1')
      h1.innerHTML = "User id = " + object.id
      document.querySelector('body').appendChild(h1)
    })
    .catch(err => document.querySelector('body').innerHTML = err)

}

submitData('moh', 'Moh@moh.com')