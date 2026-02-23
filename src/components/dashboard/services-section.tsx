interface Service {
  id: number;
  name: string;
  patients: number;
  satisfaction: number;
  waitTime: number;
}

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const getSatisfactionColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getWaitTimeColor = (minutes: number) => {
    if (minutes <= 15) return 'text-green-600 bg-green-100';
    if (minutes <= 30) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getWaitTimeStatus = (minutes: number) => {
    if (minutes <= 15) return 'ดี';
    if (minutes <= 30) return 'ปานกลาง';
    return 'ช้า';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">บริการสุขภาพ</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
          ดูทั้งหมด →
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Services List */}
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{service.name}</h3>
                  <p className="text-sm text-gray-500">
                    ผู้ใช้บริการ {service.patients.toLocaleString('th-TH')} คน
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSatisfactionColor(service.satisfaction)}`}>
                    พึงพอใจ {service.satisfaction}%
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {/* Satisfaction Progress */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">ความพึงพอใจ</span>
                    <span className="text-sm font-medium text-gray-900">{service.satisfaction}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${service.satisfaction}%` }}
                    ></div>
                  </div>
                </div>

                {/* Wait Time */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">ระยะเวลารอ</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900">{service.waitTime} นาที</span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getWaitTimeColor(service.waitTime)}`}>
                      {getWaitTimeStatus(service.waitTime)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Performance Chart */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">ภาพรวมประสิทธิภาพบริการ</h3>
          
          <div className="space-y-4">
            {/* Average Satisfaction */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">ความพึงพอใจเฉลี่ย</span>
                <span className="text-lg font-semibold text-green-600">
                  {(services.reduce((sum, s) => sum + s.satisfaction, 0) / services.length).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-green-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${services.reduce((sum, s) => sum + s.satisfaction, 0) / services.length}%` }}
                ></div>
              </div>
            </div>

            {/* Average Wait Time */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">ระยะเวลารอเฉลี่ย</span>
                <span className="text-lg font-semibold text-blue-600">
                  {(services.reduce((sum, s) => sum + s.waitTime, 0) / services.length).toFixed(0)} นาที
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min((services.reduce((sum, s) => sum + s.waitTime, 0) / services.length) * 2, 100)}%` }}
                ></div>
              </div>
            </div>

            {/* Total Patients */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ผู้ใช้บริการทั้งหมด</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {services.reduce((sum, s) => sum + s.patients, 0).toLocaleString('th-TH')} คน
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-3">การกระจายบริการ</h4>
              <div className="space-y-2">
                {services.map((service) => {
                  const totalPatients = services.reduce((sum, s) => sum + s.patients, 0);
                  const percentage = (service.patients / totalPatients) * 100;
                  
                  return (
                    <div key={service.id} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 truncate max-w-[150px]">{service.name}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-indigo-500 h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500 w-10 text-right">{percentage.toFixed(0)}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
