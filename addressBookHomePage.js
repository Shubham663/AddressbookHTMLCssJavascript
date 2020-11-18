let addressbook;
window.addEventListener('DOMContentLoaded',(event) => {
    getAddressBookFromStorage();
    createInnerHtml();
})

const createInnerHtml = () => {
    const header = " <!-- <tr> --><th>Fullname</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><!-- </tr> -->"
    let tableInner = `${header}`;
    if(addressbook.length == 0) return
    console.log(addressbook);
    for(const contact of addressbook){
        tableInner = `${tableInner}
        <tr>
            <td>${contact._name}</td>
            <td>${contact._address}</td>
            <td>${contact._city}</td>
            <td>${contact._state}</td>
            <td>${contact._zip}</td>
            <td>${contact._phoneNumber}</td>
            <td>
                <img src="assets/icon/delete-black-18dp.svg" id="${contact._id}" alt="delete" onclick="remove(this)">
                <img src="assets/icon/create-black-18dp.svg" id="${contact._id}" alt="edit" onclick="update(this)">
            </td>
        </tr>
    `;
    }
    document.getElementById('table').innerHTML = tableInner;
};

const getAddressBookFromStorage= () => {
    addressbook = localStorage.getItem('AddressBook') ? 
                            JSON.parse(localStorage.getItem('AddressBook')):[];
};

const remove = (node) =>{
    let contact = addressbook.find(contact => contact._id == node.id);
    if(!contact) return;
    const index = addressbook
                  .map(contact => contact._id)
                  .indexOf(contact._id);
    addressbook.splice(index,1)
    localStorage.setItem("AddressBook",JSON.stringify(addressbook));
    createInnerHtml();
};

const update = (node) => {
    let contact = addressbook.find(contact => contact._id == node.id);
    if(!contact) return;
    localStorage.setItem("editContact",JSON.stringify(contact));
    remove(node);
    myfunc();
};

const myfunc = () => {
    location.href = "./ContactDetailsPage.html";
};