let url = "http://localhost:3001/boxes"
let container = document.querySelector('.container')

axios.get(url)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reload(res.data)
        }
})

function reload(arr) {
    for(let item of arr) {
        container.innerHTML += `
        <div class="box">
        <h2 class="name">${item.name}</h2>
        <div class="odl">
            <span class="company">Company: ${item.company.name}</span>
            <span class="website">Website: ${item.website}</span>
            <span class="phone">Phone: ${item.phone}</span>
        </div>
        <a href="../about/about.html#${item.id}"><button>Подробнее</button></a>
    </div>
        `
}
}