import { Head } from "@inertiajs/react";
import Home from "./Home/Home";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />

            <Home />
        </>
    );
}
