import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TroubleshootingScenarios = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/PBQsAndLabs/TroubleshootingScenarios';

  return (
    <>
      <PageLayout>
        <PageTitle title="Troubleshooting Scenarios" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TroubleshootingScenarios;
