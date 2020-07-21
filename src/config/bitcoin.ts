const rpcuser = 'bitcoin';
const rpcpassword = 'bitcoin';
const rpcport = 8333;
const endpoint = `167.99.155.242:${rpcport}/`;
const rpcHref = `http://${rpcuser}:${rpcpassword}@${endpoint}`;

export default { endpoint: rpcHref };
