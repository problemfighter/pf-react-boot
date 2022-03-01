import Bootstrap from "../../react/Bootstrap";
import PFBSReactComponent from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";
import TableComponent from "./table-component";
import FormComponent from "./form-component";
import Container from "../../react/Container";
import DialogComponent from "./dialog-component";
import Button from "../../react/Button";

export default class BootstrapComponent extends PFBSReactComponent<any, any> {


    render() {
        return (
            <Bootstrap>
                <Container>
                    <h3>In the name of God, the Most Gracious, the Most Merciful.</h3>


                    <br/>
                    <h2>Button Example</h2>
                    <Button type={"button"}>Submit Button</Button>
                    <Button variant={"secondary"} className={"m-2"}>Secondary Button</Button>
                    <Button variant={"dark"}>Dark Button</Button>
                    <Button variant={"danger"} className={"m-2"}>Dander Button</Button>


                    <br/><br/><br/><br/>
                    <h2>Dialog Example</h2>
                    <DialogComponent/>

                    <br/><br/><br/><br/>
                    <h2>Table Example</h2>
                    <TableComponent/>

                    <br/>
                    <h2>Form Example</h2>
                    <FormComponent/>
                </Container>
            </Bootstrap>
        );
    }

}