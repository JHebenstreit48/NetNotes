import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DeviceConfigTabs = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Basics/WorkspaceAndViews/DeviceConfigTabs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Device Config Tabs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeviceConfigTabs;
