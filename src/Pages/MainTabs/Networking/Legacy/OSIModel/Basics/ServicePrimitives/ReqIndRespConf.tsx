import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReqIndRespConf = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/ServicePrimitives/ReqIndRespConf';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Req/Ind/Resp/Conf" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReqIndRespConf;
