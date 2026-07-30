import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
