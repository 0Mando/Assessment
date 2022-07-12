const API = `https://restcountries.com/v3.1/all`

fetch(`${ API }`)
    .then(response => response.json())
    .then(data => getData(data))
    .catch(error => console.error(error))

const getData = (data) =>{
    let asc = data.sort(function (a,b){
        if(a.name.official > b.name.official){
            return 1
        }
        if(a.name.official < b.name.official){
            return -1
        }
        return 0
    })

    console.log(asc)

    let body = ``

    for(let i = 0; i < data.length; i++){
        body +=
        `<tr>
            <td>${asc[i].name.official}</td>
            <td>${asc[i].capital}</td>
            <td>${asc[i].region}</td>
            <td>${asc[i].languages}</td>
            <td>${asc[i].population}</td>
            <td>${asc[i].flag}</td>
        </tr>
        `
    }

    document.getElementById('data').innerHTML = body
}