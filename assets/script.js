var request = new XMLHttpRequest()

request.open('GET', '', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      console.log(movie.title)
    })
  } else {
    console.log('error')
  }
}
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://open-weather13.p.rapidapi.com/city/landon");
xhr.setRequestHeader("X-RapidAPI-Key", "067618f51bmsh9d83a8b03ac8fadp1604d7jsn99230eabdb3e");
xhr.setRequestHeader("X-RapidAPI-Host", "open-weather13.p.rapidapi.com");

xhr.send(data);

