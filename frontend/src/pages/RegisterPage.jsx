import RegisterForm from "../components/RegisterUser"

function RegisterPage() {
    return (
        <div className="pt-12 w-full min-h-screen flex justify-center items-center md:px-28">

            <div className="w-full md:w-1/2  rounded-lg py-2">
                <RegisterForm />
            </div>

            <div className="hidden bg-black md:w-1/2 md:block">as</div>
        </div>
    )
}

export default RegisterPage