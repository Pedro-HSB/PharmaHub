import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

const Footer = () => {
  return (
    <>
      <div className="flex justify-center bg-emerald-400 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className='text-xl font-bold'>PharmaHub Pedro | Copyright: </p>
          <p className='text-lg'>Acesse nossas redes sociais</p>
          <div className='flex gap-2'>
            <a href=""><LinkedinLogo size={48} weight='bold' /></a>
            <a href=""><InstagramLogo size={48} weight='bold' /></a>
            <a href=""><FacebookLogo size={48} weight='bold' /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer