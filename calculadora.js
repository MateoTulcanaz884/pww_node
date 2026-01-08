function sumar(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    
    if(n1>0 && n2>0){
        let sumar=n1+n2;
        document.getElementById("resultado").innerHTML="la suma es: "+sumar;
    }
}