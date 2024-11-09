$(document).ready(function(){
    console.log("Welcome to our first jquery file");
    console.log("We are using jQuery");
    // $('p').click();
    // $('p').click(function(){
    //     console.log('you clicked on p', this);
    //     // $(this).hide();
    // });
    
    // // $('.odd').click();
    // // $('#second').click();

    // $('p').dblclick(function(){
    //     console.log("you double clicked on p", this);
    // });

    // $('p').hover(function(){
    //     console.log("you just hover on the p element", this);
    // }, function(){
    //     console.log("Thanks for coming");
    // })

    $('#input1').keypress(function(){
        console.log("you have entered the keyword key");
    });

    $('p').on({
        click: function(){
            console.log("Thanks for clicking", this);
        },
        mouseleave: function(){
            console.log("Mouse leave");
        }
    });

    // $('div').hide(2000, function(){
    //     console.log("hidden");
    // })
    // $('div').show(2000, function(){
    //     console.log("shown");
    // })

    // $('#btn').click(function(){
    //     $('#lorem').toggle(2000);
    // });
    
    $('#lorem').fadeOut(3000, function(){
        console.log("Fade Out completed");
    });
    $('#lorem').fadeIn(3000, function(){
        console.log("Fade In completed");
    });

    $('#btn').click(function(){
        $('#lorem').fadeToggle(2000, function(){
            console.log("Toggle fade in and out completed");
        });
    });
    // Events in jQuery
    // Mouse events = click, dblclick, mouseenter, mouseleave, mousedown
    // Keyword events = keypress, keydown, Keyup
    // form events = submit, change, focus, blur
    // document/window events = load, resize, scroll, unload
});
