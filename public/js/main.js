// Grab all HTML elements into variables
var socket = io.connect();
var messageForm = $('#message-form');
var message = $('#message');
var chat = $('#chat');
var messageArea = $('#message-area');
var userForm = $('#user-form');
var users = $('#users');
var onlineUsersHeader = $('#online-users');
var username = $('#username');

// Form submit to send messages
messageForm.submit(function(e) {
    e.preventDefault();
    socket.emit('send message', message.val());
    message.val('');
});

// When a new message is sent, print username and time to interface
socket.on('new message', function(data) {
    var currentHours = new Date().getHours() > 9 ? new Date().getHours() : ('0' + new Date().getHours());
    var currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : ('0' + new Date().getMinutes());
    data.msg ? (
            chat.append('<li>['+ currentHours +':'+currentMinutes+'] <strong>' + data.user +' : </strong>' + data.msg +' </li>'))
        : alert('Blank message not allowed');
});

// Form submit to username
userForm.submit(function(e) {
    e.preventDefault();
    socket.emit('new user', username.val(), function(user) {
        if(user){
            userForm.hide();
            messageArea.show();
        }
        else if(user == ""){
            alert('Oops. Input is blank, enter a nickname or name');
        }
    });
    username.val('');
});

// get all users connected on localhost:3000 and print a list
socket.on('get userList', function(data) {
    var html = '';
    for (i = 0; i < data.length; i++) {
        html += '<li class="glyphicon glyphicon-globe list-group-item"><strong> '+ data[i] + ' </strong></li>';
    }
    onlineUsersHeader.html('<span>Users in the room: ' + data.length +'</span>');
    users.html(html);
});
