import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const RadiosAtAGlance = () => {
  const markdownFilePath = 'Networking/Mobile/Basics/Fundamentals/RadiosAtAGlance';

  return (
    <>
      <PageLayout>
        <PageTitle title="Radios at a Glance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RadiosAtAGlance;