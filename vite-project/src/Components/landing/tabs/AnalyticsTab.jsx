
import { MessageSquare, BarChart3, Users, BookOpen } from "lucide-react";
import StatCard from "../cards/StatCard";
import LineChart from "../charts/LineChart";
import DonutChart from "../charts/DonutChart";
import BarChart from "../charts/BarChart";
import HorizontalChart from "../charts/HorizontalChart";
import TimelineChart from "../charts/TimelineChart";

const AnalyticsTab = ({ data }) => {
  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total Citations"
          value={data.citations.total}
          icon={<MessageSquare className="w-6 h-6" />}
          trend="up"
          percentage="12%"
        />
        <StatCard
          title="H-Index"
          value={data.engagement.hIndex}
          icon={<BarChart3 className="w-6 h-6" />}
          trend="up"
          percentage="5%"
        />
        <StatCard
          title="Active Collaborations"
          value={data.collaborations.active}
          icon={<Users className="w-6 h-6" />}
          trend="steady"
        />
        <StatCard
          title="Publications"
          value={data.publications.total}
          icon={<BookOpen className="w-6 h-6" />}
          trend="up"
          percentage="8%"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Citation Trend (Last 12 Months)</h3>
          <LineChart data={data.citations.monthlyTrend} />
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>Jan</span>
            <span>Dec</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Publications by Type</h3>
          <DonutChart data={data.publications.byType} />
        </div>
      </div>

      {/* Detailed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Top Cited Papers</h3>
          <div className="space-y-4">
            {data.citations.topPapers.map((paper, index) => (
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

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Collaborations by Country</h3>
          <BarChart data={data.collaborations.byCountry} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Citations by Research Field</h3>
          <HorizontalChart data={data.citations.byField} />
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Publication Timeline</h3>
        <TimelineChart data={data.publications.byYear} />
      </div>
    </div>
  );
};

export default AnalyticsTab;