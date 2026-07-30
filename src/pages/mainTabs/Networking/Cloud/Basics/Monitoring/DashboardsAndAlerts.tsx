import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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