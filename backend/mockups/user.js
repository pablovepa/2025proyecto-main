export class UserMockup { 
 static users = [ 
{
   id : 1,
username: `admin` ,
password: `1234` ,
name: `admin` ,
email: `admin@fae.com` ,
roles: [`admin`], 
 },
{ 
id : 2,
username: `admin2` ,
password: `1234` ,
name: `admin2` ,
email: `admin2@fae.com` , 
roles: [`admin2`],   } 
]

 static async getSignleOrNullByUsername (username) {
    return this.users.find(u=>u.username==username);
 }

   static async get() {
      return this.users;
   }
}








 