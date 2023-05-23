'use client'
import Button from '@/app/components/Button'
import Input from '@/app/components/Input'
import { useCallback, useEffect, useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { BsDiscord } from 'react-icons/bs'
import discordIcon from '@/public/discordIcon.svg'
import googleIcon from '@/public/googleIcon.svg'
import AuthSocialButton from './AuthSocialButton'
import axios from 'axios'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type Variant = 'LOGIN' | 'REGISER'

const AuthForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })

    const socialAction = (action: string) => {
        setIsLoading(true)
        signIn(action, { redirect: false })
            .then((callback) => {
                if (callback?.error) {
                    alert('error')
                }
                if (callback?.ok && !callback?.error) {
                    alert('logged in')
                }
            })
            .finally(() => setIsLoading(false))
    }

    const session = useSession()
    const router = useRouter()
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISER')
        } else {
            setVariant('LOGIN')
        }
    }, [variant])

    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-md p-5 md:p-0">
            <div className="bg-white py-6  sm:rounded-lg sm:px-10 ">
                <form className="flex flex-col gap-3">
                    {variant === 'REGISER' && (
                        <Input
                            id="name"
                            label="Name"
                            register={register}
                            disabled={isLoading}
                            errors={errors}
                            placeholder="Enter Name"
                        />
                    )}
                    <Input
                        id="email"
                        label="Email address"
                        type="email"
                        register={register}
                        disabled={isLoading}
                        errors={errors}
                        placeholder="Enter email"
                    />
                    <Input
                        id="password"
                        label="Password"
                        type="password"
                        register={register}
                        disabled={isLoading}
                        errors={errors}
                        placeholder="Enter Password"
                    />
                    <div>
                        <Button disabled={isLoading} fullWidth type="submit">
                            {variant === 'LOGIN' ? 'Log in' : 'Register'}
                        </Button>
                    </div>
                </form>
                <div>
                    <div className="w-full my-8">
                        <p className="text-gray-400 font-semibold flex justify-center">
                            OR
                        </p>
                    </div>
                    <div>
                        <div className="flex flex-col gap-3">
                            <AuthSocialButton
                                icon={BsDiscord}
                                text="Continue with Discord"
                                onClick={() => socialAction('discord')}
                            />
                            <AuthSocialButton
                                icon={FcGoogle}
                                text="Continue with Google"
                                onClick={() => socialAction('google')}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 justify-center mt-6 text-darkBlue font-semibold">
                    <button
                        type="button"
                        onClick={toggleVariant}
                        className="cursor-pointer"
                    >
                        {variant === 'LOGIN'
                            ? 'Create an account'
                            : 'Already have an account?'}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default AuthForm
