import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MethodologyAndFlow = () => {
  const markdownFilePath = 'RouteAndSwitch/Foundations/Advanced/Troubleshooting/MethodologyAndFlow';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Methodology & Flow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MethodologyAndFlow;
