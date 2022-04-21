//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

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
        } else if (data.media_type === "video") {
          document.querySelector("iframe").src = data.url
        }
        document.querySelector("h3").innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


/*const BREEDS_URL = "https://dog.ceo/api/breeds/list/all"

const select = document.querySelector(".breeds")

fetch(BREEDS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message; //turn the message into an object
        const breedsArray = Object.keys(breedsObject) //turn the object into an array
        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement("option")// <option></option>
            option.value = breedsArray[i] //<option value = "breed">
            option.innerText = breedsArray[i]// <option value = "breed">breed</option> adds the breed inside of the tag
            select.appendChild(option)// adds current <option> tage to the select box list of options (in the DOM)
        }
    })

select.addEventListener("change", event => {
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
    doggoInfo.assignLikes()
})

const getDoggoImg = url => {
    fetch(url)// going to the API url above
    .then(res => {
        return res.json(); // get JSON message back 
    })
    .then(data => {
        img.src = data.message; //extract message from JSON and attach to img tag as new source
    })
}

const doggoInfo = {
    likesList: ['Ice water from McDonalds','Kisses','Snuggles','Sniffing the air','Biting the wind','Trash cans','Raiding the cat box for treasure','Barking hello to friends','Stealing cat food','Sleeping in the car','Payaya','Stealing socks','New friends','Ear rubs','Sliced hot dogs','Running at top speed inside the house','Causing diversions','Bread','Sunbathing','Running through tall grass','Deep sighs','Ear scratchies','Licking people directly on the mouth','Destroying soft toys','The human bed','Squeaky toys','Sitting with (or on) people','Chicken','Going to bed after midnight',  'Puddles', 'Howling at Sirens','Staring out the window','Bubbles','Peanut butter','String cheese','Pats, rubs, and butt scritches', 'Your dirtiest, stinkiest, sweatiest clothes', 'Toys', 'Puzzles', 'Cheese', 'Bacon', 'Anything stolen off your plate', 'Swimming', 'Car Rides', 'Chasing squirrels', 'A nice, peaceful nap in a quiet spot', 'Sniffing the bushes', 'Sleeping in', 'Playing frisbee', 'Digging holes in the flower bed', 'Staring at you while pooping', 'Stealing blankets off the bed', 'Drinking out of puddles', 'Farting', 'Doing tricks', 'Agility', 'Barking at the delivery person', 'Stealing dirty laundry', 'Chewing your favorite shoe', 'Staring into space', 'Wrestling with friends', 'Going to the dog park', 'Getting as muddy as possible', 'Going on hikes', 'Annoying the cat', 'Playing tug of war', 'Waking you up at 4am for food', 'Staring at you with love', 'Sitting on your lap'],
    
    likes: "",
    },

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

    assignLikes() {
        this.likes = this.yatesShuffle(this.likesList).slice(0,2)
        document.getElementById("likes").innerHTML = `Likes: ${this.likes[0]}, ${this.likes[1]}`
    }, 
}
*/



