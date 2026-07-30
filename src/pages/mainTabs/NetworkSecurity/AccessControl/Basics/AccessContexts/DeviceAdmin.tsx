import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
