class ContactDetails{
    _name;
    _phoneNumber;
    _address;
    _city;
    _state;
    _zip;
    _id;

    set name(name){
        const pattern = RegExp("[A-Z]{1}.{2,}");
        if(pattern.test(name))
            this._name= name;
        else throw "The name provided is not valid";
    }
    get name(){
        return this._name;
    }
    set phoneNumber(_phoneNumber){
        this._phoneNumber = _phoneNumber;
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set address(_address){
        this._address = _address;
    }
    get address(){
        return this._address;
    }
    set city(city){
        this._city = city;
    }
    get city(){
        return this._city;
    }
    set state(state){
        this._state = state;
    }
    get state(){
        return this._state;
    }
    set zip(zip){
        this._zip = zip;
    }
    get zip(){
        return this._zip;
    }
    set id(id){
        this._id= id;
    }
    get id(){
        return this._id;
    }

    toString(){
        return "Name: " + this._name + ", Phone Number: " + this._phoneNumber + ", Address: " + this._address + ", City: " + this._city + ", State: " + this._state + ", Zip: " + this._zip;
    }
}

const save= () =>{
    let id = new Date().getTime();
    let name = document.getElementById('name').value;
    let phoneNumber = document.getElementById('number').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zipCode = document.getElementById('zip').value;
    let contact = new ContactDetails();
    contact.name = name;
    contact.phoneNumber = phoneNumber;
    contact.address = address;
    contact.city= city;
    contact.state= state;
    contact.zip = zipCode;
    contact.id = id;
    writeToLocal(contact);
    reset();
    window.location.replace('./AddressBookHomePage.html')
}

const reset  =() => {
    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value= '';
    document.getElementById('zip').value='';
};

const writeToLocal = (contact) => {
    let addressBook = JSON.parse(localStorage.getItem('AddressBook'));
    if(addressBook == undefined)
        addressBook = [contact];
    else{
        addressBook.push(contact);
    }
    alert(contact.toString());
    localStorage.setItem('AddressBook',JSON.stringify(addressBook));
};

window.addEventListener('DOMContentLoaded',(event) => {
    checkForUpdates();
});

let isUpdate = false;
let contact = {};

const checkForUpdates = () => {
    const contactJSON = localStorage.getItem('editContact');
    isUpdate = contactJSON ? true:false;
    if(!isUpdate) return;
    localStorage.removeItem('editContact')
    contact = JSON.parse(contactJSON);
    setForm();
};

const setForm = () => {
    setValue('#name',contact._name);
    setValue('#number',contact._phoneNumber);
    setValue('#address',contact._address);
    setValue('#city',contact._city);
    setValue('#state',contact._state);
    setValue('#zip',contact._zip);
};

const setValue = (id,value) => {
    const element = document.querySelector(id);
    element.value = value;
}

window.addEventListener('DOMContentLoaded',(event) =>{
    const name = document.getElementById('name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        try{
            (new ContactDetails()).name = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;
        }
    });
    checkForUpdates();
});