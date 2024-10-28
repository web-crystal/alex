import React from 'react'
import Head from 'next/head'
import ContactForm from '@/components/forms/ContactForm'
import { GitHubIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from '@/components/icons/SocialIcons'
import { CONTACT_PAGE } from '@/constants/pages'
import { SOCIALS } from '@/constants/common'

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>{CONTACT_PAGE.title}</title>
        <meta name="description" content={CONTACT_PAGE.description} />
        <meta name="og:title" content={CONTACT_PAGE.title} />
        <meta name="og:description" content={CONTACT_PAGE.description} />
        <meta name="og:url" content={process.env.NEXT_PUBLIC_HOST + CONTACT_PAGE.path} />
        <meta name="twitter:title" content={CONTACT_PAGE.title} />
        <meta name="twitter:description" content={CONTACT_PAGE.description} />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_HOST + CONTACT_PAGE.path} />
      </Head>

      <h1 className="page-title" data-text={CONTACT_PAGE.h1}>
        {CONTACT_PAGE.h1}
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="mb-4 w-full text-center lg:w-[480px] lg:text-left">
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">STREET ADDRESS</h2>
            <p className="text-sm leading-5">
              8 Caxton Rd, Claremont
              <br />
              WA 6010, Australia
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">EMAIL ADDRESS</h2>
            <p className="text-sm leading-5">
              <a href="mailto:oleksandranuchyn@gmail.com" rel="noopener" className="hover:text-yellow-600">
                oleksandranuchyn@gmail.com
              </a>
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">FIND ME ONLINE</h2>
            <div className="block">
              <a
                href={SOCIALS.LI}
                aria-label="Instagram"
                target="_blank"
                rel="noopener"
                className="mx-2 inline-block p-2 opacity-80 hover:opacity-95"
              >
                <LinkedInIcon />
              </a>
              <a
                href={SOCIALS.GH}
                aria-label="GitHub"
                target="_blank"
                rel="noopener"
                className="mx-2 inline-block p-2 opacity-80 hover:opacity-95"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:flex-1">
          <ContactForm formspreeKey={CONTACT_PAGE.body.formspree_key} />
        </div>
      </div>
    </>
  )
}

export default ContactPage
