import Hero from "@/Components/Hero";
import Stats from "@/Components/Stats";
import MainLayout from "@/Layouts/MainLayout";

export default function Home() {
    return (
        <>
            <Hero />

            <Stats />
        </>
    );
}

Home.layout = (page) => <MainLayout children={page} />;
