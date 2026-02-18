import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DashboardsAndAlerts = () => {
  const markdownFilePath =
    'Networking/Cloud/Basics/Monitoring/DashboardsAndAlerts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cloud - Dashboards & Alerts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DashboardsAndAlerts;