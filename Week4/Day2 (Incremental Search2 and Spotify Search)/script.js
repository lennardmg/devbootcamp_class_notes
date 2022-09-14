(function () {
    var results = $("#results-container");
    var imageUrl = "./assets/default.jpeg";
    var header = $("h2");
    var nextUrl


    $("#search").on("click", function () {
        var userInput = $("input").val();
        var albumOrArtist = $("select").val();

        // console.log(userInput);
        // console.log(albumOrArtist);

        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput,
                type: albumOrArtist,
            },
            success: function (response) {
                response = response.artists || response.albums;
                var headerResults = "";
                var htmlResults = "";
                var imageResults = "";
                var linkResults = "";
                console.log(response.items);

                response.items.forEach(function (item) {
                    if (item.images[0]) {
                        imageUrl = item.images[0].url;
                        // console.log(imageUrl);
                    }

                    linkResults = item.external_urls.spotify;
                    // console.log(linkResults);
                    // console.log(typeof linkResults);

                    imageResults = "<a href=" + linkResults + " target='_blank'>" + "<img src=" + imageUrl + " alt=" + item.name + ">" + "</a>";
                    // console.log("image results: ", imageResults);

                    htmlResults += "<div id='textResults'>" + imageResults + "<div id='artistName'>" + item.name + "</div>" + "</div>";

                    headerResults = "Search results for: " + userInput;
                });
                // console.log("html results: ", htmlResults);
                header.html(headerResults);
                results.html(htmlResults);
               
                console.log("response:", response);
                setNextUrl(response.next);

                $("#more").removeClass("hidden");

            },
        });
    });


     $("#more").on("click", function () {
         var userInput = $("input").val();
         var albumOrArtist = $("select").val();

         console.log(nextUrl);

         $.ajax({
             url: nextUrl,
             data: {
                 query: userInput,
                 type: albumOrArtist,
             },
             success: function (response) {
                 response = response.artists || response.albums;
                 var htmlResults = "";
                 var imageResults = "";
                 var linkResults = "";
                 console.log(response.items);

                 response.items.forEach(function (item) {
                     if (item.images[0]) {
                         imageUrl = item.images[0].url;
                     }

                     linkResults = item.external_urls.spotify;

                     imageResults =
                         "<a href=" +
                         linkResults +
                         " target='_blank'>" +
                         "<img src=" +
                         imageUrl +
                         " alt=" +
                         item.name +
                         ">" +
                         "</a>";

                     htmlResults +=
                         "<div id='textResults'>" +
                         imageResults +
                         item.name +
                         "</div>";
                 });

                 results.append(htmlResults);

                 setNextUrl(response.next);
             },
         });
     });

     function setNextUrl(next) {
                   nextUrl =
                       next &&
                       next.replace(
                           "https://api.spotify.com/v1/search",
                           "https://spicedify.herokuapp.com/spotify"
                       );
               };

//another request with an updated URL and append(html) to the results container

// for the unlimited scroll:

// location.search.indexOf("scroll=infinite") > -1



})();
