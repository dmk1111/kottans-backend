// Include Nodejs' net module.
const Net = require('net');

const args = process.argv.slice(2);
console.log('myArgs: ', args);
const ports = getPorts(args);
const hostIndex = args.indexOf('--host');
if (args.indexOf('--help') !== -1) {
    console.log(`
    --host (required): can be either domain name, like google.com or IP address like 172.217.3.110;
    --ports (optional): [start_port]-[end_port], for example: 3-600. Will use 0-65535 by default;
    --help : show this message again :)
    `);
    return;
}
if (hostIndex === -1) {
    throw `Please, specify target host using --host argument. Use --help for more information`;
}
const host = args[hostIndex + 1];
console.log(host);


//TODO: loop through ports and try to connect to each one. Link to task: https://github.com/kottans/backend/blob/master/tasks/network.md

// Create a new TCP client.
const client = new Net.Socket();
// Send a connection request to the server.
client.connect({ port: 443, host: host }, function() {
    // If there is no error, the server has accepted the request and created a new
    // socket dedicated to us.
    console.log('TCP connection established with the server.');

    client.end();
});

client.setTimeout(300);
client.on('timeout', () => {
    console.log('socket timeout');
    client.end();
});

client.on('end', function() {
    console.log('Requested an end to the TCP connection');
});

function range(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

function getPorts(processArgs) {
    const index = processArgs.indexOf('--ports');
    if (index !== -1) {
        const ports = processArgs[index + 1].split('-');
        return range(ports[0], ports[1]);
    }
    return range(0, 65535);
}