
import * as yup from 'yup';
const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    title: yup.string().required('Title is required'),
    desc: yup.string().required('Desc is required'),
  });
  
  export default schema;