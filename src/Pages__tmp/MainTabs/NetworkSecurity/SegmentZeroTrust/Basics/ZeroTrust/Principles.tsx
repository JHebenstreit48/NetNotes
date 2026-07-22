import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Principles = () => {
  const markdownFilePath = 'NetworkSecurity/SegmentZeroTrust/Basics/ZeroTrust/Principles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Principles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Principles;
