import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Concepts = () => {
  const markdownFilePath = 'NetworkSecurity/AccessControl/Basics/AAAAndRBAC/Concepts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Concepts;
