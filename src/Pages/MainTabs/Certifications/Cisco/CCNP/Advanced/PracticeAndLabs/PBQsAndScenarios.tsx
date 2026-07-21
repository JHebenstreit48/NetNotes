import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const PBQsAndScenarios = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Advanced/PracticeAndLabs/PBQsAndScenarios';

  return (
    <>
      <PageLayout>
        <PageTitle title="PBQs & Scenarios" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PBQsAndScenarios;
