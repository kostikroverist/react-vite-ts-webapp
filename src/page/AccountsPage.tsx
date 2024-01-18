import { ColumnDef } from "@tanstack/react-table"
import Table from "../components/Table/Table"
import { Account } from "../interface/Account"
import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getAccounts } from "../server/Service"
import Button from "../components/Button/Button"
import { columnsAccount } from "../constant/Column"



const AccountsPage = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(1);
    const limit = 2
    const { isFetching, isPending, error, data, refetch } = useQuery<Account[]>({
        queryKey: ['accounts'],
        queryFn: () => getAccounts(page, limit),
    })

    useEffect(() => {
        refetch();
    }, [page, refetch]);
    const handleNextClick = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePrevClick = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    };
    return (
        <div>
            <h1 className="text-center">Account page</h1>
            <Button onClick={() => navigate(-1)} text={"Back"} />
            {isPending ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (<>
                <Table data={data} columns={columnsAccount as ColumnDef<Account>[]} onRowClick={({ original }) => navigate(original.accountId)} />
                <div style={{ width: '280px' }} className=" d-flex justify-content-between align-items-center m-auto">
                    <Button onClick={handlePrevClick} disabled={page === 1 || isFetching} text={"Previous"} />
                    <span> Page {page} </span>
                    <Button
                        onClick={handleNextClick}
                        disabled={data.length < limit || isFetching || data.length === 0}
                        text="Next"
                    />

                </div>
            </>
            )}
        </div>
    )
}

export default AccountsPage

