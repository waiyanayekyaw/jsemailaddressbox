const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');


getemail.focus();

getemail.addEventListener('keyup',function(e){
    createemaillist(e.target.value);
});

function createemaillist(inputtext){
    // console.log(inputtext);

    // const eitems = inputtext.split(',');

    // remove empty
    // const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '');

    // remove space/empty
    const emitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '').map(rmempty=>rmempty.trim());

    // console.log(emitems);
    getemcontainer.innerHTML = '';

    emitems.forEach(function(emitem){
        const setnewspan = document.createElement('span');
        setnewspan.textContent = emitem;
        setnewspan.classList.add('email-item');

        getemcontainer.appendChild(setnewspan);
    });
}


getbtn.addEventListener('click',function(e){
    sendemail();
    e.preventDefault();
});

function sendemail(){
    const gettxtvalue = gettextarea.value;
    const getaddresses = document.querySelectorAll('.email-item');

    var persons = [];

    if(getaddresses.length > 0 && gettxtvalue){
        getaddresses.forEach(function(getaddress){

            persons.push({
                email: getaddress.textContent,
                message: gettxtvalue
            });
        });
        console.log(persons);
        
    }else{
        window.alert('Enter Message');
        gettextarea.focus();
    }
}