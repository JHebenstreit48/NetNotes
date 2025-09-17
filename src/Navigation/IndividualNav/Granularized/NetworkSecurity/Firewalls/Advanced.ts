import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "NGFW Features",
      subpages: [
        {
          name: "App-ID / IPS / URL",
          path: "/firewalls/advanced/ngfw/appid-ips-url"
        },
        {
          name: "SSL/TLS Decryption",
          path: "/firewalls/advanced/ngfw/ssl-tls-decryption"
        }
      ]
    },
    {
      name: "Policy & HA",
      subpages: [
        {
          name: "Rule Design & Order",
          path: "/firewalls/advanced/policy/rule-design"
        },
        {
          name: "Failover & Clustering",
          path: "/firewalls/advanced/policy/failover-clustering"
        }
      ]
    }
  ]
};

export default Advanced;