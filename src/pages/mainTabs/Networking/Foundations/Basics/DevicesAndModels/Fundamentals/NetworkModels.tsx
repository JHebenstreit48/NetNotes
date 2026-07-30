import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NetworkModels = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/Fundamentals/NetworkModels';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals - Networking Models" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkModels;