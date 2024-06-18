const fsevents = require('fsevents');

const path = '/path/to/watch';
const stop = fsevents.watch(path, (path, flags, id) => {
  const info = fsevents.getInfo(path, flags, id);
  console.log('File event:', info);
});

// Stop watching after 30 seconds
setTimeout(() => {
  stop();
  console.log('Stopped watching');
}, 30000);

