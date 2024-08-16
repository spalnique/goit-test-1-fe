import clsx from 'clsx';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { resetQuery, setQuery } from '../redux/adverts/slice.js';

import css from '../styles/FilterForm.module.css';
import icons from '../assets/icons/icons.svg';

const FilterForm = () => {
  const disabled = true; // Due to backend limitations some filters has been disabled. Set disabled to true in order to start using them.
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, setFocus, reset } = useForm({
    defaultValues: {
      location: '',
      form: '',
      transmission: false,
      airConditioner: false,
      kitchen: false,
      TV: false,
      shower: false,
    },
  });

  const onSubmit = ({ location, form, transmission, ...rest }) => {
    const query = {};
    if (location) query.location = location;
    if (form) query.form = form;
    if (transmission) query.transmission = 'automatic';

    for (const key in rest) {
      if (rest[key]) {
        query[key] = 1;
      }
    }
    dispatch(setQuery(query));
  };

  const handleReset = () => {
    dispatch(resetQuery());
    reset();
  };

  return (
    <form className={css.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.locationWrapper}>
        <label className={css.locationLabel} htmlFor="location">
          Location
        </label>
        <input
          className={css.locationInputField}
          id="location"
          placeholder="Kyiv, Ukraine"
          {...register('location')}
        />
        <svg
          width={18}
          height={20}
          style={{ position: 'absolute', top: 50, left: 18 }}
          onClick={() => {
            setFocus('location');
          }}>
          <use xlinkHref={`${icons}#location`} />
        </svg>
      </div>
      <span className={css.tipText}>Filters</span>
      <p className={css.filterTitle}>Vehicle equipment</p>
      <div className={css.checkboxWrapper}>
        <label
          className={clsx(css.checkboxLabel, {
            [css.checkboxSelected]: watch('airConditioner'),
            [css.checkboxDisabled]: disabled,
          })}>
          <svg width={32} height={32}>
            <use
              xlinkHref={`${icons}#${
                disabled ? 'airConditionerDisabled' : 'airConditioner'
              }`}
            />
          </svg>
          AC
          <input
            hidden={true}
            type="checkbox"
            disabled={disabled}
            {...register('airConditioner')}
          />
        </label>
        <label
          className={clsx(css.checkboxLabel, {
            [css.checkboxSelected]: watch('transmission'),
          })}>
          <svg width={32} height={32}>
            <use xlinkHref={`${icons}#transmission`} />
          </svg>
          Automatic
          <input hidden={true} type="checkbox" {...register('transmission')} />
        </label>
        <label
          className={clsx(css.checkboxLabel, {
            [css.checkboxSelected]: watch('kitchen'),
            [css.checkboxDisabled]: disabled,
          })}>
          <svg width={32} height={32}>
            <use
              xlinkHref={`${icons}#${disabled ? 'kitchenDisabled' : 'kitchen'}`}
            />
          </svg>
          Kitchen
          <input
            hidden={true}
            type="checkbox"
            disabled={disabled}
            {...register('kitchen')}
          />
        </label>
        <label
          className={clsx(css.checkboxLabel, {
            [css.checkboxSelected]: watch('TV'),
            [css.checkboxDisabled]: disabled,
          })}>
          <svg width={32} height={32}>
            <use xlinkHref={`${icons}#${disabled ? 'TVDisabled' : 'TV'}`} />
          </svg>
          TV
          <input
            hidden={true}
            type="checkbox"
            disabled={disabled}
            {...register('TV')}
          />
        </label>
        <label
          className={clsx(css.checkboxLabel, {
            [css.checkboxSelected]: watch('shower'),
            [css.checkboxDisabled]: disabled,
          })}>
          <svg width={32} height={32}>
            <use
              xlinkHref={`${icons}#${disabled ? 'showerDisabled' : 'shower'}`}
            />
          </svg>
          Shower/WC
          <input
            hidden={true}
            type="checkbox"
            disabled={disabled}
            {...register('shower')}
          />
        </label>
      </div>
      <p className={css.filterTitle}>Vehicle type</p>
      <div className={css.radiobuttonWrapper}>
        <label
          className={clsx(css.radiobuttonLabel, {
            [css.radiobuttonSelected]: watch('form') === 'panelTruck',
          })}>
          <svg width={32} height={32}>
            <use xlinkHref={`${icons}#panelTruck`} />
          </svg>
          Van
          <input
            hidden={true}
            value="panelTruck"
            type="radio"
            name="form"
            {...register('form')}
          />
        </label>
        <label
          className={clsx(css.radiobuttonLabel, {
            [css.radiobuttonSelected]: watch('form') === 'fullyIntegrated',
          })}>
          <svg width={40} height={28}>
            <use xlinkHref={`${icons}#fullyIntegrated`} />
          </svg>
          Fully Integrated
          <input
            hidden={true}
            value="fullyIntegrated"
            type="radio"
            name="form"
            {...register('form')}
          />
        </label>
        <label
          className={clsx(css.radiobuttonLabel, {
            [css.radiobuttonSelected]: watch('form') === 'alcove',
          })}>
          <svg width={32} height={32}>
            <use xlinkHref={`${icons}#alcove`} />
          </svg>
          Alcove
          <input
            hidden={true}
            value="alcove"
            type="radio"
            name="form"
            {...register('form')}
          />
        </label>
      </div>

      <div className={css.buttonsWrapper}>
        <button className={css.formSubmitButton} type="submit">
          Send
        </button>
        <button
          className={css.formSubmitButton}
          type="button"
          onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
