function updateCity(event) {
    setInterval(function () {
      let cityTimeZone = event.target.value;
      if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
      }
  
      let cityName = cityTimeZone.replace("_", " ").split("/")[1];
      let cityTime = moment().tz(cityTimeZone);
      let citiesElement = document.querySelector("#city");
      citiesElement.innerHTML = `
          <div class="city">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )}<small>${cityTime.format(" A")}</small></div>
          </div>
          <div class="viewAllLink">
          <a href="/">View all cities</a> </div>
          `;
    }, 1000);
  }

  setInterval(function () {
    let pagoElement = document.querySelector("#pago-pago");
    if (pagoElement) {
      let pagoDateElement = pagoElement.querySelector(".date");
      let pagoTimeElement = pagoElement.querySelector(".time");
      let pagoTime = moment().tz("Pacific/Pago_Pago");
  
      pagoDateElement.innerHTML = pagoTime.format("MMMM Do YYYY");
      pagoTimeElement.innerHTML = pagoTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }

    let copenhagenElement = document.querySelector("#copenhagen");
    if (copenhagenElement) {
      let copenhagenDateElement = copenhagenElement.querySelector(".date");
      let copenhagenTimeElement = copenhagenElement.querySelector(".time");
      let copenhagenTime = moment().tz("Europe/Copenhagen");
  
      copenhagenDateElement.innerHTML = copenhagenTime.format("MMMM Do YYYY");
      copenhagenTimeElement.innerHTML = copenhagenTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }

    let aucklandElement = document.querySelector("#auckland");
    if (aucklandElement) {
      let aucklandDateElement = aucklandElement.querySelector(".date");
      let aucklandTimeElement = aucklandElement.querySelector(".time");
      let aucklandTime = moment().tz("Pacific/Auckland");
  
      aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
      aucklandTimeElement.innerHTML = aucklandTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }

}, 1000);

let citiesSelectElement = document.querySelector("#selectCity");

citiesSelectElement.addEventListener("change", updateCity)