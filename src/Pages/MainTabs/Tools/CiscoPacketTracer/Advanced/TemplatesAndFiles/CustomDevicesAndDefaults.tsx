import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
