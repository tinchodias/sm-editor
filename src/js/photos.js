'use strict';

app.controller('PhotosCtrl', function (pageData) {

  console.log("Ja");
  console.log(pageData);

  var self = this;
  self.page = pageData;

  self.isPageNotFound = function() {
    return !self.page;
  };

  // belongs to the view; shouldn't be here...
  self.thumbStyle = function(photo) {
    return { "padding-bottom": "" + ((parseInt(photo.height) / parseInt(photo.width)) * 100) + "%" }
  };


})

  
  
