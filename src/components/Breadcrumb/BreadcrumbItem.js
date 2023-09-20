import styled from "@emotion/styled"
import Icon from "../Icon"

const BreadcrumbItemContainer = styled.div`
  display: inline-flex;
  align-items: center;
`

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`

const BreadcrumbItem = ({ children, href, active, __TYPE, ...props }) => {
  return (
    <BreadcrumbItemContainer {...props}>
      <Anchor href={href}>
        <div size={14} strong={active}>
          {children}
        </div>
      </Anchor>
      {!active && <Icon name="chevron-right" size={22} strokewidth={1} />}
    </BreadcrumbItemContainer>
  )
}
BreadcrumbItem.defaultProps = {
  __TYPE: 'BreadcrumbItem'
}
BreadcrumbItem.propTypes = {
  __TYPE: 'BreadcrumbItem'
}

export default BreadcrumbItem