import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
