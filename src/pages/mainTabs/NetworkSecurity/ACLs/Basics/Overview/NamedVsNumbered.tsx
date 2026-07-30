import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
