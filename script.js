
function checkName() {
   let first = document.getElementById("first").value;
   let regex = /^[А-Яа-яЁё\s]{2,15}$/;

    if (regex.test(first)) { 
        document.getElementById("Name_Check").innerHTML = "Ввод верен";
        return true;
    }
    else {
        document.getElementById("Name_Check").style.color = "red";
        document.getElementById("Name_Check").innerHTML = "Пожалуйста, введите имя, хотя бы 2 буквы";
        return false;
    }
}
function checkPhone() {
    let phone = document.getElementById("phone").value;
    let regex = /^[\+]\d{1}[\-]\d{3}[\-]\d{3}[\-]\d{4}$/; 
    if (regex.test(phone)) { 
        document.getElementById("phone_Check").innerHTML = "Ввод верен";
        return true;
    }
    else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Пожалуйста, введите номер по образцу";
        return false;
    }
}
function resulData() {
    let first = document.getElementById("first").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let dateAndTime = date + " в " + time;
    let service = document.getElementById("service").value;
    if (first != "" && phone != "" && date != "" && time != "" && service != "") {
        alert("Привет, " + first + ". Ваша запись принята. Мы свяжемся с вами в скором времени. Далее будут переслены детали вашей записи. Ваш номер телефона: "+ phone+ ". Выбранная вами услуга: " +service + ". Дата и время записи: "+dateAndTime+".")
    }
    else {
        
    }
}
    flag.onclick = function() {
      let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        flag.style.left = timePassed / 2 + 'px';

        if (timePassed > 200) clearInterval(timer);

      }, 9);
    }
const myPara = document.
            getElementById('para');

        // Function to add animation
        function animatePara() {
            myPara.classList.add('animate');
        }

        // Function to remove animation
        function removeAnimation() {
            myPara.classList.remove('animate');
        }

        // Attaching functions with events
        // to add and remove animation
        myPara.addEventListener('mouseover', () => {
            setTimeout(animatePara, 100);
        })
        myPara.addEventListener('mouseout', () => {
            setTimeout(removeAnimation, 100);
        })