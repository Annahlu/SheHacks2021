function Search(){
    let city = document.getElementById("cidade").value;

    if(city == "São Carlos" || city == "São carlos"){

        document.getElementById("status").innerHTML = "Estamos disponíveis na sua cidade! Aproveite nossas opções!";
        document.getElementById("mapa").innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d140784.94066812636!2d-47.98461525799531!3d-21.99027924808511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8712776c00717%3A0xd818e033f86079d2!2sEstr.%20Mun.%20Guilherme%20Scatena%2C%20S%C3%A3o%20Carlos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1635645129319!5m2!1spt-BR!2sbr' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy'></iframe>";
        //document.getElementById("btnLoja").innerHTML = "<button type='button' class='btn btn-primary' href='venda.html'> Ir para a loja </button>";
        document.getElementById("btnLoja").innerHTML =  "<a class='btn btn-primary' href='venda.html' role='button'>  Ir para a loja </a>";

    } else {
        document.getElementById("status").innerHTML = "Não estamos disponíveis na sua cidade, mas chegaremos em breve!";

        document.getElementById("mapa").innerHTML = "<button class='btn btn-primary btn-xl text-uppercase' id='sendMessageButton'> Cadastrar Cidade </button>";
    }

    //console.log("texto:" + String(city));
}