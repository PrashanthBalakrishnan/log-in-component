import AuthForm from './components/AuthForm'

export default function Home() {
    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 md:bg-gray-100">
            <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white rounded-md md:shadow-lg">
                <h2 className="text-2xl font-bold text-darkBlue tracking-tight mt-6 flex justify-center w-full">
                    Log in
                </h2>
                <AuthForm />
            </div>
        </div>
    )
}
