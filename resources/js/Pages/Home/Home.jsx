import Hero from "@/Components/Hero";
import MainLayout from "@/Layouts/MainLayout";

export default function Home() {
    return (
        <>
            <Hero />
        </>
    );
}

Home.layout = (page) => <MainLayout children={page} />;
