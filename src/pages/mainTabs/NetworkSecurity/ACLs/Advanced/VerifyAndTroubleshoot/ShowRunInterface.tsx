import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ShowRunInterface = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Advanced/VerifyAndTroubleshoot/ShowRunInterface';

  return (
    <>
      <PageLayout>
        <PageTitle title="show run / interface" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ShowRunInterface;
