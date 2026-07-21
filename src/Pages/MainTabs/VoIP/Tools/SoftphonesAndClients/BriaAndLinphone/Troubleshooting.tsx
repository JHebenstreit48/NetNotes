import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
