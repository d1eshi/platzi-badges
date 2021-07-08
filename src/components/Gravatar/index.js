import md5 from 'md5'

export default function Gravatar ({ emailUser, className }) {
  const hash = md5(emailUser)

  return (<img className={className} src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt='Avatar del usuario' />)
}
