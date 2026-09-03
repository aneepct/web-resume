import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'IT Tech Lead / Senior Platform Engineer',
    company: 'LMNTO Performance Information Technology LLC',
    location: 'Dubai, UAE',
    period: 'Apr 2022 – Present',
    description: [
      'Own end-to-end platform infrastructure for an on-premise VMware vCenter data center, codifying VM provisioning, inter-VM network setup, and firewall configuration entirely in Terraform.',
      'Manage Cloudflare as code through Terraform, covering DNS records, DDoS protection, CAPTCHA and bot-management policies, and edge network security controls.',
      'Standardize post-provisioning VM configuration with Ansible, maintaining role-specific baselines so each host is built correctly for its purpose, whether application runtime or database node.',
      'Run all Kubernetes deployments through ArgoCD GitOps, replacing imperative deploy scripts with declarative, version-controlled, auditable release workflows.',
      'Operate CI/CD on Bitbucket Pipelines with self-hosted Bitbucket Runners, giving builds secure direct access to on-premise infrastructure.',
      'Deploy serverless and edge workloads to Vercel and AWS, integrating them into the same pipeline, DNS, and security perimeter as the on-premise estate.',
      'Build agentic AI on the platform: an Agentic RAG customer support service backed by a vector database knowledge base and multiple retrieval tools.',
      'Integrate an AI agent into Kubernetes capacity management, driving horizontal pod autoscaling and adjusting vertical pod resource requests and limits as demand shifts.',
      'Drive AI-assisted development across the team using GitHub Copilot, Claude, and Lovable to materially increase delivery throughput.',
      'Lead migration of monolithic systems to microservices and cloud-native architectures with minimal disruption, and manage distributed cross-functional teams across time zones using Scrum and Kanban.'
    ],
    technologies: ['Terraform', 'Ansible', 'Kubernetes', 'ArgoCD', 'Bitbucket Pipelines', 'Cloudflare', 'AWS', 'Vercel', 'Agentic AI', 'GitOps']
  },
  {
    title: 'IT Tech Lead / Senior Software Engineer',
    company: 'Bitex Worldwide',
    location: 'Dubai, UAE',
    period: 'Jun 2019 – Apr 2022',
    description: [
      'Introduced automated CI/CD with GitHub Actions deploying to DigitalOcean droplets, replacing manual release steps and shortening time-to-market for new features.',
      'Adopted Kubernetes for backend services in 2020 and led the full migration of all applications onto Kubernetes by 2021, standardizing orchestration, rollout, and autoscaling platform-wide.',
      'Ran Jenkins pipelines and AWS infrastructure alongside for build automation, hosting, and environment management.',
      'Integrated Cloudflare for DNS management and DDoS protection across public trading endpoints, hardening the platform against volumetric and application-layer attacks.',
      'Led a cross-functional team delivering a high-performance crypto and forex trading platform supporting high-frequency transaction volumes.',
      'Delivered crypto and payment gateway integrations, on-chain and off-chain settlement flows, and NFT minting on Ethereum and Polygon, meeting PCI and KYC/KYT compliance requirements.',
      'Embedded DevOps practices across the engineering team, shifting deployment ownership left and improving release cadence.'
    ],
    technologies: ['GitHub Actions', 'Kubernetes', 'Jenkins', 'AWS', 'Cloudflare', 'Crypto', 'Forex', 'NFT', 'PCI', 'KYC']
  },
  {
    title: 'Senior Software Engineer',
    company: 'Objects By Design',
    location: 'New York, USA (Remote from Gujarat, India)',
    period: 'Jul 2017 – Jun 2019',
    description: [
      'Built and deployed Django REST Framework backends with Angular and Vue.js frontends, and delivered cross-platform iOS and Android applications in Flutter.',
      'Established CI/CD pipelines on GitHub, automating build, test, and release for backend services and frontend applications.',
      'Ran Linux deployments on Apache with mod_wsgi, later migrating to Nginx with Gunicorn for Django services and Nginx as the serving target for frontend production builds.',
      'Owned mobile release operations end to end, managing signing, versioning, and publication to the Google Play Store and Apple App Store.',
      'Delivered a home security system with advanced sensor integration for user data tracking, and a Flutter application for an online teaching platform.',
      'Contributed enhancements to the Google Cloud Bigtable Python client library, optimizing data retrieval workflows.'
    ],
    technologies: ['Django', 'Angular', 'Vue.js', 'Flutter', 'GitHub', 'Nginx', 'Gunicorn', 'Google Cloud', 'Mobile Releases']
  },
  {
    title: 'Senior Software Engineer / Software Engineer',
    company: 'Wingmaxx Technologies',
    location: 'Surat, Gujarat, India',
    period: 'Jul 2015 – Jul 2017',
    description: [
      'Owned application deployment and server management across WHM/cPanel environments and bare Linux hosts, running releases end to end.',
      'Configured and tuned Apache2 and Nginx for frontend delivery, WSGI and Gunicorn for Django services, and FastCGI with Apache for Laravel PHP applications.',
      'Adopted AWS from 2016, deploying with Lambda and DynamoDB while administering IAM, EC2, security groups, and VPC network configuration alongside MySQL and DynamoDB across multiple application environments.',
      'Developed and maintained web applications and RESTful APIs using Laravel (PHP) and Django (Python).',
      'Hired and managed developer teams from Aug 2016, owning technical direction, code quality standards, and delivery timelines.'
    ],
    technologies: ['AWS', 'Lambda', 'DynamoDB', 'Laravel', 'Django', 'PHP', 'Python', 'WHM/cPanel', 'Nginx', 'Apache2']
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-lg border border-cyan-500/20 p-8 hover:shadow-xl hover:border-cyan-400/40 transition-all">
                <div className="mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <span className="text-lg font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-lg border border-cyan-500/30">
                          {exp.company}
                        </span>
                        <div className="flex items-center gap-2 text-gray-300">
                          <MapPin size={16} className="text-cyan-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-3 py-1 rounded-lg border border-gray-600/30">
                        <Calendar size={16} className="text-cyan-400" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-3 leading-relaxed">
                        <span className="text-cyan-400 mt-1.5 text-lg">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 rounded-full text-sm font-medium hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}