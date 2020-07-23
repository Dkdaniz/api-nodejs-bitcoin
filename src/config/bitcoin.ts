const rpcuser = 'bitcoin';
const rpcpassword = 'bitcoin';
const rpcport = 18333;
const endpoint = `159.89.53.60:${rpcport}/`;
const rpcHref = `http://${rpcuser}:${rpcpassword}@${endpoint}`;

export default { endpoint: rpcHref };
