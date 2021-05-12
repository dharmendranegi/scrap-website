const mandatoryFieldsValidation = (mandatoryFieldsArray, dataObj) =>
  mandatoryFieldsArray.filter(
    field => !Object.keys(dataObj).includes(field) || !dataObj[field]
  );

const getScrapeDetailsValidation = data => {
  const errors = [];
  const mandatoryFields = ["url"];
  const missingParameters = mandatoryFieldsValidation(mandatoryFields, data);

  if (missingParameters.length)
    errors.push(
      `Mandatory parameters are missing: ${missingParameters.join(",")}`
    );
  return errors;
};

module.exports = {
  getScrapeDetailsValidation
};
