import * as Yup from 'yup'

export const userSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  guests: Yup.number() // Changed from string to number for numeric validation
    .min(1, 'Must be at least 1')
    .max(10, 'Must be less than 10')
    .required('Required'),
  tel: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, 'Invalid phone number format')
    .required('Required'),
  date: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (expected YYYY-MM-DD)')
    .required('Required'),
  time: Yup.string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format') // Added time format validation
    .required('Required'),
  occasion: Yup.string().required('Required'),
})

// Define the initial values
export const initialValues = {
  email: '',
  guests: '',
  tel: '',
  date: '',
  time: '',
  occasion: '',
}
