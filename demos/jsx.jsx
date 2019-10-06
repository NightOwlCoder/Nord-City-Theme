/*
* @see https://github.com/gatsbyjs/gatsby/pull/9892
* @since 0.3.0
*/

const A = ({ children, href, to, linkRef, ...passProps }) =>
 isRouteInternal(to) || isRouteInternal(href) ? (
   <BaseGatsbyLink innerRef={linkRef} to={to || href} {...passProps}>
     {children}
   </BaseGatsbyLink>
 ) : (
   <BaseComponent ref={linkRef} href={href || to} target="_blank" {...passProps}>
     {children}
   </BaseComponent>
 );

A.propTypes = {
 children: PropTypes.node.isRequired,
 href: PropTypes.node,
 linkRef: PropTypes.func,
 to: PropTypes.string
};

A.defaultProps = {
 href: null,
 linkRef: null,
 to: ""
};

/* eslint-disable-next-line react/prop-types */
export default React.forwardRef(({ children, ...passProps }, ref) => (
 <A linkRef={ref} {...passProps}>
   {children}
 </A>
));