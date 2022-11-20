export const typeArray = [
  'uuid',
  'fullname',
  'firstname',
  'lastname',
  'number',
  'alphanumeric',
  'email',
  'phone',
  'gender',
  'currency',
  'country',
  'boolean'
];

export const typeAttrArray = [
  [], // for uuid
  [], // for fullname
  [], // for firstname
  [], // for lastname
  ['min', 'max', 'decimal', 'range'], // for number
  ['min', 'max'] // for alphanumeric
];