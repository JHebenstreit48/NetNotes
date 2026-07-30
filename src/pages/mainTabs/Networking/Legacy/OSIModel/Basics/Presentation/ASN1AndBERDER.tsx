import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
