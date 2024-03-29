import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '../../ButtonForm'
import Input from '../../InputForm'
import SignInGoogle from '../GoogleAuth'
import { accessToken } from '../../../store/initialState'
import { apiInstance } from '../../../apis/setting'
import { toast } from 'react-toastify'
import { useSetAtom } from 'jotai'
import { useState } from "react"

type FormData = {
    email: string,
    password: string
}

const SignInForm = () => {
    const navigate = useNavigate()
    const setToken = useSetAtom(accessToken)
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const clickSubmit: SubmitHandler<FormData> = async (FieldValues) => {
        const { email, password } = FieldValues
        try {
            const submitResponse = await apiInstance.post(`/user/signin`, { email, password })
            toast.success("로그인 성공!")
            navigate('/money-book/dashboard')
            setToken(submitResponse.data.accessToken)
        } catch (e: any) {
            toast.error(e.response.data.message)
        }

    }
    return (
        <section className='w-full h-full pt-[5rem]'>
            <div className="flex flex-wrap items-center justify-center w-full h-full max-w-6xl px-5 mx-auto">
                <div className="flex w-full flex-col md:w-[55%] lg:w-[40%]">
                    <h1 className="mb-8 text-4xl font-bold text-center lg:text-4xl">Sign-in</h1>
                    <form onSubmit={handleSubmit(clickSubmit)}>
                        <div className='font-semibold'>Email</div>
                        <Input type="email" placeholder="example@google.com" register={{ ...register("email", { required: true }) }} />
                        {errors.email && <span className='text-red-500'>This field is required</span>}
                        <div className='font-semibold'>Password</div>
                        <div className="relative">
                            <Input type={showPassword ? 'text' : "password"} placeholder="password" register={{ ...register("password", { required: true }) }} />
                            {showPassword ? <AiFillEyeInvisible onClick={() => setShowPassword(!showPassword)} className='absolute text-xl cursor-pointer right-3 top-5' /> : <AiFillEye onClick={() => setShowPassword(!showPassword)} className='absolute text-xl cursor-pointer right-3 top-5' />}
                        </div>
                        {errors.password && <span className='text-red-500'>This field is required</span>}
                        <div className='flex justify-between text-sm whitespace-nowrap'>
                            <p className='mb-6'>
                                Don't have a account?
                                <Link className='ml-1 text-red-600 transition ease-in-out hover:text-red-700 duration 150' to="/sign-up">
                                    Register
                                </Link>
                            </p>
                            <p className='text-blue-600 transition ease-in-out hover:text-blue-700 duration 150'>
                                <Link to="/forgot">Forgot password?</Link>
                            </p>
                        </div>
                        <Button type="submit" name="Sign in" />
                        <div className='flex items-center my-3 before:border-t before:border-gray-300 before:flex-1 after:border-t after:border-gray-300 after:flex-1'>
                            <p className='mx-3 font-semibold text-center'>OR</p>
                        </div>
                        <SignInGoogle />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignInForm