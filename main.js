

$(document).ready(function() {
var currentSlide = 1;    
var words = ["the", "a", "an", "here", "is", "like", "if", "I", "see", "and", "we", "he", "to", "or", "she", "big", "have", "small", "it", "not", "with", "no", "this", "down", "go", "up", "me", "they", "do", "has", "who", "are", "in", "my", "where", "on", "can", "what", "you", "at", "said", "yes", "am", "did", "play", "for", "too", "come", "from", "look", "of", "that", "was"];
var wList= $('div.animated-container')    
    $.each(words, function(i) {
           var li = $('<div/>')
                .addClass('word')
                .text(words[i])
                .appendTo(wList);
});
    $(".right").click(function() {                
        if(++currentSlide > 54) {
            currentSlide = 1;
            $(".animated-container").css({'margin-left': '0px'});
            $(".animated-container").animate({'margin-left': '-=900'});
            
        }
        else {
            $(".animated-container").animate({'margin-left': '-=900'});
            
        }
        console.log(currentSlide);
        });
    $(".left").click(function() {        
        
        if(--currentSlide < 1) {
            currentSlide = 54;
            $(".animated-container").css({'margin-left': '-48600px'});
            $('.animated-container').animate({'margin-left': '+=900'}, function() {
            
            });
        } else {
            $('.animated-container').animate({'margin-left': '+=900'}, function() {
            
                
        });
            
        }       
        console.log(currentSlide);
    });
});
