import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
