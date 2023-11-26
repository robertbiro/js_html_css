const btnE = document.getElementById("btn")

const birthdayE = document.getElementById("birthday")

const resultEl = document.getElementById("result");

function calculateAge() {
    console.log("clicked")
    const birthdayValue = birthdayE.value;
    if(birthdayE === "") {
        alert("Please enter your birthday")
    } else {
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old.`
        console.log(age);
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() -birthdayDate.getMonth();
    console.log(birthdayDate.getFullYear());
    console.log(currentDate.getFullYear());
    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }

    return age;
}

btnE.addEventListener("click", calculateAge)