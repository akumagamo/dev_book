var fs = require('fs');
fs.watch('test', function (event, filename) {
  console.log('event is: ' + event);
  if (filename) {
    var spawn = require('child_process');
    spawn.exec("npm test",function(){
      console.info(arguments)

    });
  } else {
    console.log('filename not provided');
  }
});
