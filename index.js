const API = `https://restcountries.com/v3.1/all`

fetch(`${ API }`)
    .then(response => response.json())
    .then(data => getData(data))
    .catch(error => console.error(error))

const getData = (data) =>{
    let body = ``
    for(let i = 0; i < data.length; i++){
        body +=
        `<tr>
            <td>${data[i].name.official}</td>
            <td>${data[i].capital}</td>
            <td>${data[i].region}</td>
            <td>${data[i].languages}</td>
            <td>${data[i].population}</td>
            <td>${data[i].flag}</td>
        </tr>
        `
    }

    document.getElementById('data').innerHTML = body
}