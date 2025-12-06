function checkName() {
    var name = document.getElementById("name").value;
    var regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(name)) { 
        document.getElementById("Name_Check").style.color = "green";
        document.getElementById("Name_Check").innerHTML = "Ввод неверен. Вы человек?";
        return true;
    }
    else {
        document.getElementById("Name_Check").style.color = "red";
        document.getElementById("Name_Check").innerHTML = "Пожалуйста, введите имя, хотя бы 2 буквы";
        return false;
    }
}
function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^[\+]\d{1}[\-]\d{3}[\-]\d{3}[\-]\d{4}$/; 
    if (regex.test(phone)) { 
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Ввод верен";
        return true;
    }
    else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Ввод не верен! Такой номер не ссуществует";
        return false;
    }
}
function outputData() {
    var first = document.getElementById("first").value;
    var phone = document.getElementById("phone").value;
    var quantity = document.getElementById("quantity").value;
    var paymethod = document.getElementById("paymethod").value;

    if (first != "" &&  phone != "" && quantity != "") {
        document.getElementById("summ").style.color = "black";
        document.getElementById("summ").innerHTML = "Hello, " + first + " " + last + "!";
        document.getElementById("summ").innerHTML += "<p>Your order was successfully placed. We will contact you as soon as possible. You can see the details of your order below: </p>";
        document.getElementById("summ").innerHTML += "<p>Phone number: " + phone + ".</br>";
        document.getElementById("summ").innerHTML += "Number of people: " + quantity + ".</br>";
        document.getElementById("summ").innerHTML += "Payment Method: " + paymethod + ".</p>";
        document.getElementById("summ").innerHTML += "<p style='font-weight: bold;'>We are glad that You use our company's services :)</p>";
    }
    else {
        document.getElementById("summ").style.color="red";
        document.getElementById("summ").innerHTML = "Please, fill in all the fields...";
    }
}