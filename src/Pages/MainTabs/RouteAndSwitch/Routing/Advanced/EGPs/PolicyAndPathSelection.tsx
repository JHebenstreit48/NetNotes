import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PolicyAndPathSelection = () => {
  const markdownFilePath = 'RouteAndSwitch/Routing/Advanced/EGPs/PolicyAndPathSelection';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Policy & Path Selection" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PolicyAndPathSelection;
