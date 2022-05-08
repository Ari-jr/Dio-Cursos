function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Carlos', 'Admin');
usuarios.set('Ariomar', 'Admin');
usuarios.set('Paulo', 'User');
usuarios.set('Nivia', 'Admin');

console.log(getAdmins(usuarios));