export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d18c4ed0cd9aea493f23a9a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-e4xb62eq',
                  apiId: '83bb16e3-503b-45be-b0d8-63147b5f28b9'
                },
                {
                  buildHookId: '5d18c4eee2c29e70bc5ed6ca',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-htzxukzh',
                  apiId: '262ac077-78fe-4c7e-9400-7e8090281df8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tuckpuck/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-htzxukzh.netlify.com', category: 'apps'}
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
