$(".panda").click(function() {

    var type = $(this).attr("data-type");
    var tendance = $(this).attr("data-tendance");
    if (type != undefined) {

        $('body').append($('<div/>').innerHTML = " " + "/" + " " + type + " " + tendance);

    } else {
        $('body').append($('<div/>').innerHTML = " " + "/" + " appui sur un autre bouton");
    }
});