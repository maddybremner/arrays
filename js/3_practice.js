$(document).ready(function() {



    var one = ["Hummus", "Seitan", "Portabella"];
    var two = ["Spring Greens", "Dressed Kale", "Vegan Slaw"];
    var three = ["Cucumber", "Avocado", "Shredded Carrot"];


    $("#button").click(function(){

        var x = Math.floor(Math.random() * one.length);
        $("#one").html(one[x]);
        $("#two").html(two[x]);
        $("#three").html(three[x]);

    });
	
});