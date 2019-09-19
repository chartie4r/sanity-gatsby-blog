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
                  buildHookId: '5d838288c9fe9877e8391a58',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tgdxgg6a',
                  apiId: 'bf78ada4-e3dc-410f-9ccb-4b20d2cbbf68'
                },
                {
                  buildHookId: '5d8382878df994073a59e3bf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-squvms9c',
                  apiId: '291d380c-1379-4d3b-b8ca-378d49f1c678'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chartie4r/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-squvms9c.netlify.com', category: 'apps'}
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
