import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const StandardsAndOrganizations = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/Fundamentals/ProtocolsAndStandards/StandardsAndOrganizations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals - Standards and Organizations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StandardsAndOrganizations;