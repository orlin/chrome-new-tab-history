function init() {
    retrieveHistoryItems('');

    $('body').on('dblclick', function() {
      $('.fuzzy').focus();
    });

    $('.fuzzy').keyup(function() {
      var query = $(this).val()
      console.log(query)
      retrieveHistoryItems(query);
    });
}

function retrieveHistoryItems(input) {
    $('.history').empty();
    chrome.history.search({'text': input, 'maxResults': 200}, function(historyItems) {
        $.each(historyItems, function( index, item ) {
            listItem = $('.history').append('<li><a href="' + item.url + '">' + item.title
              + '</a>' + '<div class="small">'+ '<a href="' + item.url + '">' + item.url + '</a></div>' + '</li>')
        });
    });
}

$(function() {
  init();
});


