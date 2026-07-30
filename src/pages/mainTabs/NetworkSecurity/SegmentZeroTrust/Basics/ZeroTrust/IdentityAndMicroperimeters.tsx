import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IdentityAndMicroperimeters = () => {
  const markdownFilePath = 'NetworkSecurity/SegmentZeroTrust/Basics/ZeroTrust/IdentityAndMicroperimeters';

  return (
    <>
      <PageLayout>
        <PageTitle title="Identity & Microperimeters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IdentityAndMicroperimeters;
