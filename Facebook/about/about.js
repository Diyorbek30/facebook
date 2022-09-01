let url = "http://localhost:3001"
let cont = document.querySelector('.cont')
let id = window.location.href.split('#').at(-1)
let h1 = document.querySelector('.user')


axios.get(url + "/boxes?id=" + id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            let of = res.data[0]
            let box = document.querySelector('.box')
            h1.innerHTML = `User: ${of.id} - ${of.name}`
            box.innerHTML = `
            <p class="name">${of.name}</p>
            <p class="name">${of.username}</p>
            <div class="odl">
                <span class="company">Company: ${of.company.name}</span>
                <span class="website">Website: ${of.website}</span>
                <span class="phone">Phone: ${of.phone}</span>
            </div>
            `

        }
})
