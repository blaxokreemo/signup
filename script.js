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
/*
function matching(field1, field2) {
    let string1 = field1.value;
    let string2 = field2.value;
    if (string1 == '' || string2 == '') {
        field1.classList.remove("error");
        field1.classList.remove("match");
        field2.classList.remove("error");
        field2.classList.remove("match");
        field1.closest('p').classList.remove("error");
        submit.setAttribute("disabled", true);
    }
    */
    
    else if (string1 == string2) {
        field1.classList.remove("error");
        field1.classList.add("match");
        field2.classList.remove("error");
        field2.classList.add("match");
        field1.closest('p').classList.remove("error");
        field1.closest('p').classList.add("match");
        submit.removeAttribute("disabled");

    }

    else {
        field1.classList.remove("match");
        field1.classList.add("error");
        field2.classList.remove("match");
        field2.classList.add("error");
        field1.closest('p').classList.remove("match");
        field1.closest('p').classList.add("error");
        submit.setAttribute("disabled", true);
    }
}

pwd.addEventListener("input", () => {matching(pwd, pwdConfirm)});
pwdConfirm.addEventListener("input", () => {matching(pwd, pwdConfirm)});
