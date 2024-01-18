import { useNavigate, useParams } from "react-router-dom";
import Table from "../components/Table/Table";
import { Profile } from "../interface/Profile";
import { ColumnDef } from "@tanstack/react-table";
import { getProfilesById } from "../server/Service";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import { columnsProfile } from "../constant/Column";

const ProfilePage = () => {
    const params = useParams();
    const [page, setPage] = useState<number>(1);
    const limit = 2

    const navigate = useNavigate();
    const { isFetching, isPending, error, data, refetch } = useQuery<Profile[]>({
        queryKey: ['profiles', params.accountId, page, limit],
        queryFn: () => getProfilesById(params.accountId, page, limit),
    });

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
            <h1 className="text-center">Profile page</h1>
            <Button onClick={() => navigate(-1)} text={"Back"} />
            {isPending ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <>
                    <Table data={data} columns={columnsProfile as ColumnDef<Profile>[]} onRowClick={({ original }) => navigate(original.profileId)} />
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

export default ProfilePage
