import jwtDecode from 'jsonwebtoken/decode.js';

export default function(id_token) {
  return jwtDecode(id_token);
}
