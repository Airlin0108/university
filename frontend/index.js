const API_URL = 'http://localhost:8080/students';

document.addEventListener('DOMContentLoaded', () => {

})

function saveStudent ()  {
    const id= document.getElementById("student-id").value;
    const name= document.getElementById("name").value;
    const age= parseInt(document.getElementById("age").value);
    const grade= parseFloat(document.getElementById("grade").value);

    const studentData = { name, age, grade };

    const method = id ? "PUT" : "POST";  //operador ternario para determinar si es una actualización o una creación
    const url = id ? `${API_URL}/${id}` : API_URL;  //si hay un id, se agrega a la URL para actualizar, si no, se usa la URL base para crear un nuevo estudiante
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json' //esto se llama MIME (cuando le explicas el tipo de dato en este caso json)
        },
      body: JSON.stringify(studentData) //convierte el objeto studentData a una cadena JSON para enviarlo al servidor
    }).then(response => { //funcion flecha para evitar que escriba lo demas
        if(!response.ok) {
            return response.json().then(err => { throw new Error(err.detail || 'Error en la operación'); });
        }
        return response.json()
    }) .then(data => {
        alert("Estudiante creado")
})

}

