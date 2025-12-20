import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AppIDIPSURL = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Advanced/NGFWFeatures/AppIDIPSURL';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="App-ID / IPS / URL" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AppIDIPSURL;
