import Divider from "../components/Divider";
//import Text from "../components/Text"

export default {
  title: 'Component/Divider',
  component: Divider,
}

export const Horizontal = () => {
  return (
    <>
      <>위</>
      <Divider type="horizontal" />
      <>아래</>
    </>
  )
}

export const Vertical = () => {
  return (
    <>
      <>왼쪽</>
      <Divider type="vertical" />
      <>오른쪽</>
    </>
  )
}