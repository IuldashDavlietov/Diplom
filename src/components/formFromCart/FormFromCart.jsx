import { useDispatch } from 'react-redux';
import styles from './FormFromCart.module.css';
import { useForm } from 'react-hook-form';
import { orderPost } from "../../store/slices/orderPost"

function FormFromCart() {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const getDataFromInputs = (data) => {
    reset();
    dispatch(orderPost(data));
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(getDataFromInputs)}
        className={styles.discountForm_form}
      >
        <input
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "You should have at least 2 letter",
            },
          })}
          type="text"
          placeholder="Name"
        />
        {errors.name && (
          <p className={styles.errors_text}>{errors.name.message}</p>
        )}
        <input
          type="text"
          placeholder="Phone number"
          {...register("phone", {
            required: "Phone is required",
            maxLength: {
              value: 13,
              message: "Too many digits",
            },
            minLength: {
              value: 12,
              message: "Too few digits",
            },
          })}
        />
        {errors.phone && (
          <p className={styles.errors_text}>{errors.phone.message}</p>
        )}
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "Invalid email",
            },
          })}
        />
        {errors.email && (
          <p className={styles.errors_text}>{errors.email.message}</p>
        )}
        <button className={styles.btn_submit} type="submit">
          Order
        </button>
      </form>
    </>
  );
}
export default FormFromCart;