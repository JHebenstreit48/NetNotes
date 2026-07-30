import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
