import { Invalid_Arguments_exception } from "../exceptions/invalid_arguments_exceptions.js";
import { invalidcredentialsexceptions } from "../exceptions/invalid_credentials_exceptions.js";
import {getDependency } from  '../libs/dependencies.js';
import bcrypt from "bcrypt";
import config from '../config.js';
import jwt from 'jsonwebtoken';

export class LoginService {
  static async login(credentials) {
    if ( !credentials
      || !credentials.username 
      || !credentials.password 
      || typeof credentials.username !== "string" 
      || typeof credentials.password !== "string"
    )
      throw new Invalid_Arguments_exception();

    const UserService = getDependency("UserService");
    const user = await UserService.getSignleOrNullByUsername (credentials.username);
    if (!user)
      throw new invalidcredentialsexceptions();
    if (!(await bcrypt.compare(credentials.password, user.password)))
      throw new invalidcredentialsexceptions();
    

    const token = jwt.sign(
      {
        userId: user.id,
        userName: user.username,
        userFullName: user.fullname,
      },
      config.jwtKey,
      {
        expiresIn: '1h' // El token expirará en 1 hora
      }
    );
  
    return {token};

  }
}
 