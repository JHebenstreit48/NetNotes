import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EventListAndCustomPDU = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Basics/Modes/EventListAndCustomPDU';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Event List & Custom PDU" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventListAndCustomPDU;
