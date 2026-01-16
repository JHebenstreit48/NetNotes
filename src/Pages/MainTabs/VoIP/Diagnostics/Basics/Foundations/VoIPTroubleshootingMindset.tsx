import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VoIPTroubleshootingMindset = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Basics/Foundations/VoIPTroubleshootingMindset';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="VoIP Troubleshooting Mindset" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VoIPTroubleshootingMindset;
