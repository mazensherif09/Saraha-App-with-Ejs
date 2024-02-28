import Joi from "joi";

const registerValidation = Joi.object({
  name: Joi.string().pattern(/[a-zA-Z]/).min(2).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  PasswordConfirmation: Joi.valid(Joi.ref("password")).required(),
});

export { registerValidation };
