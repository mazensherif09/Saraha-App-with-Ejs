import joi from "joi";

  const messageSchemaValidation = joi.object({
    message: joi.string().min(2).max(200).required(),
    userId: joi.string().hex().length(24)  
});

const validationId = joi.object({
  userId: joi.string().hex().length(24)
})

export { messageSchemaValidation, validationId };