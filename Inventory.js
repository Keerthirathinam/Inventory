var arr = [];

function add_data() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    var obj = { "firstname": firstname, "lastname": lastname, "email": email, "phone": phone };

    //alert(JSON.stringify(obj));

    arr.push(obj);
    display_data();

}

function display_data() {
    var s = JSON.stringify(arr);
    document.getElementById('div2').innerHTML = s;
    display_table();
}

function display_table() {
    var s1 = '';
    arr.forEach(function (value, index) {
        s1 += '<tr align="center">';
        s1 += '<td>' + value.firstname + '</td>';
        s1 += '<td>' + value.lastname + '</td>';
        s1 += '<td>' + value.email + '</td>';
        s1 += '<td>' + value.phone + '</td>';
        s1 += '<td><input type="button" name="data_del" id="data_del" onClick="data_del(' + index + ')" value="delete"><input type="button" name="data_del" id="data_del" onClick="data_edit(' + index + ')" value="Edit"></td>';
    })
    document.getElementById('table_dis').innerHTML = s1;
}

function data_del(id) {
    arr.splice(id, 1);
    display_data();
}

function data_edit(id1) {
    var s = arr[id1];
    document.getElementById('id1').value = id1;
    document.getElementById('firstname1').value = s.firstname;
    document.getElementById('lastname1').value = s.lastname;
    document.getElementById('email1').value = s.email;
    document.getElementById('phone1').value = s.phone;
}

function add_data1() {
    var firstname = document.getElementById('firstname1').value;
    var lastname = document.getElementById('lastname1').value;
    var email = document.getElementById('email1').value;
    var phone = document.getElementById('phone1').value;
    var id = document.getElementById('id1').value;

    var obj = { "firstname": firstname, "lastname": lastname, "email": email, "phone": phone };
    arr.splice(id, 1, obj);
    display_data();
}

function data_down() {
    s();
}

function s() {
    var j = document.getElementById('div2').textContent;
    var blob = new Blob([j], { type: 'octet/stream' });
    var an = document.createElement('a');
    an.download = 'user.json';
    an.href = window.URL.createObjectURL(blob);
    an.click();

}