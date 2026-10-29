function fn_ValForm(){
    var sInput;
    var iUmur;
    var sMag;
    var eMail;

    var sMag = "";
    if(document.getElementById("nama").value==""){
        sMag += "\n* Anda belum mengisi nama";
    }
    if(document.getElementById("email").value==""){
        sMag += "\n* Email anda tidak tersedia";
    }
    if(document.getElementById("umur").value==""){
        sMag += "\n* Umur anda belum cukup";
    }
    if(document.getElementById("Pilihan Lomba").value==""){
        sMag += "\n* anda harus memilih lomba";
    }
    var OMail = ^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$;
    sInput = prompt("pilihan: (C)erdas Cermat, (P)uisi, (D)esain Poster", "N");
    switch(sInput){
        case "C":
            "Cerdas Cermat";
            break;
        case "P":
            "Puisi";
            break;
        case "D":
            "Desain Poster";
            break;
    }

    if(iUmur>=10 && iUmur<=18){
        if(iUmur<=14){
            alert("Kategori Junior");
        }else{
            alert("Kategori Senior");
        }
    }else{
        alert("umur anda tidak sesuai");
    }

}