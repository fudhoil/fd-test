import OrderChart from "@/components/charts/order_chart";
import TotalDisplay from "@/components/dashboards/total_display";
import DashboardLayout from "@/layouts/dashboard_layout";
import MainLayout from "@/layouts/main_layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout className="inter" />
  )
}
