$(function() {

    $(document).ready(function(){

        //Fades out and then makes the scrollUp arrow invisible on doc load.
        $(".scrollUp").addClass("fadeOut");
        $(".scrollUp").addClass("invisible");

        $("#moveGameDev").click(function(){
            $.scrollify.move("#gamedev");
        });

        $("#moveMusic").click(function(){
            $.scrollify.move("#music");
        });

        $(".thumb-wma").hover(function(){

            tFadeIn($(".thumb-wma"), $(".thumb-wma h2"));

        }, function(){

            tFadeOut($(".thumb-wma"), $(".thumb-wma h2"));
        });


        $(".thumb-ns").hover(function(){

            tFadeIn($(".thumb-ns"), $(".thumb-ns h2"));

        }, function(){

            tFadeOut($(".thumb-ns"), $(".thumb-ns h2"));
        });


        $(".thumb-sns").hover(function(){

            tFadeIn($(".thumb-sns"), $(".thumb-sns h2"));

        }, function(){

            tFadeOut($(".thumb-sns"), $(".thumb-sns h2"));
        });


        $(".thumb-snsr").hover(function(){

            tFadeIn($(".thumb-snsr"), $(".thumb-snsr h2"));

        }, function(){

            tFadeOut($(".thumb-snsr"), $(".thumb-snsr h2"));
        });

        

    });

    $.scrollify({
        section: ".hero",
        scrollSpeed: 500,

        
        before: function(section){   
            //Adds the bounce effect to the downward arrow when on the first section.
            if(section===0){
                $(".scrollDown").addClass("bounce");
            }
            else{
                $(".scrollDown").removeClass("bounce");
            }
        },

        after: function(section){

            var hash = window.location.hash;
            
            //Up arrow animations.
            if(hash === "#home"){
                $(".scrollUp").addClass("fadeOut");
            }
            else{
                $(".scrollUp").removeClass("invisible");
                $(".scrollUp").removeClass("fadeOut");
                $(".scrollUp").addClass("fadeIn");
            }

            //Down arrow animations.
            if(hash === "#bottom"){
                $(".scrollDown").addClass("fadeOut");
            }
            else{
                $(".scrollDown").removeClass("invisible");
                $(".scrollDown").removeClass("fadeOut");
                $(".scrollDown").addClass("fadeIn");
            }

        },
        
    });

    
})


function tFadeIn(element, elementh2){

    $(element).css("transition", ".3s all");
    $(element).css("-webkit-filter", "blur(0px)");
    $(element).css("filter", "blur(0px)");
    $(elementh2).fadeIn();

}


function tFadeOut(element, elementh2){

    $(element).css("transition", ".3s all");
    $(element).css("-webkit-filter", "blur(2px)");
    $(element).css("filter", "blur(2px)");

    $(elementh2).stop(true);
    $(elementh2).fadeOut();
}