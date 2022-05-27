import MenuItem from './MenuItem'

const TopMenu = () => {
  return (
    <ul className="top-menu col-md-4">
        <MenuItem path='barbearias' label='Barbearias'></MenuItem>
        <MenuItem path='about' label='Sobre nós'></MenuItem>
        <MenuItem path='contact' label='Contato'></MenuItem>
    </ul>
  )
}

export default TopMenu