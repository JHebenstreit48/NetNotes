import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Placement = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Advanced/ExtendedACLs/Placement';

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
