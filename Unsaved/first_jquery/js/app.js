$(function(){
    alert("Everything is ready, let's do this");
    $(function() {

    $('#addHome').removeClass('btn-danger').addClass('btn-success');
    $('h1').addClass("text-center");
    var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
    $newLink.appendTo('body');
    // $('body').append($newLink);
    $('#zillowLink').attr( "target", "_blank" );
    $('#addHome').click(function(evt){
    console.log(evt);
    console.log(this);

})
        function removeHome() {
    $(this).remove();
}

});

});
