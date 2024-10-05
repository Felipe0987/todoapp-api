const container = document.querySelector(".container");

fetch('http://localhost:3000/works')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        return response.json();
    })
    .then(data => {
        container.innerHTML = '';

        data.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `${item.name} ${item.cuando}`;
            container.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });
