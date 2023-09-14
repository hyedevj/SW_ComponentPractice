import React from "react"

const AvatarGroup = ({ children, shape = 'circle', size = 70, ...props }) => {
  const avatars = React.Children.toArray(children)
    .filter(element => {
      // Avatar을 제외한 것들이 같이 나오지 않게 필터링
      if (React.isValidElement(element) && element.props.__TYPE === 'Avatar') {
        return true
      }
      console.log("Only accepts Avatar as it's children.")
      return false
    })
    .map((avatar, index, avatars) => {
      return React.cloneElement(avatar, {
        ...avatar.props,
        size,
        shape,
        style: {
          ...avatar.props.style,
          marginLeft: -size / 5,
          zIndex: avatars.length - index,
        }
      })
    })
  
  return <div style={{paddingLeft: size / 5}}>{avatars}</div>
}

export default AvatarGroup
