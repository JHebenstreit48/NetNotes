import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const RAGuard = () => {
  const markdownFilePath = 'NetworkSecurity/NetworkControls/Basics/IPv6FirstHop/RAGuard';

  return (
    <>
      <PageLayout>
        <PageTitle title="RA Guard" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RAGuard;
