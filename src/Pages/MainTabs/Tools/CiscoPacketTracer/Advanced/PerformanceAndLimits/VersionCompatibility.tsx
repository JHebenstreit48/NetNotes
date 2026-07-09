import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VersionCompatibility = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Advanced/PerformanceAndLimits/VersionCompatibility';

  return (
    <>
      <PageLayout>
        <PageTitle title="Version Compatibility" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VersionCompatibility;
