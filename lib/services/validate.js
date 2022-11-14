import { attributeArray } from '../constants/attr.js';

const validateJson = async (data) => {
  const json = data.data;
  for (let key in json) {
    if (json.hasOwnProperty(key)) {
      const valueP = json[key];
      console.log('valueP --> ', valueP);
      // check if type is present or not
      checkTypePresent(valueP);

      // check each type by its required attribute
      checkTypeAttribute(valueP);
    }
  }
  return { message: 'JSON is valid' };
};

const checkTypePresent = (typeObj) => {
  if (!typeObj.hasOwnProperty('type')) {
    // type property not present
    throw new Error('Type not present');
  }
};

const checkTypeAttribute = (obj) => {
  const inIndex = attributeArray.findIndex((attr) => {
    return attr === obj.type;
  });

  if (inIndex === -1) {
    throw new Error(`Invalid type ${obj.type}`);
  }
};

export { validateJson };
