import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Email is not valid')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must have at least 6 characters')
    .required('Password is required'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your email" />
        <Input name="password" type="password" placeholder="Your password" />
        <button type="submit">
          {loading ? 'Loading...' : 'Create Account'}
        </button>
        <Link to="/">I have an account</Link>
      </Form>
    </>
  );
}
