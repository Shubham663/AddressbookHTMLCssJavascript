let addressBook  = new Array();
class ContactDetails{
    _name;
    _phoneNumber;
    _address;
    _city;
    _state;
    _zip;

    set name(name){
        this._name= name;
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
}

const save= () =>{
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
    addressBook.push(contact);
    console.log(addressBook);
}

const reset  =() => {
    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value= '';
    document.getElementById('zip').value='';
};