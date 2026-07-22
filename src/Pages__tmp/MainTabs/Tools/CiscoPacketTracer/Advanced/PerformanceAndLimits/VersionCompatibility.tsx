import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
