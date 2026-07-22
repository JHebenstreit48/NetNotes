import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
