import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const EventListAndCustomPDU = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Basics/Modes/EventListAndCustomPDU';

  return (
    <>
      <PageLayout>
        <PageTitle title="Event List & Custom PDU" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventListAndCustomPDU;
