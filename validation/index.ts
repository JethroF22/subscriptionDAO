import * as Yup from "yup";

export const newPostValidationSchema = Yup.object().shape({
  title: Yup.string().required("Please enter a title"),
  description: Yup.string().required("Please enter a description"),
});
