import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NamingAndLabeling = () => {
  const markdownFilePath = 'Networking/Foundations/Advanced/DiagramsAndDocs/NamingAndLabeling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Naming & Labeling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NamingAndLabeling;
