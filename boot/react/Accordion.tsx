import {PFUIState} from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";
import CommonUtil from "@pfo/pf-boot-spec/boot/spec/common/common-util";
import AccordionSpec, {AccordionProps} from "@pfo/pf-boot-spec/boot/spec/AccordionSpec";


interface Props extends AccordionProps {

}

class State implements PFUIState {
}

export default class Accordion extends AccordionSpec<Props, State> {

    static defaultProps = {
        isSingleExpand: true,
        isFlush: false,
    }


    render() {
        const _props = this.props;
        let randomId = "-" + Date.now()
        let defaultClass: any = "accordion"
        if (_props.isFlush) {
            defaultClass += " accordion-flush"
        }
        let singleExpandId = ""
        let bodyAttr = {}
        if (_props.isSingleExpand) {
            singleExpandId = "top" + randomId
            bodyAttr = {"data-bs-parent": "#" + singleExpandId}
        }
        return (
            <div key={"key" + randomId}
                {...CommonUtil.addId(_props, singleExpandId)}
                 className={CommonUtil.addClassName(_props, defaultClass)}>
                {_props.items.map((accordion: any, index: any) => (
                    <div key={index} className="accordion-item">
                        <span className="accordion-header">
                            <button
                                type={"button"}
                                {...CommonUtil.addId(accordion.header)}
                                className={CommonUtil.addClassName(accordion.header, "accordion-button" + (accordion.isOpen ? "" : " collapsed"))}
                                data-bs-toggle="collapse" data-bs-target={"#toggle" + index + randomId}
                            >
                                {accordion.header.content}
                            </button>
                        </span>
                        <div
                            className={CommonUtil.addClassName(accordion.body, "accordion-collapse collapse" + (accordion.isOpen ? " show" : "") )}
                            {...CommonUtil.addId(accordion.body, "toggle" + index + randomId)}
                            {...bodyAttr}
                        >
                            <div className="accordion-body">
                                {accordion.body.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

}