import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const RADIUSVsTACACS = () => {
  const markdownFilePath = 'NetworkSecurity/AccessControl/Basics/AAAAndRBAC/RADIUSVsTACACS';

  return (
    <>
      <PageLayout>
        <PageTitle title="RADIUS vs TACACS+" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RADIUSVsTACACS;
