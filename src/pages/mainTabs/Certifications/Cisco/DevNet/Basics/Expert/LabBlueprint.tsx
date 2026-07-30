import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LabBlueprint = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Basics/Expert/LabBlueprint';

  return (
    <>
      <PageLayout>
        <PageTitle title="Lab Blueprint" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LabBlueprint;
