import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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