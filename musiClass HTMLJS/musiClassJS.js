function criaForm(){
    var form = document.getElementById("form")
    var campoUser = document.createElement("input")
    campoUser.setAttribute("type","text")
    campoUser.setAttribute("name","user")
    campoUser.setAttribute("placeholder","Digite o nome de usuario")
    form.appendChild(campoUser)
    form.appendChild(document.createElement("br"))


    var campoDate = document.createElement("input")
    campoDate.setAttribute("type","date");
    campoDate.setAttribute("name","age")
    campoDate.setAttribute("placeholder","Data do Nascimento")
    form.appendChild(campoDate)
    form.appendChild(document.createElement("br"))

    var campoMail = document.createElement("input")
    campoMail.setAttribute("type","email");
    campoMail.setAttribute("name","mail")
    campoMail.setAttribute("placeholder","Digite o email para contato")    
    form.appendChild(campoMail)
    form.appendChild(document.createElement("br"))



    var checkGuit1 = document.createElement("input")
    checkGuit1.setAttribute("type","checkbox")
    checkGuit1.setAttribute("name","guit1")
    checkGuit1.setAttribute("id","guit1")
    form.appendChild(checkGuit1)
    form.appendChild(document.createTextNode("Guitarra Elétrica"));

    var checkGuit2 = document.createElement("input")
    checkGuit2.setAttribute("type","checkbox")
    checkGuit2.setAttribute("name","guit2")
    checkGuit2.setAttribute("id","guit2")
    form.appendChild(checkGuit2)
    form.appendChild(document.createTextNode("Violão"));


    var checkDrum = document.createElement("input")
    checkDrum.setAttribute("type","checkbox")
    checkDrum.setAttribute("name","drum")
    checkDrum.setAttribute("id","drum")
    form.appendChild(checkDrum)
    form.appendChild(document.createTextNode("Bateria"));


    var checkBass = document.createElement("input")
    checkBass.setAttribute("type","checkbox")
    checkBass.setAttribute("name","bass")
    checkBass.setAttribute("id","bass")
    form.appendChild(checkBass)
    form.appendChild(document.createTextNode("Contra-Baixo"));


    var checkPiano = document.createElement("input")
    checkPiano.setAttribute("type","checkbox")
    checkPiano.setAttribute("name","piano")
    checkPiano.setAttribute("id","piano")
    form.appendChild(checkPiano)
    form.appendChild(document.createTextNode("Piano"));

    form.appendChild(document.createElement("br"))


    var campoSen1 = document.createElement("input")
    campoSen1.setAttribute("type","password");
    campoSen1.setAttribute("name","sen1")
    campoSen1.setAttribute("placeholder","Crie uma nova senha")
    form.appendChild(campoSen1)

    form.appendChild(document.createElement("br"))


    var campoSen2 = document.createElement("input")
    campoSen2.setAttribute("type","password");
    campoSen2.setAttribute("name","sen2")
    campoSen2.setAttribute("placeholder","Digite a senha novamente")
    form.appendChild(campoSen2)

    form.appendChild(document.createElement("br"))
    form.appendChild(document.createElement("br"))

}


function verifCred(){
    //const sen1 = document.querySelector('input[name=sen1]');
    //const  sen2= document.querySelector('input[name=sen2]');
    var sen1 = document.forms["form"]["sen1"].value;
    var sen2 = document.forms["form"]["sen2"].value;
    var user = document.forms["form"]["user"].value;
    var age = document.forms["form"]["age"].value;
    var mail = document.forms["form"]["mail"].value;
    //var guit1 = document.getElementById('guit1');
    const guit1 = document.querySelector('input[name=guit1]')
    const guit2 = document.querySelector('input[name=guit2]')
    const drum = document.querySelector('input[name=drum]')
    const bass = document.querySelector('input[name=bass]')
    const piano = document.querySelector('input[name=piano]')

    if(user === ""){
        alert("Todos os campos precisam ser preenchidos!");
        return;
    }else{
        if(age === ""){
            alert("Todos os campos precisam ser preenchidos!");
            return;
        }else{
            if(age >= '2013-01-01'){
                alert("O aluno não preenche os requisitos necessários!")
                return;
            }else{
            if(mail === ""){
                alert("Todos os campos precisam ser preenchidos!");
                return;
                }else{
                if(sen1 === ""){
                    alert("Todos os campos precisam ser preenchidos!");
                    return;
                }else{
                    if(sen1 !== sen2){
                        alert("Senha incorreta!");
                        return;
                    }else{
                    console.log("Senha correta!");
                    }   }
                }
            }
        }
    }

    if(guit1.checked == false){
        if(guit2.checked == false){
            if(drum.checked == false){
                if(bass.checked == false){
                    if(piano.checked == false){
                        alert("Nenhum instrumento foi selecionado!")
                        return;
                    }}}}
    }
   
    var arrayiInstrumentos = []
    
    if(guit1.checked == true){
        arrayiInstrumentos.push('Guitarra Elétrica');
    }
    if(guit2.checked == true){
        arrayiInstrumentos.push('Violão');
    }
    if(drum.checked == true){
        arrayiInstrumentos.push('Bateria');
    }
    if(bass.checked == true){
        arrayiInstrumentos.push('Contra-Baixo');
    }
    if(piano.checked == true){
        arrayiInstrumentos.push('Piano');
    }
    var aluno  = {
        "nome" : user,
        "email" : mail,
        "idade" : age,
        "senha" : sen1,
        "instrumentos" : arrayiInstrumentos
    }
                    
    
    /*console.log(aluno);*/ 
    tabela(aluno);
}
function tabela(a) {
    var tabela = document.getElementById('tbCadastro');
    var linha = tabela.insertRow();
    linha.insertCell().innerHTML = a.nome;
    linha.insertCell().innerHTML = a.email;
    linha.insertCell().innerHTML = a.instrumentos;
}
 