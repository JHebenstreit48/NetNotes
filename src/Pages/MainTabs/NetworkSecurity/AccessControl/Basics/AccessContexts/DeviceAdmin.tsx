import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DeviceAdmin = () => {
  const markdownFilePath = 'NetworkSecurity/AccessControl/Basics/AccessContexts/DeviceAdmin';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Device Admin (TACACS+)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeviceAdmin;
