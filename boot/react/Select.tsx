import ReactSelect from "react-select";
import React from "react";
import {InputViewHelper} from "./common/input-view-helper";
import SelectSpec, {SelectProps as SelectPropsSpec} from "@pfo/pf-boot-spec/boot/spec/SelectSpec";
import {PFUIState} from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";
import SelectCommon from "./common/select-common";

export interface SelectProps extends SelectPropsSpec {
    wrapperClass?: string
    addWrapperClass?: string
}

export class SelectState implements PFUIState {
    value: any = null;
    options: any = [];
}


export default class Select extends SelectSpec<SelectProps, SelectState> {

    state: SelectState = new SelectState();

    static defaultProps = {
        wrapperClass: "mb-3",
        isSearchable: true
    }

    constructor(props: SelectProps) {
        super(props);
    }

    componentDidMount() {
        SelectCommon.loadOption(this);
    }

    componentDidUpdate(prevProps: SelectProps) {
        if (prevProps.options !== this.props.options || prevProps.value !== this.props.value) {
            SelectCommon.loadOption(this);
        }
    }

    render() {
        const _props = this.props;
        const _this = this;

        let klass = InputViewHelper.getClass(_props.className)
        klass = InputViewHelper.addValidationClass(_props, klass)

        let select = (
            <ReactSelect
                styles={SelectCommon.getStyle(_this)}
                value={_this.state.value}
                isMulti={_props.isMulti}
                onChange={(data: any) => {
                    SelectCommon.onChange(data, _this)
                }}
                isSearchable={_props.isSearchable}
                isClearable={_props.isClearable}
                isDisabled={_props.disabled}
                options={_this.state.options}
                className={klass}
                id={_props.id}
                placeholder={_props.placeholder}
                name={_props.name}
                menuPlacement={"auto"}
            />
        );
        return SelectCommon.wrapContent(select, _this)
    }

}