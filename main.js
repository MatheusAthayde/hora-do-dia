function main(){
    var agora = new Date()
    var hora = agora.getHours()

    var p = document.getElementById("p")
    var body = document.getElementById("body")

    if (hora > 6 && hora < 12) {
        p.innerText = `Agora são ${hora} horas. Bom Dia!`
        body.style.background = "salmon"
    }else if (hora < 18){
        p.innerText = `Agora são ${hora} horas. Boa Tarde!`
        body.style.background = "lightblue"
        body.style.color = "black"
    }else {
        p.innerText = `Agora são ${hora} horas. Boa Noite!`
        body.style.background = "midnightblue"
    }

}
main()