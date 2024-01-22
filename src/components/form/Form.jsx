import { useDispatch } from "react-redux";
import style from "./Form.module.css";
import { useForm } from 'react-hook-form';
import { salePost } from "../../store/slices/salePost";

function Form() {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const getDataFromInputs = (data) => {
        reset();
        dispatch(salePost(data))
    }

    return (
        <>
            <div className={style.item_form}>
                <form onSubmit={handleSubmit(getDataFromInputs)} className={style.discountForm_form}>
                    <input
                        {...register('name', {
                            required: "Name is required",
                            minLength: {
                                value: 2,
                                message: 'You should have at least 2 letter'
                            }
                        })}
                        type="text"
                        placeholder='Name' />
                    {errors.name && (
                        <p className={style.errors_text}>{errors.name.message}</p>)}
                    <input
                        type="text"
                        placeholder='Phone number'
                        {...register('phone', {
                            required: "Phone is required",
                            maxLength: {
                                value: 13,
                                message: 'Too many digits'
                            },
                            minLength: {
                                value: 12,
                                message: 'Too few digits'
                            }
                        })} />
                    {errors.phone && (
                        <p className={style.errors_text}>{errors.phone.message}</p>)}
                    <input type="text" placeholder='Email' {...register('email', {
                        required: "Email is required",
                        pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: "Invalid email",
                        },
                    })} />
                    {errors.email && (
                        <p className={style.errors_text}>{errors.email.message}</p>)}
                    <button className={style.btn_submit} type='submit'>Get a discount</button>
                </form>
            </div>
        </>
    )
}

export default Form;