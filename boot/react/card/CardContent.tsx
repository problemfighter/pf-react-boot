import CardContentSpec, {CardContentProps} from "@pfo/pf-boot-spec/boot/spec/card/CardContentSpec";
import {PFUIState} from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";
import CommonUtil from "@pfo/pf-boot-spec/boot/spec/common/common-util";


interface Props extends CardContentProps {

}

class State implements PFUIState {
}

export default class CardContent extends CardContentSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<div {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "card-body")}>{_props.children}</div>);
    }

}