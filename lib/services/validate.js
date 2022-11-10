const validateJson = async (data) => {
  for (let key in data) {
    console.log('key --> ', key);
    if (data.hasOwnProperty(key)) {
      console.log('data[key] -----> ', data[key]);
      const valueP = data[key];
      checkTypeObject(valueP);
    }
  }
  return { message: 'hi', status: 400 };
};

const checkTypeObject = (typeObj) => {
  if (!typeObj.hasOwnProperty('type')) {
    // type property not present
    throw new Error({
      status: 'not found',
      val: 'type'
    });
  }
};

export { validateJson };
