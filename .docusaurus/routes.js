
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','5d0'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','3f6'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','1eb'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','960'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','f95'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','f9d'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','af2'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','3f7'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','24f'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','1e2'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','dba'),
  exact: true,
},
{
  path: '/docs/create-a-blog-post',
  component: ComponentCreator('/docs/create-a-blog-post','12e'),
  exact: true,
},
{
  path: '/docs/create-a-document',
  component: ComponentCreator('/docs/create-a-document','3f4'),
  exact: true,
},
{
  path: '/docs/create-a-page',
  component: ComponentCreator('/docs/create-a-page','486'),
  exact: true,
},
{
  path: '/docs/markdown-features',
  component: ComponentCreator('/docs/markdown-features','f04'),
  exact: true,
},
{
  path: '/docs/thank-you',
  component: ComponentCreator('/docs/thank-you','3bd'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
