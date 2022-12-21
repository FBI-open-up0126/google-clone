interface Props extends React.ComponentPropsWithoutRef<"input"> {}

export default function SearchInput(props: Props) {
    return <input {...props}></input>;
}
