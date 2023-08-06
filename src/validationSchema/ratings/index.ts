import * as yup from 'yup';

export const ratingValidationSchema = yup.object().shape({
  score: yup.number().integer().required(),
  product_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
