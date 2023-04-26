var nameInput = document.getElementById('favoriteCar');
var firstName = document.getElementById('fname');
var lastName = document.getElementById('lname');

document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    // console.log(nameInput.value);
    // console.log();
    // console.log(firstName.value);
    // console.log();
    // console.log(lastName.value);   

    console.log(firstName.value + " " + lastName.value + "'s favorite car is a: " + nameInput.value);
});