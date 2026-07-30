import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
