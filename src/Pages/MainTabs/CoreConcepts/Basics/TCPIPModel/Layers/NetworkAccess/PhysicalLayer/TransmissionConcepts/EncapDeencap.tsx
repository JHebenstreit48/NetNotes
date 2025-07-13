import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EncapDeencap = () => {
  const markdownFilePath = '/CoreConcepts/Basics/TCPIPModel/NetworkAccess/Layer1-Physical/TransmissionConcepts/EncapDeencap';

  return (
    <>
      <PageLayout>
        <Header text="Encapsulation/De-Encapsulation" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default EncapDeencap;
