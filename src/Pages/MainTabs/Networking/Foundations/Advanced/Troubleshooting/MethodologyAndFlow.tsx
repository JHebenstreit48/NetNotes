import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MethodologyAndFlow = () => {
  const markdownFilePath = 'Networking/Foundations/Advanced/Troubleshooting/MethodologyAndFlow';

  return (
    <>
      <PageLayout>
        <PageTitle title="Methodology & Flow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MethodologyAndFlow;
