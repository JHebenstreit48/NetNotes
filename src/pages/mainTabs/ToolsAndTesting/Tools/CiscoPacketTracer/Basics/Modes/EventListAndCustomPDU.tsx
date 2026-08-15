import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
