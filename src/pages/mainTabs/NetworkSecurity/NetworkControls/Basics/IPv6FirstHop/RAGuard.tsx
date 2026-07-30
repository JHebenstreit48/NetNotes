import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
