import NavBar from "@/components/nav-bar";
import { DashbooardCards } from "./dashboard-cards";
import { CategoriesChart } from "./categories-chart";

export default function DashboardPage() {
    return (
        <>
            <NavBar active="dashboard" />

            <main className="flex justify-center items-center">
                <div className=" w-full p-6 rounded m-6">
                    
                    <DashbooardCards />

                    <CategoriesChart />
                </div>
            </main>
        </>
    )
}