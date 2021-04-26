let timer: ReturnType<typeof setTimeout>;

const Debounce = (cb: () => void): void => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(async () => {
    try {
      await cb();
    } catch (e) {
      console.log('error', e);
    }
  }, 300);
};

export default Debounce;
