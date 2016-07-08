$('document').ready(function() {

  var $tweetControls = $('div#tweet-controls');
  var $tweetComposeInput = $('.tweet-compose');

  function toggleTweetControls() {
    $tweetControls.toggleClass('hide');
  }

  /*Tweet Compose Input*/
  function toggleTCI() {
    $tweetComposeInput.toggleClass('isExpanded');
    if( $tweetComposeInput.hasClass('isExpanded') ) {
      $tweetComposeInput.css('height', '5em');
    } else {
      $tweetComposeInput.css('height', '2.5em');
    }
  }

  $tweetComposeInput.on('click', function() {
    if( $tweetComposeInput.val() === '' ) {
      toggleTCI();
    }
    if( $tweetControls.hasClass('hide') ) {
      toggleTweetControls();
    }
  });

  $tweetComposeInput.blur(function() {
    if($tweetComposeInput.val() === '') {
      toggleTweetControls();
      toggleTCI();
    }
  });

  toggleTweetControls();
});
