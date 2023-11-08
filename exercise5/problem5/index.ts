function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Delayed for " + ms + " ms");
      resolve();
    }, ms);
  });
}

export default wait;
