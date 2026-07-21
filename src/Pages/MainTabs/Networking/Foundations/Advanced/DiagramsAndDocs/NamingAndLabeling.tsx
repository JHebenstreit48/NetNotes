import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
