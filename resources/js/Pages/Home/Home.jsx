import MainLayout from "@/Layouts/MainLayout";

export default function Home() {
    return (
        <div className="min-h-screen p-10">
            <h1 className="text-4xl font-bold mb-4">
                Next Generation SMM <br />
                <span className="text-primary-green">Panel & Provider</span>
            </h1>

            <p className="text-gray-400 mb-6">
                Lorem Ipsum is simply dummy text of the printing...
            </p>

            <div className="flex gap-4">
                <button className="btn-primary">Sign Up Now</button>
                <button className="btn-outline">See All Services</button>
            </div>
        </div>
    );
}

Home.layout = (page) => <MainLayout children={page} />;
