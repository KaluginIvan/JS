var valid = true;

firstName = "";
middleName = "";
secondName = "";
email = "";
username = "";
password = "";
repeatPassword = "";
gender = "";
city = "";

$('#GenderRadio input').click(function(){
    gender = $(this).val();
})

$('#eventForm').submit(function(e){
    e.preventDefault();
    validate();
    if(valid)
        myAJAX();
})

$('#cityVariable li').click(function(){
    $('#cityChoosen').text($(this).text());
    city = $(this).text();
})

function validate(){
    valid = true;

    var ck_name = /^[A-Za-z0-9 ]{3,20}$/
    var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    var ck_username = /^[A-Za-z0-9_]{1,20}$/
    var ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/

    firstName = $('#eventForm #firstName').val();
    middleName = $('#eventForm #middleName').val();
    secondName = $('#eventForm #secondName').val();
    email = $('#eventForm #email').val();
    username = $('#eventForm #username').val();
    password = $('#eventForm #password').val();
    repeatPassword = $('#eventForm #repeatPassword').val();

    errors = [];

    if (firstName.search(ck_name) == -1) {
        errors[errors.length] = "Not Valid FirstName";
    }

    if (middleName.search(ck_name) == -1) {
        errors[errors.length] = "Not Valid MiddleName";
    }

    if (secondName.search(ck_name) == -1) {
        errors[errors.length] = "Not Valid SecondName";
    }

    if (gender == "")
    {
        errors[errors.length] = "Select gender";
    }

    if (city == "Choose city")
    {
        errors[errors.length] = "Select city";
    }

    if (email.search(ck_email) == -1) {
        errors[errors.length] = "Not Valid Email";
    }

    if (username.search(ck_username) == -1) {
        errors[errors.length] = "Not Valid Username";
    }

    if (password.search(ck_password) == -1) {
        errors[errors.length] = "Not Valid Password ";
    }

    if (repeatPassword != password) {
        errors[errors.length] = "Passwords must be equal ";
    }

    if (errors.length > 0) {

        reportErrors(errors);
        valid = false;
    }
}

function reportErrors(errors){
    var msg = "Please Enter Valide Data...\n";
    for (var i = 0; i<errors.length; i++) {
        var numError = i + 1;
        msg += "\n" + numError + ". " + errors[i];
    }
    alert(msg);
}

function myAJAX()
{
    jQuery.ajax( {
        type: 'POST',
        url: 'ajax.php',
        async: true,
        data: {
           'firstName':firstName,
           'middleName':middleName,
           'secondName':secondName,
           'gender': gender,
           'city': city,
           'email':email,
           'login':username,
           'password':password
        },
        success: function(server_response) {
            alert(server_response);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
}