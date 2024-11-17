import { AlignJustify } from "lucide-react";
import { SliverText } from "../ui/silver-text";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Link, useNavigate } from "react-router-dom";
export default function Nav() {
    const navigateFunction = useNavigate();
    return (
        <nav className="flex max-w-[1600px] mx-auto pt-5 xl:px-[80px] md:px-[50px] px-5">
            <SliverText className="text-[36px]">CGI_Studio</SliverText>
            <div className="md:flex hidden w-full ml-auto   items-center justify-end">
                <p onClick={() => {
                        navigateFunction("/");
                    }} className="hover-underline-animation hover:cursor-pointer font-medium font-mono text-[20px] ">
                    Home
                </p>
                <p onClick={() => {
                        navigateFunction("/Programs");
                    }}
                 className="hover-underline-animation hover:cursor-pointer font-medium font-mono text-[20px] md:ml-6 ">
                    programs
                </p>
                
                <p onClick={() => {
                        navigateFunction("/");
                    }}
                     className="hover-underline-animation hover:cursor-pointer font-medium font-mono text-[20px] md:ml-6 mr-8 ">
                    Projetcs
                </p>
                <Link to="/register">
                <button
                    name="navActionBtn"
                    className=" text-neutral-200  bg-emerald-500   active:scale-100 transition-all  bg-gradient-to-tr from-emerald-600 to-emerald-700 hover:from-neutral-300 hover:to-neutral-400 hover:text-black    py-2 font-bold text-[18px]  px-6 font-mono  rounded-md    shadow-[0px_0px_20px_#05966988]  ">
                    Registration
                </button>
                </Link>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <AlignJustify className="md:hidden ml-auto my-auto opacity-70 h-[36px] w-[36px] text-[36px] " />
                </SheetTrigger>
                <SheetContent side={"top"}>
                    <div onClick={() => {
                        navigateFunction("/");
                    }} className="hover-underline-animation  !flex opacity-80 py-1 active:scale-95 transition-transform  border  items-center justify-center mt-4 hover:cursor-pointer w-full font-medium font-mono text-[28px] ">
                        Home
                    </div>
                    <div 
                    onClick={()=> navigateFunction("/ProgramsPage")}
                     className="hover-underline-animation !flex opacity-80 py-1 active:scale-95 transition-transform  border items-center justify-center mt-4 hover:cursor-pointer w-full font-medium font-mono text-[28px] ">
                        programs
                    </div>
                    <div className="hover-underline-animation !flex opacity-80 py-1 active:scale-95 transition-transform  border items-center justify-center mt-4 hover:cursor-pointer w-full font-medium font-mono text-[28px] ">
                        Projetcs
                    </div>
                    <div onClick={() => {
                        navigateFunction("/register");
                    }} className="hover-underline-animation !flex opacity-80 py-1 active:scale-95 transition-transform  border items-center justify-center mt-4 hover:cursor-pointer w-full font-medium font-mono text-[28px] ">
                        Registration
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
