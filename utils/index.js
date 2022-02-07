const removeNull = (_obj) => {
  const obj = _obj;
  Object.keys(obj).forEach((key) => {
    if (obj[key] == null || obj[key] == "" || obj[key] == 0) {
      delete obj[key];
    }
  });

  return obj;
};

module.exports = removeNull;
