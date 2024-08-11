import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import clsx from 'clsx';

import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';

// import { closeModal } from '../redux/modal/slice.js';

import css from '../styles/RequestForm.module.css';
import icons from '../assets/icons/icons.svg';

const RequestForm = ({ id }) => {
  // const dispatch = useDispatch();

  const parseDate = (date) => {
    const formatted = new Date(date);

    const day = formatted.getDate();
    const month = formatted.getMonth() + 1;
    const year = formatted.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setValue('dates', `${parseDate(start)} - ${parseDate(end)}`);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: { name: '', email: '', dates: '', comment: '' },
  });

  const onSubmit = (data) => {
    localStorage.setItem(
      'requestData',
      JSON.stringify({ camperId: id, ...data })
    );
    const tId = setTimeout(() => {
      clearTimeout(tId);
      // dispatch(closeModal());
      window.location.reload();
    }, 2000);
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
      <div style={{ position: 'relative' }}>
        <DatePicker
          className={clsx(css.formInputField, {
            [css.error]: errors.dates,
          })}
          placeholderText={errors.dates ? 'Dates are required' : 'Dates'}
          dateFormat={'dd/MM/yyyy'}
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          customInput={
            <input
              value={errors.dates && setValue('dates', '')}
              {...register('dates', { required: true })}
            />
          }
        />
        <svg
          width={20}
          height={20}
          style={{ position: 'absolute', top: 18, right: 18 }}>
          <use xlinkHref={`${icons}#calendar`} />
        </svg>
      </div>
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
