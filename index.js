// Add your code here
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
          let h3 = document.createElement('h3')
          h3.innerHTML = "User id = " + object.id
          document.querySelector('body').appendChild(h3)
        })
        .catch(err => document.querySelector('body').innerHTML = err)
    
    }
    
    submitData('firas', 'firasazizy614@gmail.com')