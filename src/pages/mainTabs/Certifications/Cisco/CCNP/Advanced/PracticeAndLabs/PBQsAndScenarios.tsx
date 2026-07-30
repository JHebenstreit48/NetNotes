import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
