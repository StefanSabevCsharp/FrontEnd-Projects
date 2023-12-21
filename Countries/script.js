function findCountry() {

    const url = "https://restcountries.com/v2/name";

    const form = document.getElementById("form")
    const input = document.getElementById("country");
    const button = document.getElementById("button");

    button.addEventListener('click',(e) => {

        e.preventDefault();

        let country = input.value;
        
        fetch(`${url}/${country}`)
            .then(r => r.json())
            .then(result => {
               extractData(result)
            })
            .catch(err => {
                let message = document.createElement("p");
                message.textContent = "Country not found, please try again!";
                let div = document.querySelector(".container");
                div.innerHTML = "";
                div.appendChild(message);
            })
               
    });


    function extractData(array){
        
        let div = document.querySelector(".container");
        div.firstChild.remove();
        

        let obj = array[0];
        let name = obj[`name`];
        let callingCodes = obj[`callingCodes`];
        let capital = obj[`capital`];
        let spelling = obj[`altSpellings`];
        let region = obj[`region`];
        let population = obj[`population`];
        let timezones = obj[`timezones`];
        let nativeName = obj[`nativeName`];
        let flagUrl = obj[`flag`];
        //create li elements and append them to the ul element with id list and append the text with textContent
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        li.textContent = `Name: ${name}`;
        ul.appendChild(li);
        li = document.createElement("li");
        li.textContent = `Calling Code: ${callingCodes}`;
        ul.appendChild(li);
        li = document.createElement("li");
        li.textContent = `Capital: ${capital}`;
        ul.appendChild(li);
        li = document.createElement("li");
        li.textContent = `Alternative Spelling: ${spelling}`;
        ul.appendChild(li);
        li = document.createElement("li");
        li.textContent = `Region: ${region}`;
        ul.appendChild(li);
        li = document.createElement("li");
        li.textContent = `Population: ${population}`;
        ul.appendChild(li);
        li = document.createElement("li");
        li.textContent = `Timezones: ${timezones}`;
        ul.appendChild(li);
        li = document.createElement("li");
        li.textContent = `Native Name: ${nativeName}`;
        ul.appendChild(li);

        div.appendChild(ul);
        //create img element and append it to the ul element with id list
        let img = document.createElement("img");
        img.src = flagUrl;
        img.alt = "flag";
        ul.appendChild(img);
       


       

    }

}

findCountry();



