import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
