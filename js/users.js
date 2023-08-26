// Get data 
const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(response => response.json())
.then(data => displayData(data))

// show data 
function displayData(data){
    const container = document.getElementById('container');
    for(const singleData of data){
        console.log(singleData)
     const div = document.createElement('div');
     div.classList.add('body-style')
     div.innerHTML =`
      <h2> Name: ${singleData.name}</h2>
      <h4> User Name: ${singleData.username}</h4>
      <p>Email: ${singleData.email}</p>
      <p>Address: ${singleData.address?.street}</P>
     `;
     container.appendChild(div)
}
}