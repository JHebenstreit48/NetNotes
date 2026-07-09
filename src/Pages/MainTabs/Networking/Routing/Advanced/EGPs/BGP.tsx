import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BGP = () => {
  const markdownFilePath = 'Networking/Routing/Advanced/EGPs/BGP';

  return (
    <>
      <PageLayout>
        <PageTitle title="BGP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BGP;
