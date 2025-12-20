import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IDSVsIPS = () => {
  const markdownFilePath = 'NetworkSecurity/IDSAndIPS/Basics/DetectionConcepts/IDSVsIPS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IDS vs IPS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IDSVsIPS;
