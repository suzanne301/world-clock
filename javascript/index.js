function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");


  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = moment().format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");


  // Kathmandu
  let kathmanduElement = document.querySelector("#kathmandu");
  let kathmanduDateElement = kathmanduElement.querySelector(".date");
  let kathmanduTimeElement = kathmanduElement.querySelector(".time");
  let kathmanduTime = moment().tz("Asia/Kathmandu");

  kathmanduDateElement.innerHTML = moment().format("MMMM Do YYYY");
  kathmanduTimeElement.innerHTML = kathmanduTime.format("h:mm:ss [<small>]A[</small>]");


  // Oslo
  let osloElement = document.querySelector("#oslo");
  let osloDateElement = osloElement.querySelector(".date");
  let osloTimeElement = osloElement.querySelector(".time");
  let osloTime = moment().tz("Europe/Oslo");

  osloDateElement.innerHTML = moment().format("MMMM Do YYYY");
  osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);