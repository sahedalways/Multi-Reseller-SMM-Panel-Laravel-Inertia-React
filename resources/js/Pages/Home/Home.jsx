import Benefits from "@/Components/Benefits";
import Hero from "@/Components/Hero";
import Stats from "@/Components/Stats";
import MainLayout from "@/Layouts/MainLayout";

export default function Home() {
    return (
        <>
            <Hero />

            <Stats />

            <Benefits />
        </>
    );
}

Home.layout = (page) => <MainLayout children={page} />;
