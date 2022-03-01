import PFBSReactComponent from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";
import Container from "../../react/Container";
import Table from "../../react/table/Table";
import TableHead from "../../react/table/TableHead";
import TableRow from "../../react/table/TableRow";
import TableHeadCell from "../../react/table/TableHeadCell";
import TableBody from "../../react/table/TableBody";
import TableCell from "../../react/table/TableCell";


export default class TableComponent extends PFBSReactComponent<any, any> {


    render() {
        return (
            <Container type={"fluid"} className={"some-class"}>
                <Table color={"secondary"} isHoverEffectInRow={true} variant={"bordered"} verticalAlign={"middle"} viewSize={"small"}>
                    <TableHead color={"dark"}>
                        <TableRow>
                            <TableHeadCell isSortAble={true}>A</TableHeadCell>
                            <TableHeadCell>A</TableHeadCell>
                            <TableHeadCell>A</TableHeadCell>
                            <TableHeadCell isSortAble={true}>A</TableHeadCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell>A</TableCell>
                            <TableCell>A</TableCell>
                            <TableCell>A</TableCell>
                            <TableCell>A</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>B</TableCell>
                            <TableCell>B</TableCell>
                            <TableCell>B</TableCell>
                            <TableCell>B</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>C</TableCell>
                            <TableCell>C</TableCell>
                            <TableCell>C</TableCell>
                            <TableCell>C</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Container>
        );
    }

}