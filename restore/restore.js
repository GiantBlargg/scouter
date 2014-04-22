process.umask(077);

var reStore = require('restore'), store = new reStore.FileTree({
    path : __dirname + '/data'
}), server = new reStore({
    store : store,
    http : {
        port : 4000
    },
    allow : {
        signup : true
    },
});

server.boot(); 