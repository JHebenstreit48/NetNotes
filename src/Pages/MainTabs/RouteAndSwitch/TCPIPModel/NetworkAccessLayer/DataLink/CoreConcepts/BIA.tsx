import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BIA = () => {
  const markdownFilePath = '/DataLinkLayer/BIA';

  return (
    <>
      <PageLayout>
        <Header text="Burned-In Address" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default BIA;
