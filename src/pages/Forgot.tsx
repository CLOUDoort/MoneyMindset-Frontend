import { Link } from 'react-router-dom'
import OAuth from '../components/OAuth'
import { useState } from "react"

const Forgot = () => {
    const [email, setEmail] = useState('')
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
    }
    return (
        <section className='flex justify-center items-center w-full h-full'>
            <div className="flex w-full justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
                <div className="w-full md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img src="/MoneyMindsetLogo.png" alt="logo" className="w-full rounded-2xl" />
                </div>
                <div className="flex w-full flex-col md:w-[67%] lg:w-[40%] ml-0 lg:ml-20">
                    <h1 className="text-5xl lg:text-6xl text-center mb-14 font-bold">Forgot</h1>
                    <form onSubmit={submitHandler}>
                        <div className='text-lg mb-2 font-semibold'>Email</div>
                        <input autoComplete='off' className="w-full mb-6 px-4 py-2 text-xl bg-white border-gray-400 rounded transition ease-in-out" type="email" name="email" value={email} placeholder="example@google.com" onChange={changeHandler} />
                        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                            <p className='mb-6'>
                                Don't have a account?
                                <Link className='ml-1 text-red-600 hover:text-red-700 transition duration 150 ease-in-out' to="/sign-up">
                                    Register
                                </Link>
                            </p>
                            <p className='text-blue-600 hover:text-blue-700 transition duration 150 ease-in-out'>
                                <Link to="/sign-in">Sign in</Link>
                            </p>
                        </div>
                        <button className='w-full uppercase bg-blue-600 text-white px-7 py-3 text-lg font-semibold rounded hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg transition duration 150' type='submit'>Send Reset Email</button>
                        <div className='flex my-4 items-center before:border-t before:border-gray-300 before:flex-1 after:border-t after:border-gray-300 after:flex-1'>
                            <p className='text-center mx-4 font-semibold'>OR</p>
                        </div>
                        <OAuth />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Forgot