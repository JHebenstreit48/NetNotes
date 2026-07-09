import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
