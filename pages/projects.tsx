import React from 'react'
import { Image } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import Head from 'next/head'
import { IRepository } from '@/types'
import langColors from '@/constants/langColors'
import LangBar from '@/components/animations/LangBar'
import LangTextAnimation from '@/components/animations/LangTextAnimation'
import { UserIcon } from '@/components/icons/Feather'
import { PROJECTS_PAGE } from '@/constants/pages'
import { PROJECTS } from '@/constants/projects'

const RepositoryCard = ({ repo }: { repo: IRepository }) => {
  return (
    <div className="relative flex flex-col overflow-hidden bg-white/50 dark:bg-black/80">
      <div className="flex" style={{ height: '340px', overflow: 'hidden' }}>
        <Image src={repo.preview_img} alt="jobscan-img" preview={{ src: repo.img, mask: <PlusOutlined className="text-6xl" /> }} />
      </div>
      <div className="flex-1 p-5">
        <a href={repo.html_url} target="_blank">
          <h2 className="mb-1 items-center text-2xl font-bold capitalize">{repo.name.replaceAll('-', ' ')}</h2>
        </a>
        <div className="block h-10 text-xs font-bold">
          <span className="opacity-80">Completed &nbsp;&nbsp;&nbsp;{repo.last_commit_at}.</span>
          <br />
          {repo.homepage && (
            <a href={repo.homepage} rel="noopener" target="_blank" className="hover:text-yellow-600">
              {new URL(repo.homepage).host}
            </a>
          )}
        </div>
        <p className="opacity-80 md:line-clamp-3">{repo.description}</p>
      </div>
      <div className="mb-2 px-5">
        <ul className="mb-2 block">
          {repo.topics.map((topic) => (
            <li
              key={topic}
              className="mb-1 mr-1 inline-block border bg-gray-100/50 p-1 text-xs leading-none dark:border-gray-800 dark:bg-gray-900/50"
            >
              {topic}
            </li>
          ))}
        </ul>
        <div className="flex">
          <div className="flex-1">
            <LangTextAnimation items={repo.languages.map(({ name }) => name)} />
          </div>
          <span className="font-sm flex items-center font-bold">
            <UserIcon width="1em" className="mr-1 block" />
            <span className=" mt-px block leading-none">{repo.role}</span>
          </span>
        </div>
      </div>
      <div className="flex h-2 w-full bg-white dark:bg-black">
        {repo.languages.map((el) => (
          <LangBar key={el.name} className="h-full bg-black dark:bg-white" size={el.size} color={langColors[el.name]} />
        ))}
      </div>
    </div>
  )
}

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>{PROJECTS_PAGE.title}</title>
        <meta name="description" content={PROJECTS_PAGE.description} />
        <meta name="og:title" content={PROJECTS_PAGE.title} />
        <meta name="og:description" content={PROJECTS_PAGE.description} />
        <meta name="og:url" content={process.env.NEXT_PUBLIC_HOST + PROJECTS_PAGE.path} />
        <meta name="twitter:title" content={PROJECTS_PAGE.title} />
        <meta name="twitter:description" content={PROJECTS_PAGE.description} />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_HOST + PROJECTS_PAGE.path} />
      </Head>
      <h1 className="page-title" data-text={PROJECTS_PAGE.h1}>
        {PROJECTS_PAGE.h1}
      </h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {PROJECTS.map((repo, i) => (
          <RepositoryCard key={i} repo={repo} />
        ))}
      </div>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps<{ repositories: IRepository[] }> = async () => {
//   const repositories = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/repositories').then((res) => res.json())
//   return {
//     props: {
//       repositories,
//     },
//   }
// }

export default ContactPage
