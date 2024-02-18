
let btn = document.getElementById("btn");

btn.addEventListener('click', showflag);

function showflag(e) {

    
    const container = document.getElementById('flag-container');
    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = '';
    let h3 = document.getElementById("guess-country");
    container.innerHTML = '';
    h3.innerHTML = '';
    btn.style.display = "none";

    fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countries = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * data.length);
      countries.push(data[randomIndex]);
    }

    // Избор на правилния отговор
    const correctCountry = countries[Math.floor(Math.random() * 3)];
    

    const correctAnswer = document.createElement('h1');
    correctAnswer.textContent =correctCountry.name.common;
    let h3 = document.getElementById("guess-country");
    h3.appendChild(correctAnswer);
    let result = document.createElement('h4');

    countries.forEach(country => {
      if (country === correctCountry) return;
      const flag = document.createElement('img');
      flag.src = country.flags.png;
      flag.addEventListener('click', () => {
        result.textContent = `Wrong Answer! That is the flag of : ${country.name.common}.
         Please try again.`;
        result.style.color = "red";
        flag.style.pointerEvents = "none";
        
      });
      container.appendChild(flag);
    });

    const correctFlag = document.createElement('img');
    correctFlag.src = correctCountry.flags.png;
    correctFlag.addEventListener('click', () => {
        result.textContent = "Correct Answer!";
        result.style.color = "green";
        btn.style.display = "block";
      let newDiv = document.createElement('div');
      newDiv.innerHTML = `
          <h2>${correctCountry.name.common}</h2>
          <p><strong>Population:</strong> ${correctCountry.population}</p>
          <p><strong>Area:</strong> ${correctCountry.area} km<sup>2</sup></p>
          <p><strong>Languages:</strong> ${Object.values(correctCountry.languages).join(', ')}</p>
          <p><strong>Currencies:</strong>${(Object.values(correctCountry.currencies))[0].name}</p>
         
        `;
      infoDiv.appendChild(newDiv);
      infoDiv.appendChild(btn);
      correctFlag.style.pointerEvents = "none";

      
    });
    h3.appendChild(result);
    container.appendChild(correctFlag);
  })
  .catch(error => console.error('Error fetching random countries:', error));

 

  

}