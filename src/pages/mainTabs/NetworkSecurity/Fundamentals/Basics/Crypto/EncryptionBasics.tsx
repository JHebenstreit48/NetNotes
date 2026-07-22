import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
