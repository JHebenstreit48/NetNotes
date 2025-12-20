import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TroubleshootingScenarios = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/PBQsAndLabs/TroubleshootingScenarios';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Troubleshooting Scenarios" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TroubleshootingScenarios;
