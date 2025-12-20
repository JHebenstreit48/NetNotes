import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RADIUSVsTACACS = () => {
  const markdownFilePath = 'NetworkSecurity/AccessControl/Basics/AAAAndRBAC/RADIUSVsTACACS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="RADIUS vs TACACS+" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RADIUSVsTACACS;
