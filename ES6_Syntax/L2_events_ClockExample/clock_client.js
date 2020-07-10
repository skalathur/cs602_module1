const say = require('say');

const ClockEmitter = require('./clock_emitter');  
const clock = new ClockEmitter();

clock.on('tic', (t) => {  
  console.log('tic:', t.toTimeString().substring(0,8));
  say.speak('tic');
});

clock.on('toc', (t) => {  
  console.log('toc:', t.toTimeString().substring(0,8));
  say.speak('tock');
});

clock.start();

// stop the clock 10 seconds after
setTimeout(() => {  
  clock.stop();
}, 10*1000)