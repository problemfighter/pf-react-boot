import PFBSReactComponent from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";
import TableComponent from "./table-component";
import FormComponent from "./form-component";
import Container from "../../react/Container";
import DialogComponent from "./dialog-component";
import Button from "../../react/Button";
import Toast from "../../react/Toast";
import LoadingIndicator from "../../react/LoadingIndicator";
import Dropdown from "../../react/Dropdown";

class State {
    isOpenToast: boolean = false
    isShowLoader: boolean = false
}

export default class BootstrapComponent extends PFBSReactComponent<any, State> {

    state: State = new State();


    render() {
        return (
            <Container>
                <h3>In the name of God, the Most Gracious, the Most Merciful.</h3>

                <br/>
                <h2>Dropdown Example</h2>
                <Dropdown itemList={["Item 1", "Item 2"]} wrapperPlaceholder={<Button>Dropdown</Button>}/>

                <br/><br/>
                <h2>Loading Indicator Example</h2>
                {this.state.isShowLoader ? <LoadingIndicator/> : ""}
                <Button type={"button"} onClick={()=>{ this.setState({isShowLoader:!this.state.isShowLoader})}}>
                    {this.state.isShowLoader ? "Hide" : "Show"} Indicator
                </Button>

                <br/><br/>
                <h2>Toast Example</h2>
                {this.state.isOpenToast ? <Toast
                    displayPosition={"topRight"}
                    messageType={"success"}
                    message={"Toast Success Message"}
                    onClose={()=>{ this.setState({isOpenToast:false})}}/> : ""}
                <Button type={"button"} onClick={()=>{ this.setState({isOpenToast:true})}}>Show Toast</Button>

                <br/><br/>
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
        );
    }

}