type Props = {
  title: string
}

export const TabBar = (props: Props) => {
  const { title } = props
  return (
    <header className="px-4 py-3 bg-[#1e1f23]">
      <h2 className="text-lg m-0 tracking-wider uppercase">{title}</h2>
    </header>
  )
}
