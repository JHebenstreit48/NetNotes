import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
