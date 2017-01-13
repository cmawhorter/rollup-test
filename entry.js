import jwt from 'jsonwebtoken';

export default function(id_token) {
  return jwt.decode(id_token);
}
