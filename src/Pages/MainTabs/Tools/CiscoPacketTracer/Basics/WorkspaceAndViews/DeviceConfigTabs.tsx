import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
