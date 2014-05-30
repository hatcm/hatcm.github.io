window.onload = function (){
    var submit = document.getElementById('Submit');
    var feedback = document.getElementById('feedback');
    var form = document.getElementById('form');
    submit.onclick = function () {
        var fullname = document.getElementById('fullname');
        var phone = document.getElementById('phone');
        var email = document.getElementById('email');
        var subject = document.getElementById('subject');
        var message = document.getElementById('message');
        var to1 = 'harmonyatcm';
        var to2 = 'azureduan';
        var domain = 'gmail.com';
        var body = 'Fullname:\n' + fullname.value;
        body += '\nPhone:\n' + phone.value;
        body += '\nSubject:\n' + subject.value;
        body += '\nMessage:\n' + message.value;
        var url = 'mailto:' + to1 + '@' + domain;
        url += ',' + to2 + '@' + domain;
        url += '?subject=' + subject.value + ' (Message from hatcm.com/contact)';
        url += '&body=' +  encodeURIComponent(body);
        window.open(url);
        
        feedback.innerHTML = "Thank you for contacting us. We will get back to you soon.";
        form.innerHTML = '';
    }
}
