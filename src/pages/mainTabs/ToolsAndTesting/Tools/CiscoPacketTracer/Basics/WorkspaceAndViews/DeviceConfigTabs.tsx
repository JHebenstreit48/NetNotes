import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
