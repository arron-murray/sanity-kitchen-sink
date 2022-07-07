export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62c749e7222de8071f9ec2b6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1vhz25bf',
                  apiId: 'f0c93ae6-aaf4-4151-8a79-d706e645d60a'
                },
                {
                  buildHookId: '62c749e701bfc8077ba93fe3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vzr7cc3y',
                  apiId: 'eb37bdd7-1239-4783-953d-9082f65c27aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arron-murray/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vzr7cc3y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
