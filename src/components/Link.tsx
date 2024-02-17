/* props для компонента Link, заголовок и содержимое */
type LinkProps = {
    title: string,
    children: React.ReactNode
}

const Link = (props: LinkProps) => {
    return (
        <>
        <h4>{props.title}</h4>
        {props.children}
        </>
    )
}

export default Link;