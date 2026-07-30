import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ErrorsAndCollisions = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink/ChecksAndErrors/ErrorsAndCollisions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Errors & Collisions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorsAndCollisions;
