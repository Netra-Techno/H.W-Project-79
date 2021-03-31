menu_list_array = [ "Chicken Tandoori Pizza",
                    " Veg Supreme Pizza",
                    " Paneer Tikka Pizza",
                    " Deluxe Veg Pizza",
                     " Veg Extravaganza Pizza"];

function getmenu() {
    var html_data;
    html_data = "<ol class='menu_list'>"
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++); {
        html_data = html_data + '<li>' + menu_list_array[i] + '</li>'
    }
    html_data = html_data + "</ol>"
    document.getElementById("display_menu").innerHTML = html_data;
}

function add_item() {
    var html_data;
    var item = document.getElementById("add_value").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    html_data = "<section class='cards'>"
    for (var i = 0; i < menu_list_array.length; i++); {
        html_data = html_data + '<section class="cards">' + '<img src="https://i.pinimg.com/originals/4f/8f/15/4f8f1564d3a14dcf714d062e05065844.jpg"/>'
    }
    html_data = html_data = "</section>"
    document.getElementById("display_addmenu").innerHTML = html_data;
}