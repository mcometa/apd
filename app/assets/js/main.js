"use strict";

var MAIN = {
  onReady: function(){
    // do some ajax to the github API
    var $repoContainer = $('#js-repos'),
        $loader = $('.loader');
    $.ajax({
      type: 'GET',
      url: 'https://api.github.com/users/twitter/repos',
      success: function(repos){
        $.each(repos, function(i, repo){
          // Remove the loader image
          $loader.remove();

          // Populate the repo container
          $repoContainer.append('<div id="repo-'+repo.id+'" class="repo-card">'+
              '<img src="https://avatars3.githubusercontent.com/u/'+repo.owner.id+'?=v2&s=480" alt="" class="avatar">'+
              '<div class="info">'+
                '<p class="name">'+repo.name+'</p>'+
                '<p class="dateupdated">'+MAIN.helpers.convertDate(repo.updated_at)+'</p>'+
                '<p class="watchers">'+repo.watchers_count+'</p>'+
              '</div>'+
            '</div>');
        })
      }
    })
  },
  helpers: {
    convertDate: function(date) {
      var dateInstance = new Date(date);
      var dateString = (dateInstance.getFullYear() + '-'
          + ('0' + (dateInstance.getMonth() + 1)).slice(-2)
          + '-' + ('0' + (dateInstance.getDate())).slice(-2));
      return dateString;
    }
  }
};

$(MAIN.onReady);
