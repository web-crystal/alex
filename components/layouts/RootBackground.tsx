import { memo } from 'react'
import PageTitleAnimation from '../animations/PageTitleAnimation'

const RootBackground = memo(() => {
  return (
    <>
      <PageTitleAnimation />
      <div className="fixed left-0 top-0 -z-50 h-full w-full overflow-hidden bg-white dark:bg-black">
        <img
          src="/media/background.jpg"
          alt={process.env.NEXT_PUBLIC_HOST + ' backgroud image.'}
          className={'block h-full w-full object-cover'}
        />
      </div>
    </>
  )
})

export default RootBackground
