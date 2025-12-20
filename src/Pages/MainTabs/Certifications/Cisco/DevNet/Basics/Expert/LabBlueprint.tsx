import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LabBlueprint = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Basics/Expert/LabBlueprint';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Lab Blueprint" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LabBlueprint;
