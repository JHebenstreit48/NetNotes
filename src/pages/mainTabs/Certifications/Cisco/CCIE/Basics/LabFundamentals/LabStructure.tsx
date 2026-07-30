import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const LabStructure = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/LabFundamentals/LabStructure';

  return (
    <>
      <PageLayout>
        <PageTitle title="Lab Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LabStructure;
