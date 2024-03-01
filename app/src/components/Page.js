function Page(props) {
    let {style, children, ...otherProps} = {...props}
    

  
    return(
      <div className="page">
        {children}
      </div>
    )
}
export default Page