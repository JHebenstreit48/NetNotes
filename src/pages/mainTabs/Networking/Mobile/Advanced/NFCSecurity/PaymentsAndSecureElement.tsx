import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
