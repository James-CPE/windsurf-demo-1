interface Hospital {
  id: number;
  name: string;
  type: string;
  beds: number;
  occupancyRate: number;
  patients: number;
  doctors: number;
  nurses: number;
}

interface HospitalsSectionProps {
  hospitals: Hospital[];
}

export function HospitalsSection({ hospitals }: HospitalsSectionProps) {
  const getOccupancyColor = (rate: number) => {
    if (rate >= 85) return 'text-red-600 bg-red-100';
    if (rate >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-green-600 bg-green-100';
  };

  const getOccupancyStatus = (rate: number) => {
    if (rate >= 85) return 'สูง';
    if (rate >= 70) return 'ปานกลาง';
    return 'ต่ำ';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">สถานะโรงพยาบาล</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
          ดูทั้งหมด →
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">โรงพยาบาล</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">ประเภท</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-gray-700">เตียง</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-gray-700">ผู้ป่วย</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-gray-700">อัตราการใช้เตียง</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-gray-700">แพทย์</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-gray-700">พยาบาล</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((hospital) => (
              <tr key={hospital.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4">
                  <div>
                    <div className="font-medium text-gray-900">{hospital.name}</div>
                    <div className="text-sm text-gray-500">ID: {hospital.id}</div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {hospital.type}
                  </span>
                </td>
                <td className="py-4 px-4 text-center text-gray-900">
                  {hospital.beds.toLocaleString('th-TH')}
                </td>
                <td className="py-4 px-4 text-center text-gray-900">
                  {hospital.patients.toLocaleString('th-TH')}
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="flex flex-col items-center space-y-1">
                    <div className="text-lg font-semibold text-gray-900">
                      {hospital.occupancyRate}%
                    </div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getOccupancyColor(hospital.occupancyRate)}`}>
                      {getOccupancyStatus(hospital.occupancyRate)}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-gray-900">
                  {hospital.doctors.toLocaleString('th-TH')}
                </td>
                <td className="py-4 px-4 text-center text-gray-900">
                  {hospital.nurses.toLocaleString('th-TH')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">เตียงว่างทั้งหมด</p>
              <p className="text-xl font-semibold text-gray-900">
                {hospitals.reduce((sum, h) => sum + (h.beds - h.patients), 0).toLocaleString('th-TH')}
              </p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">อัตราการใช้เตียงเฉลี่ย</p>
              <p className="text-xl font-semibold text-gray-900">
                {(hospitals.reduce((sum, h) => sum + h.occupancyRate, 0) / hospitals.length).toFixed(1)}%
              </p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">โรงพยาบาลที่ต้องการความสนใจ</p>
              <p className="text-xl font-semibold text-red-600">
                {hospitals.filter(h => h.occupancyRate >= 85).length}
              </p>
            </div>
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
