$(document).ready(function(){
    $('.image-indisplay-thumbnails').css('opacity','0.6');
    var defaultImage = $('.image-in-display').attr('src');
    var defaultThumbnailArray =  document.getElementsByClassName('image-indisplay-thumbnails');

    for (var i = defaultThumbnailArray.length - 1; i >= 0; i--) {
        var loopThumbnail = $(defaultThumbnailArray[i]).attr('src');
        if (loopThumbnail == defaultImage) {
            $(defaultThumbnailArray[i]).css('opacity','1.0');
        }
    }
    $('.image-indisplay-thumbnails').click(
        function(){
            $('.image-indisplay-thumbnails').css('opacity','0.6');
            $(this).css('opacity','1.0');
            var currentSource = $(this).attr('src');
            $('.image-in-display').attr('src',currentSource);
        }
    );
});