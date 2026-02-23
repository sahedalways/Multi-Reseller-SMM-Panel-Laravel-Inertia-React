import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow container mx-auto py-6">{children}</main>

            <Footer />
        </div>
    );
}
