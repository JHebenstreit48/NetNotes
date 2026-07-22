import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const PairingAndProfiles = () => {
  const markdownFilePath = 'Networking/Mobile/Basics/Bluetooth/PairingAndProfiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pairing & Profiles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PairingAndProfiles;
