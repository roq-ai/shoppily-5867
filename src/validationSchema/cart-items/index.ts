import * as yup from 'yup';

export const cartItemValidationSchema = yup.object().shape({
  product_id: yup.string().nullable(),
  cart_id: yup.string().nullable(),
});
