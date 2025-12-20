import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ShowRunInterface = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Advanced/VerifyAndTroubleshoot/ShowRunInterface';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="show run / interface" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ShowRunInterface;
