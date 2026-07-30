import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/pageComponents/pageTitle'
import Notes from '@/components/pageComponents/notes/notes';

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