import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
