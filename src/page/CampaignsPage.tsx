import { ColumnDef } from "@tanstack/react-table";
import Table from "../components/Table/Table";
import { Campaign } from "../interface/Campaigns";
import { useQuery } from "@tanstack/react-query";
import { getCampaignById } from "../server/Service";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import { columnsCampaign } from "../constant/Column";

const CampaignsPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [page, setPage] = useState<number>(1);
    const limit = 2
    const { isFetching, isPending, error, data, refetch } = useQuery<Campaign[]>({
        queryKey: ['campaigns'],
        queryFn: () => getCampaignById(params.profileId, page, limit),
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
            <h1 className="text-center">Campaign page</h1>
            <Button onClick={() => navigate(-1)} text={"Back"} />
            {isPending ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <>
                    <Table data={data} columns={columnsCampaign as ColumnDef<Campaign>[]} />
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

export default CampaignsPage
