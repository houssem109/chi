import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
import { SliverText } from "../ui/silver-text";

export default function Register() {
    return (
        <main className="overflow-hidden p-0 w-full dark:bg-neutral-950 bg-white dark:bg-grid-white/5 bg-grid-black/[0.2] relative">
            <Nav />
            <div className="max-w-[1700px] mx-auto relative mb-10 pt-5 xl:px-[80px] mt-0 sm:px-[40px] px-4 min-h-[calc(100vh-60px)] flex flex-col h-full">
                <SliverText className="text-4xl font-bold">Register</SliverText>
                <form className="flex flex-col space-y-4 mt-4">
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className="font-mono text-[20px] mb-1">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            className="md:w-[600px] w-full bg-transparent pl-2 py-3 text-white rounded border-white/20 border-2 font-mono focus:outline-none focus:border-white/40 transition-all focus:pl-4"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="font-mono text-[20px] mb-1">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            className="md:w-[600px] w-full bg-transparent pl-2 py-3 text-white rounded border-white/20 border-2 font-mono focus:outline-none focus:border-white/40 transition-all focus:pl-4"
                            placeholder="Enter your last name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="cin" className="font-mono text-[20px] mb-1">ID Number</label>
                        <input
                            type="text"
                            id="cin"
                            className="md:w-[600px] w-full bg-transparent pl-2 py-3 text-white rounded border-white/20 border-2 font-mono focus:outline-none focus:border-white/40 transition-all focus:pl-4"
                            placeholder="Enter your ID number"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="font-mono text-[20px] mb-1">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            className="md:w-[600px] w-full bg-transparent pl-2 py-3 text-white rounded border-white/20 border-2 font-mono focus:outline-none focus:border-white/40 transition-all focus:pl-4"
                            placeholder="Enter your phone number"
                        />
                    </div>
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
                        <label htmlFor="facebook" className="font-mono text-[20px] mb-1">Facebook Profile</label>
                        <input
                            type="text"
                            id="facebook"
                            className="md:w-[600px] w-full bg-transparent pl-2 py-3 text-white rounded border-white/20 border-2 font-mono focus:outline-none focus:border-white/40 transition-all focus:pl-4"
                            placeholder="Enter your Facebook profile link"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="university" className="font-mono text-[20px] mb-1">University</label>
                        <input
                            type="text"
                            id="university"
                            className="md:w-[600px] w-full bg-transparent pl-2 py-3 text-white rounded border-white/20 border-2 font-mono focus:outline-none focus:border-white/40 transition-all focus:pl-4"
                            placeholder="Enter your university"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-mono text-[20px] mb-1">Internship Type</label>
                        <div className="flex space-x-4">
                            <label>
                                <input type="radio" name="internshipType" value="1" className="mr-2" />
                                1
                            </label>
                            <label>
                                <input type="radio" name="internshipType" value="2" className="mr-2" />
                                2
                            </label>
                            <label>
                                <input type="radio" name="internshipType" value="3" className="mr-2" />
                                3
                            </label>
                            <label>
                                <input type="radio" name="internshipType" value="4" className="mr-2" />
                                4
                            </label>
                        </div>
                    </div>
                    <div className="flex mt-5 flex-col">
                        <label htmlFor="startDate" className="font-mono text-[20px] mb-1">
                            Start Date
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            className="md:w-[600px] w-full bg-transparent pl-2 py-3 text-white rounded border-white/20 border-2 font-mono focus:outline-none focus:border-white/40 transition-all focus:pl-4"
                        />
                    </div>

                    <div className="flex mt-5 flex-col">
                        <label htmlFor="endDate" className="font-mono text-[20px] mb-1">
                            End Date
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            className="md:w-[600px] w-full bg-transparent pl-2 py-3 text-white rounded border-white/20 border-2 font-mono focus:outline-none focus:border-white/40 transition-all focus:pl-4"
                        />
                    </div>

                    {/* Submit and Reset Buttons */}
                    <div className="flex space-x-4 mt-4">
                        <button
                            name="SubmitBtn"
                            className=" text-neutral-200  bg-emerald-500   active:scale-100 transition-all  bg-gradient-to-tr from-emerald-600 to-emerald-700    py-2  text-[16px]  px-10 font-sans font-semibold rounded-md hover:from-neutral-300 hover:to-neutral-400 hover:text-black    shadow-[0px_0px_20px_#05966988]  ">
                            Submit
                        </button>
                        <button
                            name="ResetBtn"
                            type="reset"
                            className="text-neutral-200 bg-gray-500 active:scale-100 transition-all bg-gradient-to-tr from-gray-600 to-gray-700 py-2 text-[16px] px-10 font-sans font-semibold rounded-md hover:from-neutral-300 hover:to-neutral-400 hover:text-black shadow-[0px_0px_20px_#6b728088]"
                        >
                            Reset
                        </button>

                    </div>
                </form>
            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
}
