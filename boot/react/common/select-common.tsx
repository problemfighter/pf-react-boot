import {InputViewHelper} from "./input-view-helper";
import React from "react";

export interface OptionType {
    label: string;
    value: string;
    rawData: any;
}

export default class SelectCommon {


    public static loadOption(component: any, props: any = undefined) {
        if (!props) {
            props = component.props
        }
        let optionData = this.listToOptionType(props);
        if (optionData) {
            component.setState({
                value: optionData.selected,
                options: optionData.options,
            })
        }
    }

    public static listToOptionType(props: any) {
        let optionData: { [key: string]: any } = {};
        optionData.options = [];
        optionData.selected = null;

        if (props.options && props.optionValue && props.optionLabel) {
            let items: Array<OptionType> = [];
            if (props.value instanceof Array) {
                optionData.selected = []
            }
            props.options.map((item: any) => {
                    items.push({value: item[props.optionValue], label: item[props.optionLabel], rawData: item})
                    if (props.value && props.value === item[props.optionValue]) {
                        optionData.selected = {value: item[props.optionValue], label: item[props.optionLabel]}
                    } else if (props.value instanceof Array) {
                        for (let nestedValue in props.value) {
                            if (props.value[nestedValue] == item[props.optionValue]) {
                                optionData.selected.push({value: item[props.optionValue], label: item[props.optionLabel]})
                            }
                        }
                    }
                }
            );
            optionData.options = items;
        }
        return optionData
    }

    public static onChange(data: any, component: any) {
        const _this = component;
        const _props = component.props;
        component.setState((status: any) => {
                return {
                    value: data
                }
            }, () => {
                if (_props.onChange) {
                    let value;
                    if (data instanceof Array) {
                        value = [];
                        data.map(item => {
                            value.push(item.value)
                        });

                    } else {
                        value = data.value
                    }
                    let changeData = {
                        raw: data,
                        target: {
                            name: _this.props.name,
                            value: value
                        }
                    };
                    _props.onChange(changeData);
                }
            }
        );
    }

    public static wrapContent(select: any, component: any) {
        const _props = component.props;
        let wrapper = InputViewHelper.getWrapperClass(_props)
        return (
            <div className={wrapper}>
                {InputViewHelper.getLabel(_props)}
                {select}
                {InputViewHelper.getErrorContent(_props)}
                {InputViewHelper.getSuccessContent(_props)}
                {InputViewHelper.getHelperContent(_props)}
            </div>
        )
    }

    public static getStyle(component: any) {
        const _props = component.props;
        return {
            control: (base: any, state: any) => {
                let response: any = {...base}
                if (_props.error) {
                    response = {
                        ...base,
                        border: '1px solid #dc3545',
                        boxShadow: 'none',
                        '&:hover': {
                            border: '1px solid #dc3545',
                        }
                    }
                } else if (_props.wasValidated) {
                    response = response = {
                        ...base,
                        border: '1px solid #198754',
                        boxShadow: 'none',
                        '&:hover': {
                            border: '1px solid #198754',
                        }
                    }
                }
                return response
            },
        }
    }


}