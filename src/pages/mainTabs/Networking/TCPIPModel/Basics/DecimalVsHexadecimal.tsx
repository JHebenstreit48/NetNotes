import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DecimalVsHexadecimal = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Basics/DecimalVsHexadecimal';

  return (
    <>
      <PageLayout>
        <PageTitle title="TCP/IP Model - Basics - Decimal vs Hexadecimal" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DecimalVsHexadecimal;