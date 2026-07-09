import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TLSKeysAndDecryption = () => {
  const markdownFilePath = 'Tools/Wireshark/Advanced/Analysis/TLSKeysAndDecryption';

  return (
    <>
      <PageLayout>
        <PageTitle title="TLS Keys & Decryption" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TLSKeysAndDecryption;
