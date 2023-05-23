import { IconType } from 'react-icons'

interface AuthSocialButtonProps {
    icon: IconType
    onClick: () => void
    text: string
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
    icon: Icon,
    text: string,
    onClick,
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="inline-flex w-full justify-center items-center gap-2 rounded-md bg-white p-6 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-lightBlue focus:outline-offset-0"
        >
            <Icon />
            <span className="font-semibold">{string}</span>
        </button>
    )
}
export default AuthSocialButton
