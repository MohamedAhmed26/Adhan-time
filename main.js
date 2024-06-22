// Change City name when select changed
let select = document.querySelector("select");
playApi("Tanta");
select.addEventListener("change", eo => {
    let mainCity = document.getElementsByClassName("city")[0];
    let selectName = select.value;
    mainCity.innerText = selectName;

    // Open fun playApi
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
function playApi(cityNamee) {
    let params = {
        country: "EG",
        city: cityNamee,
    };
    axios.get("http://api.aladhan.com/v1/timingsByCity?country=EG&city=Tanta", {
            params: params,
        })
        .then((response) => {
            let mainDate = document.getElementsByClassName("date")[0];
            let timing = response.data.data.timings;
            let dayDate = response.data.data.date.gregorian.date;
            let dayName = response.data.data.date.hijri.weekday.ar;
            mainDate.innerText = `${dayName} - ${dayDate}`;
            fajr.innerText = timing.Fajr;
            shrouq.innerText = timing.Sunrise;
            dohr.innerText = timing.Dhuhr;
            asr.innerText = timing.Asr;
            magrb.innerText = timing.Maghrib;
            ashaa.innerText = timing.Isha;
        })
        .catch((error) => {
            console.log(error);
        });
}

/*  اسماء البلاد من ترجمة جوجل وموقع ايزو العالمي
https://www.iso.org/obp/ui/#iso:code:3166:EG*/
