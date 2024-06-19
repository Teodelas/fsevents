const fsevents = require('fsevents');

const path = '/Users/ec2-user';
const stop = fsevents.watch(path, (path, flags, id) => {
  const info = fsevents.getInfo(path, flags, id);
  console.log('File event:', info);
});

// Stop watching after 30 seconds
setTimeout(() => {
  stop();
  console.log('Stopped watching');
}, 30000);

