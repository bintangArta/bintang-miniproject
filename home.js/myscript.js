function validateForm() {
    var name = document.forms['form']['name'].value;
    var date = document.forms['form']['date'].value;
    var gender = document.forms['form']['gender'].value;
    var message = document.forms['form']['message'].value;

    if(name == '' || date == '' || gender == '' || message == '') {
        alert('Input tidak boleh kosong');
        return;
    }

    document.getElementById('myName').innerText = name;
    document.getElementById('myDate').innerText = date;
    document.getElementById('myGender').innerText = gender;
    document.getElementById('myMessage').innerText = message;
    return false;

}

function openNav() {
    document.getElementById('navbar-side').style.width = "250px";
  }
  
function closeNav() {
    document.getElementById('navbar-side').style.width = "0";
  }