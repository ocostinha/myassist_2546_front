async function cadastrarOs() {
    const form = document.getElementById("dados")
    const formData = new FormData(form)

    const resultado = await fetch("http://localhost:8080/os", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })

    if (resultado.status != 201) {
        const responseError = await resultado.text()

        document.getElementById("messageError").innerHTML = responseError
        document.getElementById("messageError").style.color = "red"
    } else {
        limparCampos()
    }
}

function limparCampos() {
    document.getElementById("proprietario").value = ""
    document.getElementById("tipoEquipamento").value = 0
    document.getElementById("entradaLab").value = ""
    document.getElementById("defeito").value = ""
    document.getElementById("previsaoEntrega").value = ""
    document.getElementById("statusConcerto").value = 0
    document.getElementById("observacoes").value = ""
}

async function consultarTodasOs() {
    const osCadastradas = await fetch("http://localhost:8080/os")

    if (osCadastradas.status == 200) {
        const table = document.getElementById("tabelaOs")
        const tbody = table.getElementsByTagName("tbody")[0]
        const body = await osCadastradas.json()

        tbody.innerHTML = ""

        body.forEach(os => {
            const newRow = tbody.insertRow()

            const newColumnId = newRow.insertCell()
            const newColumnIdText = document.createTextNode(os.id)
            newColumnId.appendChild(newColumnIdText)

            const newColumnProprietario = newRow.insertCell()
            const newColumnProprietarioText = document.createTextNode(os.proprietario)
            newColumnProprietario.appendChild(newColumnProprietarioText)

            const newColumnEntradaLab = newRow.insertCell()
            const newColumnEntradaLabText = document.createTextNode(os.entradaLab)
            newColumnEntradaLab.appendChild(newColumnEntradaLabText)

            const newColumnDefeito = newRow.insertCell()
            const newColumnDefeitoText = document.createTextNode(os.defeito)
            newColumnDefeito.appendChild(newColumnDefeitoText)

            const newColumnEntrega = newRow.insertCell()
            const newColumnEntregaText = document.createTextNode(os.previsaoEntrega)
            newColumnEntrega.appendChild(newColumnEntregaText)

            const newColumnStatus = newRow.insertCell()
            const newColumnStatusText = document.createTextNode(os.statusConcerto)
            newColumnStatus.appendChild(newColumnStatusText)

            const newColumnObservacoes = newRow.insertCell()
            const newColumnObservacoesText = document.createTextNode(os.observacoes)
            newColumnObservacoes.appendChild(newColumnObservacoesText)

            const newColumnSistema = newRow.insertCell()
            const newColumnSistemaText = document.createElement("a")
            newColumnSistemaText.appendChild(document.createTextNode("Alterar"))
            newColumnSistemaText.href="#"
            newColumnSistemaText.onclick=function () {
                return consultarOsPorId(os.id)
            }
            newColumnSistema.appendChild(newColumnSistemaText)
        })
    }
}

async function consultarOsPorId(id) {
    const url = "http://localhost:8080/os" + id
    const result = await fetch(url)

    {
        "id": 0,
        "proprietario": "string",
        "tipoEquipamento": "string",
        "entradaLab": "2024-06-19",
        "defeito": "string",
        "previsaoEntrega": "2024-06-19",
        "statusConcerto": "string",
        "observacoes": "string"
    }
}

async function consultarTodasOs2() {
    const osCadastradas = await fetch("http://localhost:8080/os")

    if (osCadastradas.status == 200) {
        const tbody = document
            .getElementById("tabelaOs")
            .getElementsByTagName("tbody")[0]

        const body = await osCadastradas.json()

        tbody.innerHTML = ""

        body.forEach(os => {
            const newRow = tbody.insertRow()

            newRow.insertCell().appendChild(document.createTextNode(os.id))
            newRow.insertCell().appendChild(document.createTextNode(os.proprietario))
            newRow.insertCell().appendChild(document.createTextNode(os.entradaLab))
            newRow.insertCell().appendChild(document.createTextNode(os.defeito))
            newRow.insertCell().appendChild(document.createTextNode(os.previsaoEntrega))
            newRow.insertCell().appendChild(document.createTextNode(os.statusConcerto))
            newRow.insertCell().appendChild(document.createTextNode(os.observacoes))
        })
    }
}