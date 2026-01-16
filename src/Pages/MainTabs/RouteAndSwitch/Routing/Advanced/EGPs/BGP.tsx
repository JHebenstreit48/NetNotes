import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BGP = () => {
  const markdownFilePath = 'RouteAndSwitch/Routing/Advanced/EGPs/BGP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="BGP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BGP;
