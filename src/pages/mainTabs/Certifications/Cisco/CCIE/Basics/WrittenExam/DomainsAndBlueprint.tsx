import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const DomainsAndBlueprint = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/WrittenExam/DomainsAndBlueprint';

  return (
    <>
      <PageLayout>
        <PageTitle title="Domains & Blueprint" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DomainsAndBlueprint;
