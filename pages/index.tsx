import Head from 'next/head'
import { GitHubIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from '@/components/icons/SocialIcons'
import { SOCIALS } from '@/constants/common'
import { HOME_PAGE } from '@/constants/pages'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{HOME_PAGE.title}</title>
        <meta name="description" content={HOME_PAGE.description} />
        <meta name="og:title" content={HOME_PAGE.title} />
        <meta name="og:description" content={HOME_PAGE.description} />
        <meta name="og:url" content={process.env.NEXT_PUBLIC_HOST + HOME_PAGE.path} />
        <meta name="twitter:title" content={HOME_PAGE.title} />
        <meta name="twitter:description" content={HOME_PAGE.description} />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_HOST} />
      </Head>
      <div className="relative flex min-h-full w-full flex-col items-center justify-center">
        <div className="relative flex items-center justify-center py-3">
          <h1 className="relative flex-1">
            {/* <span className="grid grid-cols-2">
              <span className="block text-center text-sm opacity-90">I AM</span>
            </span>{' '} */}
            <span className="z-10 block text-[calc(1.825rem+6.9vw)] font-bold leading-none">Oleksandr Anuchyn</span>{' '}
            <span className="grid grid-cols-2 justify-items-end">
              <span className="block"></span>
              <span className="block pt-2 text-sm opacity-90">
                A&nbsp;&nbsp;RELIABLE
                <br />
                SOFTWARE&nbsp;&nbsp;ENGINEER
              </span>
            </span>
          </h1>
          <div className="absolute -bottom-1/4 mx-auto flex">
            <a
              href={SOCIALS.LI}
              aria-label="Instagram"
              target="_blank"
              rel="noopener"
              className="mx-2 block p-2 opacity-80 hover:opacity-95"
            >
              <LinkedInIcon />
            </a>
            <a href={SOCIALS.GH} aria-label="GitHub" target="_blank" rel="noopener" className="mx-2 block p-2 opacity-80 hover:opacity-95">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
