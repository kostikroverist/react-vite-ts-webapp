import { FC } from "react"


type Props = {
    filter: string
    setFilter: (value: string) => void
}

const GlobalFilter: FC<Props> = ({ filter, setFilter }) => {
    return (
        <span>
            Search: {' '}
            <input type="search" value={filter || ''} onChange={e => setFilter(e.target.value)} />
        </span>
    )
}

export default GlobalFilter
