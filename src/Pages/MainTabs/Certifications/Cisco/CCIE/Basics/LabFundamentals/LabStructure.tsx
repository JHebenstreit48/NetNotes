import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
