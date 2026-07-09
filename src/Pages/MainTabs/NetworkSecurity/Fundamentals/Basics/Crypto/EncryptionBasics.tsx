import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
