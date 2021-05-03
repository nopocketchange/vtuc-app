import io from "socket.io-client";

let socket = null;
const host = "floating-brushlands-91138.herokuapp.com";

export default (() => {
  if (!socket) {
    socket = io(host);
  }
  return socket;
})();
