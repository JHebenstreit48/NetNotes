import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NamingAndLabeling = () => {
  const markdownFilePath = 'RouteAndSwitch/Foundations/Advanced/DiagramsAndDocs/NamingAndLabeling';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Naming & Labeling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NamingAndLabeling;
