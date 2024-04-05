import Image from 'next/image'
import me from './Me.png'

export default function Me() {
  return (
    <Image
      src={me}
      alt="Vic van Cooten"
      className="me"
      width={75}
      height={75}
      placeholder="blur"
      priority
    />
  )
}
