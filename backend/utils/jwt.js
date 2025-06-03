import jwt from "jsonwebtoken";

const SECRET_KEY = "tu_clave_secreta"; // Cambia por una clave segura

export function generarJWT(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
}