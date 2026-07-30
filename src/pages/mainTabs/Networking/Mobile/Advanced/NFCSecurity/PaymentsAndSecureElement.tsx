import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PaymentsAndSecureElement = () => {
  const markdownFilePath = 'Networking/Mobile/Advanced/NFCSecurity/PaymentsAndSecureElement';

  return (
    <>
      <PageLayout>
        <PageTitle title="Payments & Secure Element" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PaymentsAndSecureElement;
