export class UserMockup { 
 static users = [ 
{
id: 1,   
username: `admin` ,
password: `1234` ,
fullname: `admin` ,
email: `admin@fae.com` , 
 },
{ 
username: `admin2` ,
password: `1234` ,
name: `admin2` ,
email: `admin2@fae.com` , 
 } 
]

 static async getSignleOrNullByUsername (username) {
    return this.users.find(u=>u.username==username);
 }
}








 