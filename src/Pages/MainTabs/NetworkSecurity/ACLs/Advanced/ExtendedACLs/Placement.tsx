import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Placement = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Advanced/ExtendedACLs/Placement';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Placement" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Placement;
