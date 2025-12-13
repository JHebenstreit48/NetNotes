import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LoadBalancingAndDesign = () => {
  const markdownFilePath = 'RouteAndSwitch/Switching/Advanced/EtherChannel/LoadBalancingAndDesign';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Load Balancing & Design" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LoadBalancingAndDesign;