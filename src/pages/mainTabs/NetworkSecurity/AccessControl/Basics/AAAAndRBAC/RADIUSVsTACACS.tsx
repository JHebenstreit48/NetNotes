import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
