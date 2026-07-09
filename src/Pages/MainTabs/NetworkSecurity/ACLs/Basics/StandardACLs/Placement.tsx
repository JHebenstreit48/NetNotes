import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Placement = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Basics/StandardACLs/Placement';

  return (
    <>
      <PageLayout>
        <PageTitle title="Placement" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Placement;
