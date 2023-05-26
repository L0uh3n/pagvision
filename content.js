// alert("content.js funcionando! :D")

function inputs() {
    let input = document.getElementsByTagName("input");
    let select = document.getElementsByTagName("select");

    for (let cont = 0; cont < select.length; cont++) {
        console.log(select[cont].id);
        console.log(select[cont].name);

        if (select[cont].id.toLocaleLowerCase().includes("day") || select[cont].name.toLocaleLowerCase().includes("day")) {
            select[cont].value = "2"
        }
        if (select[cont].id.toLocaleLowerCase().includes("month") || select[cont].name.toLocaleLowerCase().includes("month")) {
            select[cont].value = "11"
        }
        if (select[cont].id.toLocaleLowerCase().includes("year") || select[cont].name.toLocaleLowerCase().includes("year")) {
            select[cont].value = "2003"
        }
        if (select[cont].id.toLocaleLowerCase().includes("state") || select[cont].name.toLocaleLowerCase().includes("state")) {
            select[cont].value = "RN"
        }
    }

    for (let index = 0; index < input.length; index++) {
        console.log(input[index].id);
        console.log(input[index].type);
        console.log(input[index].name);

        if (input[index].id.toLowerCase().includes("email") || input[index].type == "email" || input[index].name.toLowerCase().includes("email")) {
            input[index].value = "apenaslh@gmail.com";
        }
        if (input[index].id.toLowerCase().includes("pass") || input[index].type == "password" || input[index].name.toLowerCase().includes("pass")) {
            input[index].value = "12345678";
        }
        if (input[index].id.toLowerCase().includes("phone") || input[index].name.toLowerCase().includes("phone")) {
            input[index].value = "84981702904"
        }
        if (input[index].id.toLowerCase().includes("address") || input[index].name.toLowerCase().includes("address")) {
            input[index].value = "Sítio Lagoa Grande, RN 160"
        }
        if (input[index].id.toLowerCase().includes("city") || input[index].name.toLowerCase().includes("city")) {
            input[index].value = "Lagoa de Pedras"
        }
        if (input[index].id.toLowerCase().includes("postal") || input[index].name.toLowerCase().includes("postal")) {
            input[index].value = "70050030020"
        }
        if (input[index].id.toLowerCase().includes("name") || input[index].name.toLowerCase().includes("name")) {
            input[index].value = "Luiz Henrique do Nascimento de Macedo Silva"
        }
        if (input[index].id.toLowerCase().includes("firstname") || input[index].name.toLowerCase().includes("firstname")) {
            input[index].value = "Luiz Henrique"
        }
        if (input[index].id.toLowerCase().includes("lastname") || input[index].name.toLowerCase().includes("lastname")) {
            input[index].value = "do Nascimento de Macedo Silva"
        }
        if (input[index].id.toLowerCase().includes("state") || input[index].name.toLowerCase().includes("state")) {
            input[index].value = "Rio Grande do Norte"
        }
    }
}

setTimeout(inputs, 3000)