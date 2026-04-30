// Add this to your Landing component's state
const [analyticsData, setAnalyticsData] = useState({
  citations: {
    total: 842,
    monthlyTrend: [45, 60, 52, 70, 85, 90, 110, 95, 80, 75, 85, 100],
    topPapers: [
      { title: "Genomic DL", citations: 142 },
      { title: "Quantum Drug", citations: 95 },
      { title: "AI in Medicine", citations: 87 }
    ],
    byField: [
      { field: "AI", citations: 320 },
      { field: "Bioinformatics", citations: 280 },
      { field: "Quantum", citations: 242 }
    ]
  },
  collaborations: {
    active: 12,
    completed: 23,
    byCountry: [
      { country: "USA", count: 8 },
      { country: "UK", count: 5 },
      { country: "Germany", count: 4 },
      { country: "Japan", count: 3 },
      { country: "Others", count: 3 }
    ],
    byInstitution: [
      { institution: "MIT", projects: 4 },
      { institution: "Stanford", projects: 3 },
      { institution: "Oxford", projects: 2 }
    ]
  },
  publications: {
    total: 34,
    byYear: [
      { year: 2020, count: 5 },
      { year: 2021, count: 8 },
      { year: 2022, count: 10 },
      { year: 2023, count: 11 }
    ],
    byType: [
      { type: "Journal", count: 22 },
      { type: "Conference", count: 9 },
      { type: "Book Chapter", count: 3 }
    ]
  },
  engagement: {
    profileViews: 1245,
    researchGateScore: 86,
    hIndex: 18,
    i10Index: 32
  }
});

// Add this to your tab navigation
<nav className="flex space-x-8">
  {['Research', 'Collaborators', 'Groups', 'Events', 'Analytics'].map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab.toLowerCase())}
      className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.toLowerCase() ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
    >
      {tab}
    </button>
  ))}
</nav>

// Add this as the Analytics tab content
{activeTab === 'analytics' && (
  <div className="space-y-6">
    {/* Research Impact Summary */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard 
        title="Total Citations" 
        value={analyticsData.citations.total} 
        icon={<CitationIcon />}
        trend="up"
        percentage="12%"
      />
      <StatCard 
        title="H-Index" 
        value={analyticsData.engagement.hIndex} 
        icon={<HIndexIcon />}
        trend="up"
        percentage="5%"
      />
      <StatCard 
        title="Active Collaborations" 
        value={analyticsData.collaborations.active} 
        icon={<CollaborationIcon />}
        trend="steady"
      />
      <StatCard 
        title="Publications" 
        value={analyticsData.publications.total} 
        icon={<PublicationIcon />}
        trend="up"
        percentage="8%"
      />
    </div>

    {/* Charts Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Citation Trend Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Citation Trend (Last 12 Months)</h3>
        <LineChart data={analyticsData.citations.monthlyTrend} />
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <span>Jan</span>
          <span>Dec</span>
        </div>
      </div>

      {/* Publications by Type */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Publications by Type</h3>
        <DonutChart data={analyticsData.publications.byType} />
      </div>
    </div>

    {/* Detailed Analytics */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Top Cited Papers */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Top Cited Papers</h3>
        <div className="space-y-4">
          {analyticsData.citations.topPapers.map((paper, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full mr-3">
                  {index + 1}
                </span>
                <span className="font-medium">{paper.title}</span>
              </div>
              <span className="text-gray-600">{paper.citations} citations</span>
            </div>
          ))}
        </div>
      </div>

      {/* Collaborations by Country */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Collaborations by Country</h3>
        <BarChart data={analyticsData.collaborations.byCountry} />
      </div>

      {/* Citations by Field */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Citations by Research Field</h3>
        <HorizontalBarChart data={analyticsData.citations.byField} />
      </div>
    </div>

    {/* Publication Timeline */}
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Publication Timeline</h3>
      <TimelineChart data={analyticsData.publications.byYear} />
    </div>
  </div>
)}

// Add these new components at the bottom of your file
const StatCard = ({ title, value, icon, trend, percentage }) => {
  const trendColor = {
    up: 'text-green-600',
    down: 'text-red-600',
    steady: 'text-yellow-600'
  };

  const trendIcon = {
    up: <TrendingUpIcon />,
    down: <TrendingDownIcon />,
    steady: <TrendingFlatIcon />
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
          {icon}
        </div>
      </div>
      {trend && (
        <div className={`flex items-center mt-3 text-sm ${trendColor[trend]}`}>
          {trendIcon[trend]}
          {percentage && <span className="ml-1">{percentage}</span>}
          <span className="ml-1">vs last year</span>
        </div>
      )}
    </div>
  );
};

// Chart components (simplified for example)
const LineChart = ({ data }) => {
  const maxValue = Math.max(...data);
  
  return (
    <div className="h-48 flex items-end space-x-1">
      {data.map((value, index) => (
        <div 
          key={index}
          className="flex-1 bg-blue-500 hover:bg-blue-600 transition-colors relative"
          style={{ height: `${(value / maxValue) * 100}%` }}
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs">
            {value}
          </div>
        </div>
      ))}
    </div>
  );
};

const DonutChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.count, 0);
  const colors = ['#3B82F6', '#10B981', '#F59E0B'];
  
  return (
    <div className="flex items-center justify-center">
      <div className="w-48 h-48 relative">
        {/* This is a simplified donut chart - in a real app you'd use a library like Chart.js */}
        {data.map((item, index) => {
          const percentage = (item.count / total) * 100;
          const offset = data.slice(0, index).reduce((sum, i) => sum + (i.count / total) * 100, 0);
          
          return (
            <div 
              key={index}
              className="absolute inset-0 rounded-full border-8"
              style={{
                borderColor: colors[index],
                clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
                transform: `rotate(${offset * 3.6}deg)`,
                borderWidth: '16px'
              }}
            />
          );
        })}
      </div>
      <div className="ml-6 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: colors[index] }} />
            <span className="text-sm">{item.type}: {(item.count / total * 100).toFixed(0)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add similar components for BarChart, HorizontalBarChart, TimelineChart
// Add icon components (you can use SVG icons or a library like react-icons)

// Example icon components
const CitationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

const HIndexIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);