/* Add event listener on both password fields
        Every time a character is typed or deleted, check the contents
        of both fields against each other

    If the contents match, add class .match
    If the contents don't match, add class .invalid

    How to prevent submission of the form if they don't match?

    Start by creating variables for each of the fields
*/

let pwd = document.querySelector('#pwd');
let pwdConfirm = document.querySelector('#pwd-confirm');

let submit = document.querySelector('#submit');

function matching() {

    if (pwd.value == '' || pwdConfirm.value == '') {
        pwd.classList.remove("error");
        pwd.classList.remove("match");
        pwdConfirm.classList.remove("error");
        pwdConfirm.classList.remove("match");
        pwd.closest('p').classList.remove("error");
        submit.setAttribute("disabled", true);
    }
    
    else if (pwd.value == pwdConfirm.value) {
        pwd.classList.remove("error");
        pwd.classList.add("match");
        pwdConfirm.classList.remove("error");
        pwdConfirm.classList.add("match");
        pwd.closest('p').classList.remove("error");
        pwd.closest('p').classList.add("match");
        submit.removeAttribute("disabled");

    }

    else {
        pwd.classList.remove("match");
        pwd.classList.add("error");
        pwdConfirm.classList.remove("match");
        pwdConfirm.classList.add("error");
        pwd.closest('p').classList.remove("match");
        pwd.closest('p').classList.add("error");
        submit.setAttribute("disabled", true);
    }
}


pwd.addEventListener("input", () => {matching()});
pwdConfirm.addEventListener("input", () => {matching()});
