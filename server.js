const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const app = require('./app');
const port = 3000;

/* Clustering */
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(deadWorker, code, signal) {
    // Restart the worker
    var worker = cluster.fork();

    // Note the process IDs
    var newPID = worker.process.pid;
    var oldPID = deadWorker.process.pid;

    // Log the event
    console.log('worker '+oldPID+' died.');
    console.log('worker '+newPID+' born.');
  });
} else {
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    res.render('404');
  });

  app.listen(port, () => console.log('Server listening on port '+port+'!'));
}
