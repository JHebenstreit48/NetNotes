import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
