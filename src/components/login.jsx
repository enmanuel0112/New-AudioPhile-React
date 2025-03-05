import React, { useState, useContext, useEffect } from 'react';
import { contextComponents } from '../context/contextComponents';
import { useForm } from "react-hook-form";
import '../scss/StylesComponents/login.scss';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Home from './home';
import { Loader } from './staticsComponents';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


export function Form() {
    const { auth } = useContext(contextComponents);
    const [changeLoginToRegister, setChangeLoginToRegister] = useState(false);

    const Login = () => {
        const { user } = useContext(contextComponents);

        const {
            register,
            handleSubmit,
            formState: { errors }
        } = useForm()

        const onSubmit = handleSubmit(async (data) => {

            const email = data.email;
            const password = data.Password;

            try {
                if (!changeLoginToRegister) {
                    await signInWithEmailAndPassword(auth, email, password)
                }
            } catch (error) {
                alert(`Esta cuenta no existe tiene que registrate ${error}`)
            }

        })

        return (
            <>
                <div className="login-form">
                    <div className="logo">
                        <Link to='/'> <img src='/assets/shared/desktop/logo 1.png' alt="" /></Link>
                    </div>

                    <div className='login'>
                        <div className=' login-content' >
                            <h4>{changeLoginToRegister ? 'Create your account' : 'Welcome back! '}</h4>
                            <p>{changeLoginToRegister ? 'create a free account and start using' : 'Enter your email address and password to access admin panel'} <span>audiophile</span></p>
                        </div>

                        <form action="" onSubmit={onSubmit}>
                            <label htmlFor="email">
                                <p>Email Address</p>
                                <div className="input">
                                    <span>
                                        <MdEmail className='icon' />
                                    </span>
                                    <input
                                        type="text" placeholder='example@correo.com'
                                        {...register('email', {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            }
                                        })}
                                    />
                                </div>

                                {errors.email?.type === "required" && <span className='input-errors'>{errors.email.message}</span>}
                            </label>

                            <label htmlFor="password">
                                <p>Password</p>
                                <div className="input">
                                    <span>
                                        <FaLock className='icon' />
                                    </span>
                                    <input
                                        type="password" placeholder='Password'
                                        {...register('Password', {
                                            required: {
                                                value: true,
                                                message: 'password is requiered'
                                            }
                                        })}
                                    />

                                </div>
                                {errors.password?.type === "required" && <span className='input-errors'>{errors.password.message}</span>}
                            </label>

                            <button className='btn-login' >
                                sign in
                            </button>



                        </form>
                    </div>
                </div>
            </>)
    }

    const Register = () => {

        const {
            register,
            handleSubmit,
            formState: { errors }
        } = useForm();

        const onSubmit = handleSubmit(async (data) => {
            const email = data.email;
            const password = data.Password;
            const name = data.name;
            try {
                if (changeLoginToRegister) {
                    await createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            const user2 = userCredential.user;

                            // const userName = user
                            console.log('que me retornas', user2)
                        })

                }
            } catch (error) {
                alert(`no se pudo registrar tu cuenta ${error}`)
            }
        })
        return (
            <>
                <div className="login-form">
                    <div className="logo">
                        <Link to='/'> <img src='/assets/shared/desktop/logo 1.png' alt="" /></Link>
                    </div>

                    <div className='login'>
                        <div className=' login-content' >
                            <h4>{changeLoginToRegister ? 'Create your account' : 'Welcome back! '}</h4>
                            <p>{changeLoginToRegister ? 'create a free account and start using' : 'Enter your email address and password to access admin panel'} <span>audiophile</span></p>
                        </div>

                        <form action="" onSubmit={onSubmit}>

                            <label htmlFor="name" className={changeLoginToRegister ? 'input-hidden' : ' input-active'}>
                                <p>Name</p>
                                <div className="input">
                                    <span>
                                        <FaUser className='icon' />
                                    </span>
                                    <input type="text" placeholder='Name'
                                        {...register('name', {
                                            required: {
                                                value: true,
                                                message: 'Name is requiered'
                                            }
                                        })}
                                    />
                                </div>
                                {errors.name?.type === "required" && <span className='input-errors'>{errors.name.message}</span>
                                }
                            </label>

                            <label htmlFor="email">
                                <p>Email Address</p>
                                <div className="input">
                                    <span>
                                        <MdEmail className='icon' />
                                    </span>
                                    <input
                                        type="email" placeholder='example@correo.com'
                                        {...register('email', {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            }
                                        })}
                                    />
                                </div>

                                {errors.email?.type === "required" && <span className='input-errors'>{errors.email.message}</span>}
                            </label>

                            <label htmlFor="password">
                                <p>Password</p>
                                <div className="input">
                                    <span>
                                        <FaLock className='icon' />
                                    </span>
                                    <input
                                        type="password" placeholder='Password'
                                        {...register('Password', {
                                            required: {
                                                value: true,
                                                message: 'password is requiered'
                                            }
                                        })}
                                    />

                                </div>
                                {errors.password?.type === "required" && <span className='input-errors'>{errors.password.message}</span>}
                            </label>


                            <button className='btn-login'>sing up</button>
                        </form>
                    </div>
                </div>
            </>)
    }

    return (
        <div className='login-section'>

            <div className="login-container">
                {changeLoginToRegister ? <Register /> : <Login />}
                <div className="login-image">
                    <img src="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg" alt="" />
                    <div className="slogan">
                        <h3>i simply love it !</h3>
                        <p>Live the best moments listening to the best music with <span>audiophile</span> products.</p>
                    </div>
                </div>

                <h3>
                    {changeLoginToRegister ? 'Have you an account already ?' : 'Create you account here'}

                    <span>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setChangeLoginToRegister(!changeLoginToRegister)
                            }}
                        >
                            {changeLoginToRegister ? 'login' : 'register'}
                        </button>
                    </span>
                </h3>

            </div>
        </div>
    )
}

function UserAuthenticated() {
    const { user } = useContext(contextComponents);
    const [loading, setLoading] = useState(false);
    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    const handleSignIn = () => {

        if (!loading) {
            return <Loader />;
        }

        return <Home />
        // Sign in logic here
    };

    const handleSignOut = () => {

        if (!loading) {
            return <Loader />;
        }
        return <Form />
    };




    return (
        <>
            {user ? handleSignIn() : handleSignOut()}
        </>
    )



}

export default UserAuthenticated