"use client";

import React from 'react';
import { useState } from 'react';
import  BlogCard  from '../../components/BlogCard';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '../../components/ui/tabs'

const blogData = [
  {
    image: "/assets/blog/react.19.png",
    category: "Latest React News",
    name: "React 19 is here",
    description:
      `🎉 Exciting news! React 19 is here.
      🚀 With the introduction of concurrent rendering.
      💡 Say goodbye to tedious debugging with React 19's improved error handling capabilities.
      ⚡️ Experience a significant speed boost with React 19's optimized reconciliation algorithm.
      🌟 Don't miss out on the next evolution of React.
      `,
    link: "",
    gitbranch: ""
  },
  {
    image: "/assets/blog/react.19.2.png",
    category: "Archive",
    name: "Past Articles",
    description:
    `🎉 Exciting news for developers! React 19 has officially launched.
    🚀 With the introduction of concurrent rendering.
    💡 Say goodbye to tedious debugging with React 19's improved error handling capabilities.
    ⚡️ Experience a significant speed boost with React 19's optimized reconciliation algorithm.
    🌟 Don't miss out on the next evolution of React.
    `,
    link: "",
    gitbranch: ""
  },
  {
    image: "/assets/blog/react.19.3.png",
    category: "Research",
    name: "Recent Research",
    description:
    `🎉 Exciting news for developers! React 19 has officially launched.
    🚀 With the introduction of concurrent rendering.
    💡 Say goodbye to tedious debugging with React 19's improved error handling capabilities.
    ⚡️ Experience a significant speed boost with React 19's optimized reconciliation algorithm.
    🌟 Don't miss out on the next evolution of React.
    `,
    link: "",
    gitbranch: ""
  },
];

const uniqueCategories = [
  'all articles',
  ...new Set(blogData.map(item => item.category)),
];


  

const blog = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = blogData.filter(project => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'all projects' 
    ? project 
    : project.category === category; 
  });
  return (
    <>
    <section id="projects" className="min-h-screen pt-12 bg-sky-600">
      <div className="container mx-auto">
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px]
          mb-12 mx-auto md:border dark:border-none"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index)=> {
              return ( 
              <TabsContent value={category} key={index}>
                <BlogCard project={project}/>
              </TabsContent>
            )})}
          </div>
        </Tabs>
      </div>
    </section>
    </>
  )
  
}

export default blog