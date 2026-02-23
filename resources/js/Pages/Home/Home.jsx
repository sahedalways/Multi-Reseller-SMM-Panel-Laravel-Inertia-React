import MainLayout from "@/Layouts/MainLayout";

export default function Home() {
    return <h1>Home Page</h1>;
}

Home.layout = (page) => <MainLayout children={page} />;
