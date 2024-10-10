function hide(element) {
    element.remove();
}


function myFunction() {
    if (document.getElementById("select").value == "Celcius") {
        convertc();

    } else {
        convertf();
    }
}

function convertc() {
    var x;
    document.getElementById("demo").innerHTML = " Degree Celcius ";
    x = (document.getElementById("c").value - 32) * 5 / 9;
    document.getElementById("f").value = Math.round(x);
}

function convertf() {
    var x;
    document.getElementById("demo").innerHTML = " Degree Fahrenheit ";
    x = document.getElementById("c").value * 9 / 5 + 32;
    document.getElementById("f").value = Math.round(x);
}