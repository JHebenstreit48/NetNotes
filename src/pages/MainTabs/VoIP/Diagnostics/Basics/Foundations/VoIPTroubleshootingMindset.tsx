import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const VoIPTroubleshootingMindset = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Basics/Foundations/VoIPTroubleshootingMindset';

  return (
    <>
      <PageLayout>
        <PageTitle title="VoIP Troubleshooting Mindset" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VoIPTroubleshootingMindset;
