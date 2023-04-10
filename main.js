var classifier;
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/bkaDrKcBl/model.json", modeloCarregado);
}
function modeloCarregado(){
    classifier.classify(pegarResultados);
}
function pegarResultados(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        var vermelho=Math.floor(Math.random()*255)+1;
        var verde=Math.floor(Math.random()*255)+1;
        var azul=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="posso ouvir "+results[0].label;
        document.getElementById("result_confidence").innerHTML="precisão: "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+vermelho+","+verde+","+azul+")";
        document.getElementById("result_confidence").style.color="rgb("+vermelho+","+verde+","+azul+")";

        var imagem1 = document.getElementById("alien1");
        var imagem2 = document.getElementById("alien2");
        var imagem3 = document.getElementById("alien3");
        var imagem4 = document.getElementById("alien4");

        if(results[0].label="Palmas"){
            imagem1.src="aliens-01.gif";
            imagem2.src="aliens-02.png";
            imagem3.src="aliens-03.png";
            imagem4.src="aliens-04.png";
        }
        else if(results[0].label="Sino"){
            imagem1.src="aliens-01.png";
            imagem2.src="aliens-02.gif";
            imagem3.src="aliens-03.png";
            imagem4.src="aliens-04.png";
        }
        else if(results[0].label="Estalos"){
            imagem1.src="aliens-01.png";
            imagem2.src="aliens-02.png";
            imagem3.src="aliens-03.gif";
            imagem4.src="aliens-04.png";
        }
        else{
            imagem1.src="aliens-01.png";
            imagem2.src="aliens-02.png";
            imagem3.src="aliens-03.png";
            imagem4.src="aliens-04.gif";
        }
    }
}