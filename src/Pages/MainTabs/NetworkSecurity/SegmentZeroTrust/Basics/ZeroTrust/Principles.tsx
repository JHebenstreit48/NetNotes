import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
