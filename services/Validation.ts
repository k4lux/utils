const getRequiredError = (field) => `The ${field} is required`;

class Validation {
  static make(schema, data) {
    let error = {};

    function getExistingError(key) {
      if (error[key]) {
        return error[key];
      }

      return [];
    }

    Object.keys(schema).forEach((schemaKey) => {
      if (schema[schemaKey].includes("required")) {
        const isValid = Boolean(data[schemaKey]);

        if (!isValid) {
          error = {
            ...error,
            [schemaKey]: [
              ...getExistingError(schemaKey),
              getRequiredError(schemaKey),
            ],
          };
        }
      }
    });

    if (Object.keys(error).length > 0) {
      return {
        error,
        isValid: false,
      };
    }

    return {
      error,
      isValid: true,
    };
  }
}

export default Validation;
