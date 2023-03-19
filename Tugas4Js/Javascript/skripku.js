/*function salam(){
    //tangkap request form
    let frm  = window.document.getElementById("formulir");
    let mahasiswa = frm.nama.value;
    /*
    logic jika mahasiswa sudah input namanya ada salam
    jika tidak input nama, maka ada pesan belum input nama 
    */
    /*if(mahasiswa != ""){
        alert("Selamat Pagi" + mahasiswa);

    }
    else{
        alert("Maaf anda belum input nama");
    }
    
}

function kosongin(){
    //tangkap request form
    let frm  = window.document.getElementById("formulir");
    frm.nama.value = "";
}*/


function Login(){
    let user = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if(user=="mimin" && pass=="mimin123"){
        alert("Selamat  Datang Mimin, Anda Administrator");
       
       
    } else if(user=="budi" && pass=="budi123"){
        alert("Selamat  Datang Budi, Anda Operator");
    }  
    else{
        alert(" Anda Gagal Login"); 
    }  
}
/*function Login(){
    let user = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if(user=="budi" && pass=="budi123"){
        
        alert("Selamat  Datang Budi, Anda Operator");
       
    } else{
        alert("Anda Gagal Login");
    }

    
    

    
}**/

// alert("Selamat  Datang Budi, Anda Operator");