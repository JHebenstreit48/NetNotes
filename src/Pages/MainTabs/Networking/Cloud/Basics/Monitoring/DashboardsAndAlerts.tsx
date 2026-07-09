import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DashboardsAndAlerts = () => {
  const markdownFilePath =
    'Networking/Cloud/Basics/Monitoring/DashboardsAndAlerts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud - Dashboards & Alerts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DashboardsAndAlerts;