import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const NamedVsNumbered = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Basics/Overview/NamedVsNumbered';

  return (
    <>
      <PageLayout>
        <PageTitle title="Named vs Numbered" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NamedVsNumbered;
