$(function(){
  alert("Everything is ready, let's do this");
  $(function() {
    var cells = $('#homes thead tr').children();
    cells.eq(0).css('color', 'blue');
    cells.eq(4).css('color', 'green');
    var newHomes = [
      {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
      {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
      {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
      {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
    ];
    $('#addHome').removeClass('btn-danger').addClass('btn-success');
    $('h1').addClass("text-center");
    var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
    $newLink.appendTo('body');
    // $('body').append($newLink);
    $('#zillowLink').attr( "target", "_blank" );
    var $homesAdded = 0
    $('#addHome').click(function(evt){
      $('#homes tbody').append('<tr>');
      for (var ndx = 0; ndx < 6; ndx++) {
        $('tbody tr').last().append('<td>');
      }
      var $tdCell = $('tbody tr').last().find('td')
      $tdCell.eq(0).append(newHomes[$homesAdded].address);
      $tdCell.eq(1).append(newHomes[$homesAdded].sf);
      $tdCell.eq(2).append(newHomes[$homesAdded].bedrooms);
      $tdCell.eq(3).append(newHomes[$homesAdded].baths);
      $tdCell.eq(4).append(newHomes[$homesAdded].price);
      $tdCell.eq(5).html('<button class="btn btn-xs btn-danger">Remove</button>');
      $homesAdded++;
      if ($homesAdded >= newHomes.length) {
        $('#addHome').prop("disabled", true);
        $('#addHome').removeClass('btn-success').addClass('btn-danger');
      }
      // console.log(evt);
      //console.log(this);
    })
    $('#homes tbody').on('click', 'tr', removeHome);
    function removeHome() {
      $(this).fadeOut(1000, function() {
        $(this).remove();
      });
    }
  })
});
