 var map;

 function initMap() {

     var mapOptions = {
         center: {
             lat: 28.6315,
             lng: 77.2167
         },
         zoom: 13
     };

     map = new google.maps.Map(document.getElementById('map'), mapOptions);


     ko.applyBindings(new getplaces());
 }

 function goerror() {
     document.getElementById('map').innerHTML = "Map could not work,sorry!!";
 }


 function getplaces() {
     var infowindow = new google.maps.InfoWindow();


     var self = this;
     self.arr = [];
     self.errmssg = ko.observable();
     self.searchPlace = ko.observable();

     for (var i = 0; i < markers.length; i++) {
         var marker = new google.maps.Marker({
             position: {
                 lat: markers[i].lat,
                 lng: markers[i].lng
             },
             map: map,
             show: ko.observable(markers[i].show),
             name: markers[i].name,
             animation: google.maps.Animation.DROP,
             ids: markers[i].id
         });
         
         marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
         self.arr.push(marker);
         console.log(self.arr[i].name);

         google.maps.event.addListener(self.arr[i], 'click', function() {
             infowindow.open(map, this);
             self.arr_win(this);
             infowindow.setContent("<h3>" + this.name + "</h3>" + "<div>" + "getting data from foursquare api.." + "</div>");
             animations(this);
         });
     }

     console.log(self.arr.length);

     //clicking list items.
     self.selection = function() {
         for (var i = 0; i < self.arr.length; i++) {
             if (markers[i].name === this.name) {
                 infowindow.open(map, self.arr[i]);
                 self.arr_win(this);
                 infowindow.setContent("<h3>" + this.name + "</h3>" + "<div>" + "getting data from foursquare api.." + "</div>");
                 //infowindow.setContent("<h3>" + this.name + "</h3>" + "<div>" + self.arr_win(this) + "</div>");
                 animations(this);
             }
         }
     };

     //foursquare api data retreived using ajax.
     self.arr_win = function(mark) {
         $.ajax({
             url: "https://api.foursquare.com/v2/venues/" + mark.ids + "?client_id=KM31MN35JRY4K1NOZHABK2XTVLALNXN2H4MHJCCQYAH1W1EB&client_secret=F0VRM2GAUZ3VIRXPEHDPAUFJT1ZN3YAJDOKPDF10OQK1USII&v=20170320",
             dataType: "json",
             async: true,
             success: function(data) {
                 result = data.response.venue;
                 if (result.hasOwnProperty('likes')) {
                     mark.likes = result.likes.summary;
                 }
                 infowindow.setContent("<h3>" + mark.name + "</h3>" + "<div>" + mark.likes + "</div>");
             },
             error: function() {
                 infowindow.setContent("<h3>" + "Warning" + "</h3>" + "<div>" + "No info about likes can be found" + "</div>");
             }
         });

         //console.log(mark.likes);

     };


     //search filter function.
     search = function() {
         infowindow.close();
         if (self.searchPlace().length > 0) {
             for (var i = 0; i < self.arr.length; i++) {

                 if (self.arr[i].name.toLowerCase().indexOf(self.searchPlace().toLowerCase()) > -1) {
                     self.arr[i].show(true);
                     self.arr[i].setVisible(true);
                 } else {
                     self.arr[i].setVisible(false);
                     self.arr[i].show(false);
                 }
             }
         } else {
             for (var i = 0; i < self.arr.length; i++) {
                 self.arr[i].setVisible(true);
                 self.arr[i].show(true);
             }
         }
     };

     animations = function(mark) {
         mark.setAnimation(google.maps.Animation.BOUNCE);
         setTimeout(function() {
             mark.setAnimation(null);
         }, 700);
     };
 }
