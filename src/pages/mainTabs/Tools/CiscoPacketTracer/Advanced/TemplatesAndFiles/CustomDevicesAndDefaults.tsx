import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const CustomDevicesAndDefaults = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Advanced/TemplatesAndFiles/CustomDevicesAndDefaults';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Devices & Defaults" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomDevicesAndDefaults;
