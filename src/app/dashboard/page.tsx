import { Suspense } from 'react';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { HospitalsSection } from '@/components/dashboard/hospitals-section';
import { ServicesSection } from '@/components/dashboard/services-section';
import { LoadingStats } from '@/components/dashboard/loading-stats';

export const metadata = {
  title: 'แดชบอร์ด - ระบบบริการสุขภาพจังหวัดเชียงราย',
  description: 'ข้อมูลการพัฒนาระบบบริการสุขภาพจังหวัดเชียงราย',
};

async function getDashboardData() {
  // Simulate fetching health service data for Chiang Rai province
  const stats = {
    totalHospitals: 89,
    totalPatients: 1850000,
    totalDoctors: 2500,
    totalNurses: 8500,
    bedOccupancyRate: 78.5,
    averageWaitTime: 25,
  };

  const hospitals = [
    {
      id: 1,
      name: 'โรงพยาบาลเชียงรายประชานุเคราะห์',
      type: 'โรงพยาบาลศูนย์',
      beds: 800,
      occupancyRate: 85,
      patients: 650,
      doctors: 120,
      nurses: 350,
    },
    {
      id: 2,
      name: 'โรงพยาบาลแม่สาย',
      type: 'โรงพยาบาลทั่วไป',
      beds: 300,
      occupancyRate: 72,
      patients: 216,
      doctors: 45,
      nurses: 120,
    },
    {
      id: 3,
      name: 'โรงพยาบาลเทิง',
      type: 'โรงพยาบาลทั่วไป',
      beds: 250,
      occupancyRate: 68,
      patients: 170,
      doctors: 35,
      nurses: 95,
    },
  ];

  const services = [
    {
      id: 1,
      name: 'บริการตรวจโรคทั่วไป',
      patients: 45000,
      satisfaction: 92,
      waitTime: 15,
    },
    {
      id: 2,
      name: 'บริการฉุกเฉิน',
      patients: 12000,
      satisfaction: 88,
      waitTime: 8,
    },
    {
      id: 3,
      name: 'บริการแม่และเด็ก',
      patients: 28000,
      satisfaction: 95,
      waitTime: 20,
    },
    {
      id: 4,
      name: 'บริการโรคเรื้อนรัง',
      patients: 35000,
      satisfaction: 90,
      waitTime: 30,
    },
  ];

  return { stats, hospitals, services };
}

export default async function DashboardPage() {
  const { stats, hospitals, services } = await getDashboardData();

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Stats Overview */}
          <Suspense fallback={<LoadingStats />}>
            <StatsCards stats={stats} />
          </Suspense>

          {/* Hospitals Section */}
          <Suspense fallback={<div className="animate-pulse bg-white rounded-lg p-6 h-96"></div>}>
            <HospitalsSection hospitals={hospitals} />
          </Suspense>

          {/* Services Section */}
          <Suspense fallback={<div className="animate-pulse bg-white rounded-lg p-6 h-96"></div>}>
            <ServicesSection services={services} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
