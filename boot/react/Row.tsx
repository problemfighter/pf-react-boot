import RowSpec, {RowProps} from "@pfo/pf-boot-spec/boot/spec/RowSpec";
import {PFUIState} from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";
import CommonUtil from "@pfo/pf-boot-spec/boot/spec/common/common-util";


interface Props extends RowProps {

}

class State implements PFUIState {
}

export default class Row extends RowSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<div {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "row")}>{_props.children}</div>);
    }

}