import styled from "@emotion/styled";
import ImageComponent from "../Image"
import { useEffect, useState } from "react";
import AvatarGroup from "./AvatarGroup";

const ShapeToCssValue = {
  circle: '50%',
  round: '4px',
  square: '0px'
}

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
    background-color: #eee;
  overflow: hidden;

  > img {
    transition: 0.2s ease-out;
  }
`

const Avatar = ({
  lazy,
  threshold,
  src,
  size = 70,
  shape = "circle",
  placeholder,
  alt,
  mode = "cover",
  __TYPE,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const image = new Image()
    image.src = src;
    image.onload = () => setLoaded(true)
  }, [src])

  return (
    <AvatarWrapper {...props} shape={shape}>
      <ImageComponent
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </AvatarWrapper>
  )
}

// Avatar을 제외한 것들이 같이 나오지 않게 필터링
Avatar.defaultProps = {
  __TYPE: 'Avatar'
}

Avatar.propTypes = {
  __TYPE: 'Avatar'
}

Avatar.Group = AvatarGroup

export default Avatar;