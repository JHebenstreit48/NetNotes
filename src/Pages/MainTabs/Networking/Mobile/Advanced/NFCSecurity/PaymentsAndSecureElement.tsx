import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PaymentsAndSecureElement = () => {
  const markdownFilePath = 'Networking/Mobile/Advanced/NFCSecurity/PaymentsAndSecureElement';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Payments & Secure Element" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PaymentsAndSecureElement;
