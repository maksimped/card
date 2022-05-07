const admins = [
    {
      firstname:'Bartek1',
      lastName : 'Kubus',
      password : '12345678'
    },

    {
        firstname:'Bartek2',
        lastName : 'Kubus',
        password : '12345677'
      },

      {
        firstname:'Bartek3',
        lastName : 'Kubus',
        password : '12345679'
      },

      {
        firstname:'Bartek4',
        lastName : 'Kubus',
        password : '12345670'
      },
].map( user => {
    user.checkAccess = checkAccess;
    return user
});


function getAcces() {
    const password = prompt('Get Password:'),
        admin = admins.find(user => user.checkAccess(password));
    if (password === admin.password){
        console.info('Welcome!', admin);
    }else{
        console.error('Access Denided');
    }
}

function checkAccess (password){
    return this.password === password;
}

console.log(admins);b 
getAcces();