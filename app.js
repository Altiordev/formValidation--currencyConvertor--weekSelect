const form = document.querySelector('.form'),
    phone = document.getElementById('phone'),
    password = document.querySelectorAll('.password'),
    requiredPhone = document.querySelector('.requiredPhone'),
    requiredPassword = document.getElementById('requiredPassword');;
const patternForPhone = /^\d{3}-\d{2}-\d{3}-\d{2}-\d{2}$/;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!patternForPhone.test(phone.value)) {
        requiredPhone.textContent = 'Example: 998-90-123-45-67';
        requiredPhone.classList.add('red');
        phone.classList.add('red_border');
    } else {
        requiredPhone.textContent = 'Phone Number';
        requiredPhone.classList.remove('red');
        phone.classList.remove('red_border');
    }

    if (password[0].value != password[1].value) {
        password[0].classList.add('red_border');
        password[1].classList.add('red_border');
        requiredPassword.textContent = 'The password you entered does not match';
        requiredPassword.classList.add('red');
    } else {
        password[0].classList.remove('red_border');
        password[1].classList.remove('red_border');
        requiredPassword.textContent = '';
    }

    phone.value = '';
    password[0].value = '';
    password[1].value = '';
})


const uzs = document.querySelector('.uzs'),
    usd = document.querySelector('.usd'),
    eur = document.querySelector('.eur'),
    uzs2 = document.querySelector('.uzs2'),
    usd2 = document.querySelector('.usd2'),
    eur2 = document.querySelector('.eur2'),
    uzs3 = document.querySelector('.uzs3'),
    usd3 = document.querySelector('.usd3'),
    eur3 = document.querySelector('.eur3'),
    uzsToUsdArea = document.querySelector('.uzsToUsd'),
    uzsToEurArea = document.querySelector('.uzsToEur'),
    usdToUzsArea = document.querySelector('.usdToUzs'),
    usdToEurArea = document.querySelector('.usdToEur'),
    eurToUzsArea = document.querySelector('.eurToUzs'),
    eurToUsdArea = document.querySelector('.eurToUsd'),
    btnExchange = document.querySelector('.btn_exchange');

let usdToUzs = 11360,
    usdToEur = 0.95,
    eurToUsd = 1.06,
    eurToUzs = 11980,
    uzsToUsd = 0.000088,
    uzsToEur = 0.000083;


btnExchange.addEventListener('click', () => {
    usd.value = (+uzs.value / usdToUzs).toFixed(1);
    eur.value = (+uzs.value / eurToUzs).toFixed(1);

    uzs2.value = (+usd2.value / uzsToUsd).toFixed(1);
    eur2.value = (+usd2.value / eurToUsd).toFixed(1);

    uzs3.value = (+eur2.value / uzsToEur).toFixed(1);
    usd3.value = (+eur2.value / usdToEur).toFixed(1);

    uzsToUsdArea.textContent = `1 so‘m = ${uzsToUsd} $`
    uzsToEurArea.textContent = `1 so‘m = ${uzsToEur} €`

    usdToUzsArea.textContent = `1$ = ${usdToUzs} so‘m`
    usdToEurArea.textContent = `1$ = ${usdToEur} €`

    eurToUzsArea.textContent = `1€ = ${eurToUzs} so‘m`
    eurToUsdArea.textContent = `1€ = ${eurToUsd} $`

    console.log(uzs[0].value);
    console.log(usd[3].value);
})

const selectWeek = document.querySelector('.select_week'),
    day = document.querySelector('.day'),
    btnWeek = document.querySelector('.btn_week');

btnWeek.addEventListener('click', () => {
    switch (true) {
        case selectWeek.value == 1:
            day.textContent = 'Monday';
            break;
        case selectWeek.value == 2:
            day.textContent = 'Tuesday';
            break;
        case selectWeek.value == 3:
            day.textContent = 'Wednesday';
            break;
        case selectWeek.value == 4:
            day.textContent = 'Thursday';
            break;
        case selectWeek.value == 5:
            day.textContent = 'Friday';
            break;
        case selectWeek.value == 6:
            day.textContent = 'Saturday';
            break;
        case selectWeek.value == 7:
            day.textContent = 'Sunday';
            break;

        default:
            break;
    }
})