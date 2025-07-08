import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const EncapDeencap = () => {
  const markdownFilePath = '/PhysicalLayer/EncapsulationDeencapsulation';

  return (
    <>
      <PageLayout>
        <Header text="Encapsulation/De-encapsulation" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default EncapDeencap;
