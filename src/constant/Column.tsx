import { createColumnHelper } from "@tanstack/react-table"
import { Account } from "../interface/Account"
import { Profile } from "../interface/Profile"
import { Campaign } from "../interface/Campaigns"

const columnHelperAccount = createColumnHelper<Account>()
const columnHelperProfile = createColumnHelper<Profile>()
const columnHelperCampaign = createColumnHelper<Campaign>()

export const columnsAccount = [
    columnHelperAccount.accessor('accountId', {
        header: () => <span>Account Id</span>,
        cell: info => info.getValue(),
    }),
    columnHelperAccount.accessor('email', {
        header: () => <span>Email</span>,
        cell: info => info.getValue(),
    }),
    columnHelperAccount.accessor('authToken', {
        header: () => <span>Auth Token</span>,
        cell: info => info.getValue(),

    }),
    columnHelperAccount.accessor('creationDate', {
        header: () => <span>Creation Date</span>,
        footer: info => info.column.id,
    })
]

export const columnsProfile = [
    columnHelperProfile.accessor('profileId', {
        header: () => <span>Profile Id</span>,
        cell: info => info.getValue(),
    }),
    columnHelperProfile.accessor('country', {
        header: () => <span>Country</span>,
        cell: info => info.getValue(),
    }),
    columnHelperProfile.accessor('marketplace', {
        header: () => <span>Marketplace</span>,
        cell: info => info.getValue(),
    }),
]

export const columnsCampaign = [
    columnHelperCampaign.accessor('campaignId', {
        header: () => <span>Campaign Id</span>,
        cell: info => info.getValue(),
    }),
    columnHelperCampaign.accessor('clicks', {
        header: () => <span>Clicks</span>,
        cell: info => info.getValue(),
    }),
    columnHelperCampaign.accessor('cost', {
        header: () => <span>Cost</span>,

        cell: info => info.getValue(),

    }),
    columnHelperCampaign.accessor('date', {
        header: () => <span>Date</span>,
        cell: info => info.getValue(),
    }),
]