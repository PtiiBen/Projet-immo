$("button").on("click", function(event, target){   // Va chercher le document submitt, et quand on clique dessus déclenche l'évenement ci-dessous
    event.preventDefault(); //Veut dire ne raffraichît pas la page
    chekEmptyInputs(); //Appelle la fonction dessous
})

function chekEmptyInputs(){
    $(".notempty").each(function (i, elt){ //notempty appelle la classe notempty dans le htlm, pour dire tel input est obligatoire, each veut dire pour tous
        if(elt.value == ""){ // Si l'élément est vide fait ça :
            $(elt).toggleClass("border-danger"); // Déclenche le border danger
            $(elt).next().toggleClass("d-none"); // En dessous ne cache plu le small
        }
    })
}

function checkMailFormat (){
    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let saisie = $("email")[0].value;
    saisie = $("email").val();
    let test = saisie.match(pattern);
}

function checkMailFormat(selector){
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let saisie = $(selector)[0].value;
    ! saisie.match(pattern) ?
        toggleInputStatus(selector, "Votre adresse email n'est pas une adresse valide !")
        : null;
}

function toggleInputStatus(selector, message){
    $(selector).toggleClass("border-danger");
    $(selector).next().toggleClass("d-none");
    message ? $(selector).next()[0].textContent = message : null;
}

function checkPasswords(){
    if($("#password")[0].value != $("#passconfirm")[0].value)
    {
        toggleInputStatus("#passconfirm", "Saississez le même mot de passe !")
    }
}
