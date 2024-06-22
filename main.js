// Change City name when select changed
let select = document.querySelector(".sel");
playApi("طنطا");

select.addEventListener("change", () => {
    let mainCity = document.querySelector(".city");
    let selectName = select.value;
    mainCity.innerText = selectName;

    if (select.value == "طنطا") {
        playApi("Tanta");
    } else if (select.value == "اسكندريه") {
        playApi("Alexandria");
    } else if (select.value == "القاهره") {
        playApi("Cairo");
    } else if (select.value == "دمياط") {
        playApi("Dumyāţ");
    } else if (select.value == "المنصوره") {
        playApi("Mansoura");
    } else if (select.value == "مرسي مطروح") {
        playApi("Maţrūḩ");
    } else if (select.value == "المنيا") {
        playApi("Minyā");
    } else if (select.value == "أسوان") {
        playApi("Aswan");
    } else if (select.value == "شبين الكوم") {
        playApi("Shbeen El Koom");
    }
});

// Api adan
function playApi(cityName) {
    let params = {
        country: "EG",
        city: cityName,
    };

    axios.get("https://api.aladhan.com/v1/timingsByCity", {
            params: params,
        })
        .then((response) => {
            let mainDate = document.querySelector(".date");
            let timing = response.data.data.timings;
            let dayDate = response.data.data.date.gregorian.date;
            let dayName = response.data.data.date.hijri.weekday.ar;
            mainDate.innerText = `${dayName} - ${dayDate}`;
            document.getElementById('fajr').innerText = timing.Fajr;
            document.getElementById('shrouq').innerText = timing.Sunrise;
            document.getElementById('dohr').innerText = timing.Dhuhr;
            document.getElementById('asr').innerText = timing.Asr;
            document.getElementById('magrb').innerText = timing.Maghrib;
            document.getElementById('ashaa').innerText = timing.Isha;
        })
        .catch((error) => {
            console.log(error);
        });
}

/* اسماء البلاد من ترجمة جوجل وموقع ايزو العالمي
https://www.iso.org/obp/ui/#iso:code:3166:EG */
