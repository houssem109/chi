import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";

export default function Register() {
    return (
        <div className="min-h-screen flex flex-col dark:bg-neutral-950 bg-white">
            <Nav />
            <main className="flex-grow p-10">
                <h1 className="text-4xl font-bold text-center">Register</h1>
            </main>
            <Footer />
        </div>
    );
}