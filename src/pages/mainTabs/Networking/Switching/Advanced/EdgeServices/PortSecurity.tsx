import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const PortSecurity = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/EdgeServices/PortSecurity';

  return (
    <>
      <PageLayout>
        <PageTitle title="Port Security" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PortSecurity;