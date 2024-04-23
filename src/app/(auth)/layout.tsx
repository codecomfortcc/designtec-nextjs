import Image from 'next/image'
import React  from 'react'
import background from "@/assets/background.svg";
const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex min-h-screen">
      <div className="max-sm:w-full w-96">
        {children}
      </div>
      <div className="grow max-sm:hidden relative">
        <div className="object-cover w-full h-full absolute  bg-primary/20 ">
          <Image
            src={background}
            alt=""
            className="object-cover w-full h-full aspect-video"
          />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
