import CommonTask from "./common/common-task";
import ColumnSpec, {ColumnProps} from "@pfo/pf-boot-spec/boot/spec/ColumnSpec";
import {PFUIState} from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";
import CommonUtil from "@pfo/pf-boot-spec/boot/spec/common/common-util";

interface Props extends ColumnProps {

}

class State implements PFUIState {
}

export default class Column extends ColumnSpec<Props, State> {

    static defaultProps = {}

    private getSpan() {
        let klass = ""
        const _props = this.props;
        if (_props.span) {
            klass += CommonTask.concatClass(klass, "col-" + _props.span)
        }

        if (_props.spanSmall) {
            klass = CommonTask.concatClass(klass, "col-sm-" + _props.spanSmall)
        }

        if (_props.spanMedium) {
            klass = CommonTask.concatClass(klass, "col-md-" + _props.spanMedium)
        }

        if (_props.spanLarge) {
            klass = CommonTask.concatClass(klass, "col-lg-" + _props.spanLarge)
        }

        if (_props.spanExtraLarge) {
            klass = CommonTask.concatClass(klass, "col-xl-" + _props.spanExtraLarge)
        }

        if (_props.spanTooExtraLarge) {
            klass = CommonTask.concatClass(klass, "col-sm-xxl" + _props.spanTooExtraLarge)
        }

        return klass
    }

    render() {
        const _props = this.props;
        return (<div {...CommonUtil.addEventProps(_props)} {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, this.getSpan())}>{_props.children}</div>);
    }

}