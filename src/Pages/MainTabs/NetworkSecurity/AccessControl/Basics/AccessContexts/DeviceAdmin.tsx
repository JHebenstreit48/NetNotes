import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DeviceAdmin = () => {
  const markdownFilePath = 'NetworkSecurity/AccessControl/Basics/AccessContexts/DeviceAdmin';

  return (
    <>
      <PageLayout>
        <PageTitle title="Device Admin (TACACS+)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeviceAdmin;
