const contactInfo = {
    contactList : [
        {
        name : "John",
        email : "j@j.com",
        phone : "123-123-1234"
    },
    {
        name : "John",
        email : "jj@j.com",
        phone : "123-123-2234"
    },
    {
        name : "Jane",
        email : "d@j.com",
        phone : "123-123-1334"
    },
    {
        name : "Jim",
        email : "k@j.com",
        phone : "123-123-1434"
    }
],
    getContactName: function(name) {
        const results = this.contactList.filter(contact => contact.name === name); 
        return (results.length > 0) ? results : `No contact with name "${name}" found`;
    },
    addNewContact: function(name, email, phone) {
        this.contactList.push({
            name: name,
            email: email,
            phone: phone
        });
        console.log(`Contact "${name}" added successfully`);
    }
}
const defaultContactList = [...contactInfo.contactList] 

console.log(contactInfo.getContactName("John"));
console.log(contactInfo.getContactName("Bim"));

console.log(defaultContactList, "==> default contact list"); 

contactInfo.addNewContact("Tim", "t@t.com", "123-123-1534");
console.log(contactInfo.contactList,); 
contactInfo.addNewContact("John", "jh2@t.com", "123-133-6534");
console.log(contactInfo.contactList,); 
console.log(contactInfo.getContactName("John"));