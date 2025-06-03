import { hash } from "bcrypt";

export class UserMockup { 
 static users = [ 
{
      id : 1,
   username: `admin` ,

   hashedPassword: "$2b$10$Qi9r/C8WheuQFPWpvqbKNuPJOSP2ngNx6DsQO8uQfhJ72HDirX3s.",
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








 