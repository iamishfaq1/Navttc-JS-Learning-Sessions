// // 1. Fetch and display data from a local file
// function fetchLocalFile() {
//   axios.get("sample.txt")
//     .then(res => {
//       document.getElementById("result").innerText = res.data;
//     })
//     .catch(() => {
//       document.getElementById("result").innerText = "Could not load file.";
//     });
// }

// 2. Fetch Namaz Times
function fetchNamazTimes() {
  const url = "https://api.aladhan.com/v1/timingsByCity?city=Islamabad&country=Pakistan&method=2";

  axios.get(url)
    .then(res => {
      const response = res.data;
      if (response.code === 200 && response.data && response.data.timings) {
        const t = response.data.timings;
        let html = `
          <strong>Namaz Times for Islamabad, Pakistan</strong>
          <ul>
            <li>Fajr: ${t.Fajr}</li>
            <li>Dhuhr: ${t.Dhuhr}</li>
            <li>Asr: ${t.Asr}</li>
            <li>Maghrib: ${t.Maghrib}</li>
            <li>Isha: ${t.Isha}</li>
            <li>Sunrise: ${t.Sunrise}</li>
            <li>Sunset: ${t.Sunset}</li>
          </ul>
        `;
        document.getElementById("result").innerHTML = html;
      } else {
        document.getElementById("result").innerText = "Could not fetch Namaz times.";
      }
    })
    .catch(err => {
      document.getElementById("result").innerText = "Error: " + err;
    });
}

// 3. Fetch list of posts
function fetchPosts() {
  axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(res => {
      const posts = res.data;
      let html = "<strong>Posts List:</strong><ul>";
      posts.forEach(post => {
        html += `<li><strong>${post.title}</strong><br>${post.body}</li>`;
      });
      html += "</ul>";
      document.getElementById("result").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("result").innerText = "Error: " + err;
    });
}

// 4. Fetch a random post
function fetchPost() {
  const postId = Math.floor(Math.random() * 100) + 1;
  axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => {
      const post = res.data;
      let html = `
        <strong>Post Title:</strong> ${post.title}<br>
        <strong>Body:</strong> <br>${post.body}
      `;
      document.getElementById("result").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("result").innerText = "Error: " + err;
    });
}

// 5. Fetch a random user
function fetchUser() {
  axios.get("https://randomuser.me/api/")
    .then(res => {
      const user = res.data.results[0];
      let html = `
        <strong>Name:</strong> ${user.name.first} ${user.name.last}<br>
        <strong>Email:</strong> ${user.email}<br>
        <img src="${user.picture.medium}" alt="User Picture">
      `;
      document.getElementById("result").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("result").innerText = "Error: " + err;
    });
}

// 6. Check Nationality
function checkNationality() {
  const name = document.getElementById("getName").value.trim();
  if (!name) {
    document.getElementById("result").innerText = "Please enter a name.";
    return;
  }

  axios.get(`https://api.nationalize.io/?name=${name}`)
    .then(res => {
      const response = res.data;
      if (response && response.country && response.country.length > 0) {
        let html = `<strong>Predicted Nationalities for: ${response.name}</strong><ul>`;
        response.country.forEach(c => {
          html += `<li>Country: ${c.country_id} — Probability: ${(c.probability * 100).toFixed(2)}%</li>`;
        });
        html += "</ul>";
        document.getElementById("result").innerHTML = html;
      } else {
        document.getElementById("result").innerText = "No nationality data found.";
      }
    })
    .catch(err => {
      document.getElementById("result").innerText = "Error: " + err;
    });
}

// 7. Fetch a random dog image
function fetchDog() {
  axios.get("https://dog.ceo/api/breeds/image/random")
    .then(res => {
      if (res.data.status === "success") {
        document.getElementById("dogResult").innerHTML = `
          <img src="${res.data.message}" alt="Random Dog" style="max-width:300px; border-radius:8px;">
        `;
      } else {
        document.getElementById("dogResult").innerText = "Failed to fetch dog image.";
      }
    })
    .catch(err => {
      document.getElementById("dogResult").innerText = "Error: " + err;
    });
}
