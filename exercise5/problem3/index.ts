function printAsyncNumbers(b: number) {
  async function printNumberWithDelay(n: number) {
    console.log(`after ${n} sec - ${n}`);
  }

  for (let n = 1; n <= b; n++) {
    await new Promise((resolve) => {
      setTimeout(async () => {
        await printNumberWithDelay(n);
        resolve();
      }, n * 1000);
    });
  }
}

printAsyncNumbers(3);
printAsyncNumbers(10);
