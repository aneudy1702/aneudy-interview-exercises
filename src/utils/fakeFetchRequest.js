const defaultOptions = {
  data: {},
  delay: 300
};

export const buildFakeRequest = options => () => {
  options = Object.assign(defaultOptions, options);

  return new Promise((resolve, reject) => {
    if (options.forceFail) {
      return setTimeout(
        () => reject({ error: "failed request!" }),
        options.delay
      );
    }
    setTimeout(() => resolve(options.data), options.delay);
  });
};
