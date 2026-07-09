import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ASN1AndBERDER = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/Presentation/ASN1AndBERDER';

  return (
    <>
      <PageLayout>
        <PageTitle title="ASN.1 & BER/DER" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ASN1AndBERDER;
