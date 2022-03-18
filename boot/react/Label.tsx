import LabelSpec, {LabelProps} from "@pfo/pf-boot-spec/boot/spec/LabelSpec";
import {PFUIState} from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";
import CommonUtil from "@pfo/pf-boot-spec/boot/spec/common/common-util";


export type LabelType =
    'text'
    | 'checkbox'
    | 'radio'
    | 'switch'

interface Props extends LabelProps {
    type?: LabelType
    labelClass?: string
}

class State implements PFUIState {
}

export default class Label extends LabelSpec<Props, State> {

    static defaultProps = {
        type: "text"
    }

    private getMainClass() {
        let klass = "form-label"
        let type = String(this.props.type)
        switch (type) {
            case "checkbox":
            case "radio":
            case "switch":
                klass = "form-check-label"
                break
        }
        if (this.props.labelClass) {
            klass += " " + this.props.labelClass
        }
        return klass
    }

    render() {
        const _props = this.props;
        let klasses = (this.getMainClass() + (_props.className ? " " + _props.className : "")).trim();
        return (<label
            {...CommonUtil.removePropsItem(_props, ['type', 'labelClass'])}
            className={klasses}
        >{_props.children}</label>);
    }

}