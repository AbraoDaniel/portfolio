import { Drawer, Menu } from "antd"
import { useNavigate } from "react-router-dom";

interface IHeaderDrawer {
  setOpenHeaderDrawer: (value: boolean) => void
  items: {
    key: string;
    label: string;
}[]
}
const HeaderDrawer: React.FC<IHeaderDrawer> = ({setOpenHeaderDrawer, items}) => {
  const navigate = useNavigate()
  function handleClickToRedirect(value: string) {
    if (value !== 'github') {
      navigate(value)
      setOpenHeaderDrawer(false)
      return
    }

    window.open('https://github.com/AbraoDaniel', '_blank')
  }

  return (
    <Drawer 
      open
      onClose={() => setOpenHeaderDrawer(false)}
      placement="left"
      width={700}
      className="header-drawer"
      title={
      <div style={{textAlign: 'center'}}>
        <div className="header-logo" style={{marginTop: 0}} onClick={() => {
          navigate('/')
          setOpenHeaderDrawer(false)
        }}>
          {'daniel.'}
        </div>
      </div>
      }
    >
      <Menu
        className='header-menu'
        mode="vertical"
        onClick={(value) => {
          handleClickToRedirect(value?.key)
        }}
        items={items}
      />
    </Drawer>
  )
}

export default HeaderDrawer