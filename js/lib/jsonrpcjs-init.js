var rpc = new jsonrpc.JsonRpc(rpcUrl);

// Handy interceptors for showing loading feedback in the UI
rpc.loading.bind(function () {
    console.log('loading...');
});
rpc.loaded.bind(function () {
    console.log('done!');
});

// Handy interceptors for all RPC calls that fails and for which there's no failure callback defined
rpc.unhandledFailure.bind(function () {
    console.log('an rpc call failed, and has not failure callback defined');
});
