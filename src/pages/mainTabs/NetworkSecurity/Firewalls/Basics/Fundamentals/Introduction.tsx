import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/PageComponents/PageTitle'
import Notes from '@/components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Basics/Fundamentals/Introduction';

  return (
    <>
      <PageLayout>
        <PageTile title="Firewalls - Fundamentals - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;