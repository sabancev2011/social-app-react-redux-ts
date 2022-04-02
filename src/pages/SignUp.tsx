import React, { useState, useEffect } from "react";
import { Icons } from "../components";
import { useForm } from "react-hook-form";
import { faker } from "@faker-js/faker";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateUser } from "../redux/actions/users";
import { Redirect } from "react-router-dom";
import { RootState } from "../redux/reducers";


interface InputTypes {
    name: string
    lastName: string
    country: string
    city: string
    email: string
    jobTitle: string
    dateOfBirth: string
    password: string
    img: string
}


const SignUp: React.FC = () => {

    const dispatch = useDispatch();
    const [addImage, setAddImage] = useState("/assets/user.svg");
    const [redirect, setRedirect] = useState<number>();
    const id = useSelector(({ users }: RootState) => users.currentUser?.id);
    const { register, formState: { errors }, handleSubmit, reset, setValue, clearErrors } = useForm<InputTypes>({ mode: 'onBlur' });

    useEffect(() => {
        setValue("img", addImage);
        setRedirect(id)
    }, [addImage, id, setValue]);

    const onSubmit = (user: InputTypes) => {
        dispatch(fetchCreateUser({ id: 0, ...user }));
        reset()
    }
    const getRandomData = (e: React.FormEvent<HTMLButtonElement>) => {
        setValue("name", faker.name.firstName());
        setValue("lastName", faker.name.lastName());
        setValue("country", faker.address.country());
        setValue("city", faker.address.city());
        setValue("email", faker.internet.email());
        setValue("jobTitle", faker.name.jobTitle());
        setValue("dateOfBirth", faker.date.between('1975-01-01', '2000-01-01').toLocaleDateString());
        setValue("password", faker.internet.password());
        setAddImage(`https://image.freepik.com/free-photo/_176420-${Math.floor(Math.random() * 10000)}.jpg?size=150`);
        clearErrors();
        e.preventDefault();
    }

    return (
        <section className="form">
            {redirect && <Redirect to={`/profile/${redirect}`} />}
            <div className="form__wrapper">
                <h3 className="form__title">Sign Up</h3>
                <div className="form__imgWrapper">
                    <img className="form__img" src={addImage} alt="img"></img>
                    <button className="form__imgInner" {...register('img')} value={addImage}
                        onClick={() => setAddImage(`https://image.freepik.com/free-photo/_176420-${Math.floor(Math.random() * 10000)}.jpg?size=150`)}>
                        <Icons className={addImage === `http://localhost:3000/assets/user.svg` ? "share__addFotoIcon" : "share__addFotoIcon added"} />
                        <p className="form__imgText">set foto</p>
                    </button>
                </div>

                <form className="form__form">
                    <label className="form__label">Name
                        <input {...register('name', { required: true })} className={errors.name ? "form__input error" : "form__input"}></input>
                        {errors.name && <p className="form__error">This field is required</p>}
                    </label>
                    <label className="form__label">Last name
                        <input {...register('lastName', { required: true })} className={errors.lastName ? "form__input error" : "form__input"}></input>
                        {errors.lastName && <p className="form__error">This field is required</p>}
                    </label>
                    <label className="form__label">Country
                        <input {...register('country')} className="form__input"></input>
                    </label>
                    <label className="form__label">City
                        <input {...register('city')} className="form__input"></input>
                    </label>
                    <label className="form__label">E-mail
                        <input {...register('email', {
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                            className={errors.email ? "form__input error" : "form__input"}></input>
                        {errors.email && <p className="form__error">Please enter a valid email</p>}
                    </label>
                    <label className="form__label">Job title
                        <input {...register('jobTitle')} className="form__input"></input>
                    </label>
                    <label className="form__label">Date of birth: DD.MM.YYYY
                        <input {...register('dateOfBirth', {
                            pattern: /(\d{2}).(\d{2}).(\d{4})/
                        })} className={errors.dateOfBirth ? "form__input error" : "form__input"}></input>
                        {errors.dateOfBirth && <p className="form__error">Please enter a date in the format: DD.MM.YYYY</p>}
                    </label>
                    <label className="form__label">Password
                        <input type={"password"} {...register('password', {
                            required: true,
                            minLength: 6
                        })} className={errors.password ? "form__input error" : "form__input"}></input>
                        {errors.password && <p className="form__error">Password must be at least 6 characters</p>}
                    </label>
                    <div className="form__btnWrapper">
                        <button type="submit" onClick={handleSubmit(onSubmit)} className="form__btn">create an account</button>
                        <button onClick={getRandomData} className="form__btn">random data</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignUp