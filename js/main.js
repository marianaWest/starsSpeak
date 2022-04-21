
document.querySelector('button').addEventListener('click', event => {
getFetch()
stars.starsSpeak()
})

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=GEkaZxa4MZH8jn6PsceOiCweWmc1OEYt3PZ6SQEI&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === "image") {
          document.querySelector("img").src = data.hdurl
          //document.querySelector("h2").innerText = "test"
        } else if (data.media_type === "video") {
          document.querySelector("iframe").src = data.url
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}



const stars = {
  starsSayList: ["No one can stop us, for we are all made of stars", "You are enough", "keep your eyes on the stars", "without the dark, we can't see the stars", "dwell on the beauty of life", "may the stars pass through your soul", "if you love the stars you won't fear the night", "the night belongs to lovers", "the stars are alive and breathing", "do the stars gaze back at us?", "magic exists", "We are a way for the universe to know itself (Carl Sagan)", "mortals flicker and flash and fade (Neil Gailman)", "there is no easy way from the earth to the stars (Seneca)", "Stars, too, were time travelers (Ransom Riggs)", "the stars don't judge", "what you don't touch doesn't have a distance", "there is a sky somewhere above the buildings", "The stars are given, but the constellations we make (Rebecca Solnit)", "We've always been about burning stars", "When I looked up at the stars, I saw us (Jenn Bennett)", "you alone will have the stars as no one else has them (Antoine de Saint-Exupéry)", "there will be stars forever, while we sleep (Sara Teasdale)", "one must still have chaos in oneself to give birth to a star (Nietzsche)", "the history of astronomy is a history of receding horizons (E. P. Hubble)", "from what we cannot hold the stars are made (W.S. Merwin)"],
  starSays: "",

  yatesShuffle(array) {
    let m = array.length, t, i; 
    // while there remain elements to shuffle
    while (m) {
        //pick a remaining element
        i = Math.floor(Math.random() * m--);
        //and swap with the current element
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    } return array;
},

starsSpeak() {
  this.starSays = this.yatesShuffle(this.starsSayList).slice(0,1)
  document.getElementById("stars-speak").innerHTML = `${this.starSays[0]}`
}
}
