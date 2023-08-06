import * as yup from 'yup';

export const shopValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  owner_id: yup.string().nullable(),
});
