(function (countries) {
    var inputField = $("input[name=country]");
    var results = $("#results");
    var highlightIndex = 0;

    

    inputField.on("input", function () {
        var filteredCountries = getFilteredCountries(this.value);
        showResults(filteredCountries);

        // console.log("filteredCountries: ", filteredCountries);
        // console.log("results: ", results);
        // console.log("resultHtml: ", resultHtml);
        // console.log("resultingCountries: ", resultingCountries);
    }).on("focus", function () {
        results.show();
    }).on("mouseenter", function () {
        results.show();
    }).on("keydown", function (e) {

        // console.log("e.key: ", e.key);
        // console.log("resultsChildren: ", results[0].children[0]);

        switch (e.key) {
            case "ArrowDown":
                    if (results[0].children.length == 0) {
                        highlightIndex = 0;
                    };    
                    if (highlightIndex > 0) {
                        results[0].children[highlightIndex - 1].classList.remove("highlighted");
                    };
                    // if it reaches the last country in the list, it "jumps" again to the top
                    if (highlightIndex == results[0].children.length) {
                        results[0].children[highlightIndex - 1].classList.remove("highlighted");
                        highlightIndex = 0;
                    };
                        
                    results[0].children[highlightIndex].classList.add("highlighted");
                    highlightIndex++;
                    // console.log(highlightIndex);

                break;

            case "ArrowUp":
            
                        if (highlightIndex > 0) {
                        results[0].children[highlightIndex - 1].classList.remove("highlighted");
                        highlightIndex--;
                        results[0].children[highlightIndex - 1].classList.add("highlighted");
                        // console.log(highlightIndex);
                        };
                        
                break;

            case "Enter":
                        if (results[0].children[highlightIndex - 1].classList.contains("highlighted")) {
                        inputField.val(results[0].children[highlightIndex - 1].innerText);
                        }; 
                        results.hide();
                        break;
        }
    });

   // when the mouse moves over the results:
results
    .on("mouseover", ".result", function (e) {
        // console.log(e.target);
        e.target.classList.add("highlighted");
    })
    .on("mouseleave", ".result", function (e) {
        e.target.classList.remove("highlighted");
    })
    .on("click", ".result", function (e) {
        inputField.val(e.target.innerText);
        results.hide();
    })
    .on("mouseleave", function () {
        results.hide();
    });



    function getFilteredCountries(searchCountry) {
        if (searchCountry === "") {
            return [];
        }
        return countries.filter(function (country) {
            return country.toLowerCase().indexOf(searchCountry.toLowerCase()) === 0
        }).slice(0, 4);
    };

    function showResults(resultingCountries) {
        var resultHtml = "";

        if (resultingCountries.length === 0) {
            resultHtml = "<em>No results</em>";
        } else {
            resultingCountries.forEach(function (country) {
                resultHtml += '<div title="';
                resultHtml += country;
                resultHtml += '" class="result">';
                resultHtml += country;
                resultHtml += '</div>';
            });
        }
        results.html(resultHtml);
        results.show();
    }

})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
]);