import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PortSecurity = () => {
  const markdownFilePath = 'NetworkSecurity/NetworkControls/Basics/Layer2Protections/PortSecurity';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Port Security" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PortSecurity;
