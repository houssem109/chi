import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
import { SliverText } from "../ui/silver-text";

export default function Login() {
    return (
        <main className="overflow-hidden p-0 w-full dark:bg-neutral-950 bg-white dark:bg-grid-white/5 bg-grid-black/[0.2] relative">
            <Nav />
            <div className="max-w-[1700px] mx-auto text-center items-center justify-center m relative mb-10 pt-5 xl:px-[80px] mt-0 sm:px-[40px] px-4 min-h-[calc(100vh-60px)] flex flex-col h-full">
                <SliverText className="text-4xl font-bold">Login</SliverText>
                <form className="flex flex-col space-y-4 mt-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-mono text-[20px] mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="md:w-[600px] w-full bg-transparent pl-2 py-3 text-white rounded border-white/20 border-2 font-mono focus:outline-none focus:border-white/40 transition-all focus:pl-4"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="font-mono text-[20px] mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="md:w-[600px] w-full bg-transparent pl-2 py-3 text-white rounded border-white/20 border-2 font-mono focus:outline-none focus:border-white/40 transition-all focus:pl-4"
                            placeholder="Enter your password"
                        />
                    </div>
                    
                    {/* Remember Me and Forgot Password */}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <input type="checkbox" id="rememberMe" className="mr-2" />
                            <label htmlFor="rememberMe" className="font-mono text-[16px]">
                                Remember Me
                            </label>
                        </div>
                        <a href="#" className="text-emerald-500 font-mono text-[16px] hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Submit Button */}
                    <div className="flex space-x-4 mt-6">
                        <button
                            name="LoginBtn"
                            className="transition-all py-2 text-[16px] px-10 font-sans font-semibold rounded-md shadow-[0px_0px_20px_#05966988] bg-gradient-to-tr from-emerald-600 to-emerald-700 text-white hover:from-neutral-300 hover:to-neutral-400 hover:text-black"
                        >
                            Login
                        </button>
                        <button
                            name="ResetBtn"
                            type="reset"
                            className="text-neutral-200 bg-gray-500 active:scale-100 transition-all bg-gradient-to-tr from-gray-600 to-gray-700 py-2 text-[16px] px-10 font-sans font-semibold rounded-md hover:from-neutral-300 hover:to-neutral-400 hover:text-black shadow-[0px_0px_20px_#6b728088]"
                        >
                            Reset
                        </button>
                    </div>

                    {/* Register Redirect */}
                    <div className="mt-6">
                        <p className="font-mono text-[16px]">
                            Don’t have an account?{" "}
                            <a href="/register" className="text-emerald-500 hover:underline">
                                Register here
                            </a>
                        </p>
                    </div>
                </form>
            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
}
