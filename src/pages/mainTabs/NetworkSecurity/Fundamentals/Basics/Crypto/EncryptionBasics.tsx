import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EncryptionBasics = () => {
  const markdownFilePath = 'NetworkSecurity/Fundamentals/Basics/Crypto/EncryptionBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Encryption Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EncryptionBasics;
