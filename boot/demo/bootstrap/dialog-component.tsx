import PFBSReactComponent from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";
import Dialog from "../../react/dialog/Dialog";
import DialogContent from "../../react/dialog/DialogContent";
import DialogFooter from "../../react/dialog/DialogFooter";
import Button from "../../react/Button";

class State {
    isOpenDialog: boolean = false
}

export default class DialogComponent extends PFBSReactComponent<any, State> {

    state: State = new State();

    dialogView() {
        return (
            <Dialog title={"Confirm Box"} onClose={() => { this.setState({isOpenDialog: false}) }}>
                <DialogContent>
                    Dialog Body Content
                </DialogContent>
                <DialogFooter>
                    Footer
                </DialogFooter>
            </Dialog>
        )
    }

    render() {

        return (
            <>
                <Button onClick={() => {this.setState({isOpenDialog: true})}}>Open Dialog</Button>
                {this.state.isOpenDialog ? this.dialogView() : ""}
            </>
        );
    }

}