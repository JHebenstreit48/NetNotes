import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Troubleshooting = () => {
  const markdownFilePath = 'VoIP/Tools/SoftphonesAndClients/BriaAndLinphone/Troubleshooting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Troubleshooting (sngrep/Wireshark)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Troubleshooting;
