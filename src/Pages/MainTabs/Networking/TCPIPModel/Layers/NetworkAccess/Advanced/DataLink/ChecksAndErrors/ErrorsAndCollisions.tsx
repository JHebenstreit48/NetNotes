import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
