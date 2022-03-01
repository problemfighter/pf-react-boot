import DialogHeaderSpec, {DialogHeaderProps} from "@pfo/pf-boot-spec/boot/spec/dialog/DialogHeaderSpec";
import {PFUIState} from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";


interface Props extends DialogHeaderProps {

}

class State implements PFUIState {
}

export default class DialogHeader extends DialogHeaderSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (
            <div className="modal-header">
                {this.props.children}
            </div>
        );
    }

}