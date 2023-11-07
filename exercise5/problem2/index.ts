async function printNumberInInterval(b: number) {
  async function anyfunc(n: number): Promise<void> {
    console.log(`after 1 sec - ${n}`);
  }

  let n = 1;
  const delay = 1000;

  const intervalId = setInterval(async () => {
    await anyfunc(n);

    if (n === b) {
      clearInterval(intervalId);
    }
    n++;
  }, delay);
}

printNumberInInterval(10);
