const timers = process.argv.slice(2);
for (const timer of timers) {
  if (isNaN(Number(timer)) === true || timer < 0) {
    return;
  } else {
  setTimeout(() => {process.stdout.write('\x07')}, (timer * 1000));
  }
}
