import DialogFooterSpec, {DialogFooterProps} from "@pfo/pf-boot-spec/boot/spec/dialog/DialogFooterSpec";
import {PFUIState} from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";


interface Props extends DialogFooterProps {

}

class State implements PFUIState {
}

export default class DialogFooter extends DialogFooterSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (
            <div className="modal-footer">
                {this.props.children}
            </div>
        );
    }

}