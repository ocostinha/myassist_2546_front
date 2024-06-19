function primeiraChamada() {
    fetch("http://localhost:8080/primeira_chamada").then(
        (response) => {
            console.log(response)

            response.text().then(
                (responseText) => {
                    console.log(responseText)
                }
            )

            console.log("Fora do responseText")
        }
    )

    console.log("Fora do result")
}

async function primeiraChamada2() {
    let response = await fetch("http://localhost:8080/primeira_chamada")
    console.log(response)

    await response.text().then(
        (responseText) => {
            console.log(responseText)
        }
    )

    console.log("Fora do responseText")
}

function login() {
    let usuario = document.getElementById("user").value
    let senha = document.getElementById("password").value
    let url = "http://localhost:8080/usuario/login?usuario=" + usuario + "&senha=" + senha

    fetch(url, {
        method: "POST"
    }).then(
        (response) => {
            if (response.status != 200) {
                response.json().then(
                    (errorMessage) => {
                        document.getElementById("messageError").innerHTML = errorMessage.error
                    }
                )
            } else {
                window.location.replace("./pages/admin.html")
            }
        }
    )
}

async function login2() {
    let usuario = document.getElementById("user").value
    let senha = document.getElementById("password").value
    let url = "http://localhost:8080/usuario/login?usuario=" + usuario + "&senha=" + senha

    let response = await fetch(url, {method: "POST"})

    if (response.status != 200) {
        let responseError = await response.json()
        document.getElementById("messageError").innerHTML = responseError.error
    } else {
        window.location.replace("./pages/admin.html")
    }
}