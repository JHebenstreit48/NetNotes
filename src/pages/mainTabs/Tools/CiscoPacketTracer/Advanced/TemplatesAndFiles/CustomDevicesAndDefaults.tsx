import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
