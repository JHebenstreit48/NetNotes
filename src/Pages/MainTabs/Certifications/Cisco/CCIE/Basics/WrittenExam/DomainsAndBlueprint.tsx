import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DomainsAndBlueprint = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/WrittenExam/DomainsAndBlueprint';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Domains & Blueprint" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DomainsAndBlueprint;
