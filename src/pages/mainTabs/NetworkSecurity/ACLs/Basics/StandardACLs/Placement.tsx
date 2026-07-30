import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
