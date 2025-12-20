import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WhatIsNetwork = () => {
  const markdownFilePath = 'Certifications/CompTIA/CompTIANetwork/Overview/WhatIsNetwork';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="What is Network+?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatIsNetwork;
