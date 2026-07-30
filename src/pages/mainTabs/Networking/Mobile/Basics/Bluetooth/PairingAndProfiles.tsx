import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
