import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
//
export default function Register() {
    return (
        <main className="  overflow-hidden p-0 w-full dark:bg-neutral-950 bg-white dark:bg-grid-white/5 bg-grid-black/[0.2] relative">
            <Nav />
            <div className=" min-h-[calc(100vh-60px)] flex flex-col h-full ">
                <h1 className="text-4xl font-bold text-center">Register</h1>
                <form>
                    {/* nom, prenom , cin , phone , email , facebooklink , university etablissment , type de stage , date de debut et fin de stage , form */}
                </form>

                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </main>
    );
}
