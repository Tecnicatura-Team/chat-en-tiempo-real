$(document).ready(function() {
    var menssages = []
    var socket = io.connect("http://127.0.0.1:3700")
    var name = $("#name")
    var fild = $("#fild")
    socket.on("menssage", function(data) {
        var html = "";
        if (data.menssage) {
            menssages.push(data)
            for (var i = 0; i < menssages.length; i++) {
                html += "<b>" + (menssages[i].username ? menssages[i].username : "Servidor") + "</b>"
                html += ":" + menssages[i].menssage + "<br>"
            }
            $("#content").html(html)
        }


    })
    $("#send").click(function() {
        if (name.val() == "") {
            alert("ingrese su nombre")
        } else {
            $("#name").attr("disabled", "disabled")
            socket.emit("send", { menssage: fild.val(), username: name.val() })
        }
    })

})