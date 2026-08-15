import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
