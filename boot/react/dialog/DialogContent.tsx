import DialogContentSpec, {DialogContentProps} from "@pfo/pf-boot-spec/boot/spec/dialog/DialogContentSpec";
import {PFUIState} from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";


interface Props extends DialogContentProps {

}

class State implements PFUIState {
}

export default class DialogContent extends DialogContentSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (
            <div className="modal-body">
                {this.props.children}
            </div>
        );
    }

}