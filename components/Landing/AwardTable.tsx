export interface AwardTableData {
    placement: string;
    competition: string;
    organization: string;
    category: string;
    project: string;
}
export default function AwardTable(props: { rowNames: (keyof AwardTableData)[]; rowValues: AwardTableData[] }) {
    return (
        <div className="relative md:overflow-x-auto sm:rounded-lg shadow-lg shadow-black">
            <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-md text-gray-300 uppercase bg-stone-800">
                    <tr>
                        {props.rowNames.map((name) => (
                            <th key={name} scope="col" className="px-6 py-3">
                                {name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-md text-gray-200">
                    {props.rowValues.map((row) => (
                        <tr key={row.competition + Date.now()} className="bg-stone-700 border-b-2 border-stone-500">
                            {Object.values(props.rowNames).map((value, index) => (
                                <TableRow key={index} isFirst={index === 0}>
                                    {row[value as keyof AwardTableData]}
                                </TableRow>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function TableRow(props: { children: React.ReactNode; isFirst?: boolean }) {
    if (!props.isFirst) return <td className="px-6 py-4">{props.children}</td>;

    return (
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {props.children}
        </th>
    );
}
