import clsx from 'clsx';

import { useForm } from 'react-hook-form';

import css from '../styles/RequestForm.module.css';
import { useEffect } from 'react';

const RequestForm = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: { name: '', email: '', dates: '', comment: '' },
  });

  const onSubmit = (data) => {
    console.log({ camperId: id, ...data });
    reset();
    blur();
  };

  return (
    <form className={css.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={clsx(css.formInputField, {
          [css.error]: errors.name,
        })}
        value={errors.name && setValue('name', '')}
        placeholder={errors.name ? 'Name is required' : 'Name'}
        {...register('name', { required: true, minLength: 3, maxLength: 30 })}
      />
      <input
        className={clsx(css.formInputField, {
          [css.error]: errors.email,
        })}
        value={errors.email && setValue('email', '')}
        placeholder={
          errors.email ? 'Email should be as example@mail.com' : 'Email'
        }
        {...register('email', {
          required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        })}
      />
      <input
        className={clsx(css.formInputField, {
          [css.error]: errors.dates,
        })}
        value={errors.dates && setValue('dates', '')}
        placeholder={errors.dates ? 'Dates are required' : 'Dates'}
        {...register('dates', { required: true })}
      />
      <textarea
        className={css.formTextareaField}
        placeholder="Comment"
        {...register('comment')}
      />
      <button className={css.formSubmitButton} type="submit">
        Send
      </button>
    </form>
  );
};

export default RequestForm;
