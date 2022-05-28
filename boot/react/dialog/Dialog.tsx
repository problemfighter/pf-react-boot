import DialogSpec, {DialogProps} from "@pfo/pf-boot-spec/boot/spec/dialog/DialogSpec";
import {PFUIState} from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";

const style = {
    displayBlock: {
        display: "block"
    },
    defaultTitle: {
        paddingTop: "5px",
        paddingLeft: "12px",
        paddingRight: "12px",
        paddingBottom: "5px",
        borderBottom: "none"
    }
}

interface Props extends DialogProps {

}

class State implements PFUIState {
    isShowModal?: boolean = true
}

export default class Dialog extends DialogSpec<Props, State> {

    state: State = new State();

    static defaultProps = {}

    componentDidMount() {
        if (this.props.onLoad) {
            this.props.onLoad()
        }
    }

    private closeDialog() {
        this.setState({isShowModal: false})
        if (this.props.onClose) {
            this.props.onClose()
        }
    }

    private getHeader(){
        const _this = this;
        if (!this.props.header){
            return (
                <div className="modal-header" style={style.defaultTitle}>
                    <h5 className="modal-title" >{_this.props.title}</h5>
                    <button onClick={()=>{_this.closeDialog()}} type="button" className="btn-close"/>
                </div>
            )
        }
        return this.props.header
    }

    getDialogBoxSize() {
        let type = String(this.props.boxSize)
        switch (type) {
            case "Small":
                return "modal-sm"
            case "Large":
                return "modal-lg"
            case "ExtraLarge":
                return "modal-xl"
            default:
                return ""
        }
    }

    render() {
        const _props = this.props;
        const _this = this;
        let className = "modal-dialog modal-dialog-centered " + _this.getDialogBoxSize()
        return (
            (!_this.state.isShowModal ? "" :
                <div className="modal fade show" style={style.displayBlock}>
                    <div className={className.trim()}>
                        <div className="modal-content">
                            {_this.getHeader()}
                            {_props.children}
                        </div>
                    </div>
                </div>
            )
        );
    }

}