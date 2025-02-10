const Login = () => {

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form className="flex flex-col items-center justify-center">
          <input
          required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
          required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
