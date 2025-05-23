import { Invalid_Arguments_exception } from "../exceptions/invalid_arguments_exceptions.js";
import { invalidcredentialsexceptions } from "../exceptions/invalid_credentials_exceptions.js";
import {getDependency } from  '../libs/dependencies.js';
import bcrypt from "bcrypt";

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

    if (credentials.password !== user.password)
      throw new invalidcredentialsexceptions();

    return {
      token: "token de acceso",
    };
  }
}
