const removeNull = (_obj) => {
  const obj = _obj;
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null) {
      delete obj[key];
    }
  });

  return obj;
};
