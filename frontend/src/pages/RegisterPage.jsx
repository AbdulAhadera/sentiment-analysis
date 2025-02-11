import RegisterForm from "../components/RegisterUser"

function RegisterPage() {
    return (
        <div className="w-full flex justify-center items-center shadow-lg">

            <div className="w-full md:w-1/2 bg-gray-200">
                <RegisterForm />
            </div>

            <div className="hidden bg-black md:w-1/2 md:block">as</div>
        </div>
    )
}

export default RegisterPage