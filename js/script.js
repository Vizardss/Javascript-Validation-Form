var poprawneImieINazwisko = /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{2,}$/;
var poprawnyTelefon = /^[0-9]{9,}$/;
var poprawnyAdres = /^[\Wa-zA-Z0-9ąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{10,}$/;
var poprawneOmnie = /[\wąęśćńźżół]+/gi;
var plec = document.getElementsByName('plec');


function walidacja()
{

    document.getElementById('imie').onkeydown = function() {
        document.getElementById('bladImie').innerHTML = '';
        document.getElementById('imie').style.borderColor = 'black';
    };
    
     document.getElementById('nazwisko').onkeydown = function() {
        document.getElementById('bladNazwisko').innerHTML = '';
        document.getElementById('nazwisko').style.borderColor = 'black';
    };
    
    document.getElementById('plec').onclick = function() {
        document.getElementById('bladPlec').innerHTML = '';
        document.getElementById('plec').style.borderStyle = 'none';
    };
    
    
     document.getElementById('adres').onkeydown = function() {
        document.getElementById('bladAdres').innerHTML = '';
        document.getElementById('adres').style.borderColor = 'black';
    };
    
     document.getElementById('telefon').onkeydown = function() {
        document.getElementById('bladTelefon').innerHTML = '';
        document.getElementById('telefon').style.borderColor = 'black';
    };
    
     document.getElementById('wojewodztwa').onclick = function() {
        document.getElementById('bladWojewodztwa').innerHTML = '';
        document.getElementById('wojewodztwa').style.borderColor = 'black';
    };
    
     document.getElementById('omnie').onkeydown = function() {
        document.getElementById('bladOmnie').innerHTML = '';
        document.getElementById('omnie').style.borderColor = 'black';
    };

    document.getElementById('formularz').onsubmit = function () {

        var danePoprawne = true;

        if (!poprawneImieINazwisko.test(document.getElementById('imie').value)) {
            document.getElementById('bladImie').innerHTML = 'Wypełnij pole Imię';
            document.getElementById('imie').style.borderColor = 'red';
            danePoprawne = false;
        } else {
            document.getElementById('bladImie').innerHTML = '';
            document.getElementById('imie').style.borderColor = 'black';
        }
        
        if (!poprawneImieINazwisko.test(document.getElementById('nazwisko').value)) {
            document.getElementById('bladNazwisko').innerHTML = 'Wypełnij pole Nazwisko';
            document.getElementById('nazwisko').style.borderColor = 'red';
            danePoprawne = false;
        } else {
            document.getElementById('bladNazwisko').innerHTML = '';
            document.getElementById('nazwisko').style.borderColor = 'black';
        }
        
        if (plec[0].checked == false && plec[1].checked == false) {
            document.getElementById('bladPlec').innerHTML = 'Wybierz płeć';
            document.getElementById('plec').style.border = '1px solid red';
            danePoprawne = false;
        } else {
            document.getElementById('bladPlec').innerHTML = '';
            document.getElementById('plec').style.border = 'none';
        }
        
        if (!poprawnyAdres.test(document.getElementById('adres').value)) {
            document.getElementById('bladAdres').innerHTML = 'Wypełnij pole Adres';
            document.getElementById('adres').style.borderColor = 'red';
            danePoprawne = false;
        } else {
            document.getElementById('bladAdres').innerHTML = ' ';
            document.getElementById('adres').style.borderColor = 'black';
        }
        
        if (!poprawnyTelefon.test(document.getElementById('telefon').value)) {
            document.getElementById('bladTelefon').innerHTML = 'Wypełnij pole Numer telefonu';
            document.getElementById('telefon').style.borderColor = 'red';
            danePoprawne = false;
        } else {
            document.getElementById('bladTelefon').innerHTML = '';
            document.getElementById('telefon').style.borderColor = 'black';
        }

        if (document.getElementById('wojewodztwa').value == '') {
            document.getElementById('bladWojewodztwa').innerHTML = 'Wybierz województwo';
            document.getElementById('wojewodztwa').style.borderColor = 'red';
            danePoprawne = false;
        } else {
            document.getElementById('bladWojewodztwa').innerHTML = '';
            document.getElementById('wojewodztwa').style.borderColor = 'black';
        }

        if (document.getElementById('omnie').value === '' || document.getElementById('omnie').value.match(poprawneOmnie).length < 5) {
            document.getElementById('bladOmnie').innerHTML = 'Wypełnij pole O mnie';
            document.getElementById('omnie').style.borderColor = 'red';
            danePoprawne = false;
        } else {
            document.getElementById('bladOmnie').innerHTML = '';
            document.getElementById('omnie').style.borderColor = 'black';
        }

        return danePoprawne;
    }
};

window.onload = function()
{
	walidacja();
};