import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
