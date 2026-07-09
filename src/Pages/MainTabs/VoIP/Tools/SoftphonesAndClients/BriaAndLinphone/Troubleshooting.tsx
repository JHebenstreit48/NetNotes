import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
