var x = document.querySelector(".x")
var o = document.querySelector(".o")
var boxes = document.querySelectorAll(".box")
var buttons = document.querySelectorAll("#buttons-container button")
var messageContainer = document.querySelector("#message p")
var secondPlayer

//contador de jogadas
var player1 = 0
var player2 = 0

//adicionando o evento click
for (var i = 0; i < boxes.length; i++) {
    //quando clica na caixa
    boxes[i].addEventListener("click", function () {
        //recebe o elemento
        var el = checkEl(player1, player2)
 

        //ira verificar se a caixinha tem algum filho(x ou o)
        if (this.childNodes.length == 0) {
            //se usasse o el colocaria o proprio elemento mas como vamos reutilizar clonamos ele 
            var cloneEl = el.cloneNode(true)
            this.appendChild(cloneEl)

            //computar jogada
            if (player1 == player2) {
                player1++
            } else {
                player2++
            }
            //checar quem venceu
            checkWinCondition()
        }


    })
}

function checkEl(player1, player2) {

    //definindo quem vai jogar 
    if (player1 == player2) {
        el = x
    } else {
        el = o
    }
    return el
}

function checkWinCondition(){
    var b1 = document.getElementById("block-1")
    var b2 = document.getElementById("block-2")
    var b3 = document.getElementById("block-3")
    var b4 = document.getElementById("block-4")
    var b5 = document.getElementById("block-5")
    var b6 = document.getElementById("block-6")
    var b7 = document.getElementById("block-7")
    var b8 = document.getElementById("block-8")
    var b9 = document.getElementById("block-9")

    //horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0   ){

        var b1Child = b1.childNodes[0].className
        var b2Child = b2.childNodes[0].className
        var b3Child = b3.childNodes[0].className

        if(b1Child == "x" && b2Child == "x" &&  b3Child == "x"  ){
            alert("x win")
           // console.log(b1.childNodes[0]) essa função acessa os fihos da div pai praa chegar nas div dos broquinhos
        }else if(b1Child =="o" && b3Child =="o" &&  b2Child =="o"){
            alert("o win")
        }
    } 
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0   ){

        var b4Child = b4.childNodes[0].className
        var b5Child = b5.childNodes[0].className
        var b6Child = b6.childNodes[0].className

        if(b4Child == "x" && b5Child == "x" &&  b6Child == "x"  ){
            alert("x win")
           // console.log(b1.childNodes[0]) essa função acessa os fihos da div pai praa chegar nas div dos broquinhos
        }else if(b4Child =="o" && b5Child =="o" &&  b6Child =="o"){
            alert("o win")
        }
    }//2
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0   ){

        var b7Child = b7.childNodes[0].className
        var b8Child = b8.childNodes[0].className
        var b9Child = b9.childNodes[0].className

        if(b7Child == "x" && b8Child == "x" &&  b9Child == "x"  ){
            alert("x win")
           // console.log(b1.childNodes[0]) essa função acessa os fihos da div pai praa chegar nas div dos broquinhos
        }else if(b7Child =="o" && b8Child =="o" &&  b9Child =="o"){
            alert("o win")
        }
    }//3
    //verticau
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0   ){

        var b1Child = b1.childNodes[0].className
        var b4Child = b4.childNodes[0].className
        var b7Child = b7.childNodes[0].className

        if(b1Child == "x" && b4Child == "x" &&  b7Child == "x"  ){
            alert("x win")
           // console.log(b1.childNodes[0]) essa função acessa os fihos da div pai praa chegar nas div dos broquinhos
        }else if(b1Child =="o" && b4Child =="o" &&  b7Child =="o"){
            alert("o win")
        }
    }//1
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0   ){

        var b2Child = b2.childNodes[0].className
        var b5Child = b5.childNodes[0].className
        var b8Child = b8.childNodes[0].className

        if(b2Child == "x" && b5Child == "x" &&  b8Child == "x"  ){
            alert("x win")
           // console.log(b1.childNodes[0]) essa função acessa os fihos da div pai praa chegar nas div dos broquinhos
        }else if(b2Child =="o" && b5Child =="o" &&  b8Child =="o"){
            alert("o win")
        }
    }//2
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0   ){

        var b3Child = b3.childNodes[0].className
        var b6Child = b6.childNodes[0].className
        var b9Child = b9.childNodes[0].className

        if(b3Child == "x" && b6Child == "x" &&  b9Child == "x"  ){
            alert("x win")
           // console.log(b1.childNodes[0]) essa função acessa os fihos da div pai praa chegar nas div dos broquinhos
        }else if(b3Child =="o" && b6Child =="o" &&  b9Child =="o"){
            alert("o win")
        }
    }//3
    //diagonau
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0   ){

        var b1Child = b1.childNodes[0].className
        var b5Child = b5.childNodes[0].className
        var b9Child = b9.childNodes[0].className

        if(b1Child == "x" && b5Child == "x" &&  b9Child == "x"  ){
            alert("x win")
           // console.log(b1.childNodes[0]) essa função acessa os fihos da div pai praa chegar nas div dos broquinhos
        }else if(b1Child =="o" && b5Child =="o" &&  b9Child =="o"){
            alert("o win")
        }
    } 
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0   ){

        var b3Child = b3.childNodes[0].className
        var b5Child = b5.childNodes[0].className
        var b7Child = b7.childNodes[0].className

        if(b3Child == "x" && b5Child == "x" &&  b7Child == "x"  ){
            alert("x win")
           // console.log(b1.childNodes[0]) essa função acessa os fihos da div pai praa chegar nas div dos broquinhos
        }else if(b3Child =="o" && b5Child =="o" &&  b7Child =="o"){
            alert("o win")
        }
    } 
    //véia
    var counter = 0
    for(var i = 0;i < boxes.length  ;i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++
        }
        
    }
    if(counter == 9 ){
        alert("véia")
    }

}

/* .  l */