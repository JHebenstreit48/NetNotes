import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StandardsAndOrganizations = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/Fundamentals/StandardsAndOrganizations';

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