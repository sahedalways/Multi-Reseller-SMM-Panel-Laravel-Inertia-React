import { Head } from "@inertiajs/react";
import Home from "./Home/Home";
import MainLayout from "@/Layouts/MainLayout";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <MainLayout>
            <Head title="Welcome" />
            <Home />
        </MainLayout>
    );
}
