const validarDatos = () => {
  fetch('json/datos.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo leer el archivo JSON')
      }
      return response.json();
    })

    .then(data => {
      const username = document.getElementById("username").value
      const password = document.getElementById("password").value
      const selectedRole = document.querySelector('input[name="role"]:checked').value

      console.log(username)
      console.log(password)
      console.log(selectedRole)

      for (let i = 0; i < data.length; i++) {
        let element = data[i];
        console.log(data)
        console.log(`username: ${element.username}`)
        console.log(`password: ${element.password}`)
        console.log(`role: ${element.role}`)

        if (username === element.username && password === element.password) {
          
          if(selectedRole !== element.role){
            alert("Rol incorrecto")
            return
          }

          alert("Bienvenido")


          localStorage.setItem('loggedIn', 'true')
          localStorage.setItem('username',username)
          localStorage.setItem('role',selectedRole)

          window.location.href = 'html/index.html'
          return
        }
      }

      alert("username invalido")

    })
    .catch(error => {
      console.error('Error al leer el archivo JSON:', error)
    });
}