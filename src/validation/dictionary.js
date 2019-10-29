export const validationDictionary = {
  bool: {
    presence: {
      allowEmpty: false,
      message: '^This is required',
    },
  },

  day: {
    presence: {
      allowEmpty: false,
      message: '^This is required',
    },
    numericality: {
      greaterThan: 0,
      lessThanOrEqualTo: 31,
      message: '^Must be valid',
    },
  },

  firstname: {
    presence: {
      allowEmpty: false,
      message: '^*Required Field',
    },
    format: {
      pattern: /^[a-zA-Z ]*$/,
      message: '^Full name must be valid',
    },
  },
  lastname: {
    presence: {
      allowEmpty: false,
      message: '^*Required Field',
    },
    format: {
      pattern: /^[a-zA-Z ]*$/,
      message: '^lastname must be valid',
    },
  },

  /*--/Email Validations --*/
  generic: {
    presence: {
      allowEmpty: false,
      message: '^* Required Field',
    },
  },

  /*--Email Validations --*/
  email: {
    presence: {
      allowEmpty: false,
      message: '^* Required Field',
    },
    email: {
      message: '^Invalid Email',
    },
  },
  /*--/Email Validations --*/
  generic: {
    presence: {
      allowEmpty: false,
      message: '^* Required Field',
    },
  },
  fullname: {
    presence: {
      allowEmpty: false,
      message: '^This is required',
    },
    format: {
      pattern: /^[a-zA-Z ]*$/,
      message: '^Full name must be valid',
    },
  },

  integer: {
    presence: {
      allowEmpty: false,
      message: '^This is required',
    },
    numericality: {
      greaterThan: 0,
      onlyInteger: true,
      message: '^Must be valid',
    },
  },

  month: {
    presence: {
      allowEmpty: false,
      message: '^This is required',
    },
    numericality: {
      greaterThan: 0,
      lessThanOrEqualTo: 12,
      message: '^Must be valid',
    },
  },
  // /*--Signin Password Validations --*/
  passwordSignin: {
    presence: {
      allowEmpty: false,
      message: '^* Required Field',
    },
  },
  /*--/Signin Password Validations --*/
  /*--Signup Password Validations --*/
  password: {
    presence: {
      allowEmpty: false,
      message: '^* Required Field',
    },
    length: {
      minimum: 6,
      message: '^',
    },
  },
  /*--/Signup Password Validations --*/

  /*--Confirm Password Validations --*/
  confirmPassword: {
    presence: {
      allowEmpty: false,
      message: '^* Required Field',
    },
    length: {
      minimum: 6,
      equality: 'password',
      message: '^',
    },
  },
  /*--/Confirm Password Validations --*/

  phone: {
    presence: {
      allowEmpty: false,
      message: '^* Required Field',
    },
    format: {
      pattern: /^[7-9][0-9]{9}$/,
      message: '^Phone number must be valid',
    },
  },

  state: {
    presence: {
      allowEmpty: false,
      message: '^This is required',
    },
    inclusion: {
      within: [
        'AK',
        'AL',
        'AR',
        'AZ',
        'CA',
        'CO',
        'CT',
        'DC',
        'DE',
        'FL',
        'GA',
        'HI',
        'IA',
        'ID',
        'IL',
        'IN',
        'KS',
        'KY',
        'LA',
        'MA',
        'MD',
        'ME',
        'MI',
        'MN',
        'MO',
        'MS',
        'MT',
        'NC',
        'ND',
        'NE',
        'NH',
        'NJ',
        'NM',
        'NV',
        'NY',
        'OH',
        'OK',
        'OR',
        'PA',
        'RI',
        'SC',
        'SD',
        'TN',
        'TX',
        'UT',
        'VA',
        'VT',
        'WA',
        'WI',
        'WV',
        'WY',
      ],
      message: '^Must be valid',
    },
  },

  zip: {
    presence: {
      allowEmpty: false,
      message: '^This is required',
    },
    length: {
      is: 5,
      message: '^Zip must be 5 digits long',
    },
  },
  cuntry: {
    presence: {
      allowEmpty: false,
      message: '^* Required Field',
    },
  },
};
