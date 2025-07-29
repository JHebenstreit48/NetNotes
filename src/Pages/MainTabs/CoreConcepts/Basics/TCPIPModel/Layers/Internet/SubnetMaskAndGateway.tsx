import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SubnetMaskGateway = () => {
  const markdownFilePath = '/InternetLayer/SubnetMaskandDefaultGateway';

  return (
    <>
      <PageLayout>
        <Header text="Subnet Mask/Default Gateway)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SubnetMaskGateway;
