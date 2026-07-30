import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
