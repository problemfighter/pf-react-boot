import Select from "./Select";
import React from "react";
import PaginationSpec, {PaginationProps} from "@pfo/pf-boot-spec/boot/spec/PaginationSpec";
import {PFUIState} from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";

interface Props extends PaginationProps {
    siblingCount?: number
}

class State implements PFUIState {
    currentPage: number = 0
    itemPerPage: number = 0
}

const style = {
    handCursor: {cursor: 'pointer'}
}

const options = [
    {value: 20, label: '20'},
    {value: 50, label: '50'},
    {value: 100, label: '100'},
    {value: 500, label: '500'},
]

export const DOTS = '...';
export default class Pagination extends PaginationSpec<Props, State> {

    static defaultProps = {
        siblingCount: 1
    }

    state: State = new State();

    constructor(props: Props) {
        super(props);
        this.state.currentPage = this.props.currentPage
        this.state.itemPerPage = this.props.itemPerPage
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.itemPerPage !== this.props.itemPerPage || prevProps.currentPage !== this.props.currentPage) {
            this.setState({
                currentPage: this.props.currentPage,
                itemPerPage: this.props.itemPerPage,
            })
        }
    }

    private getTotalPage() {
        return this.props.totalPage
    }

    private onChangePagination(event: any, pageNumber: number) {
        this.setState({currentPage: pageNumber})
        if (this.props.onChangePagination) {
            this.props.onChangePagination(event, pageNumber)
        }
    }

    private onChangeItemPerPage(event: any, itemPerPage: number) {
        this.setState({itemPerPage: itemPerPage})
        if (this.props.onChangeItemPerPage) {
            this.props.onChangeItemPerPage(event, itemPerPage)
        }
    }

    private getNextButton(currentPage: number, totalPage: number) {
        let item = 0
        if (!(currentPage < totalPage)) {
            return ""
        }
        item = currentPage + 1
        return (
            <li
                style={style.handCursor}
                className={"page-item"}
                onClick={(event: any) => {
                    this.onChangePagination(event, item)
                }}
            >
                <span className="page-link"><i className="bi bi-chevron-bar-right"></i></span>
            </li>
        )
    }

    private getPrevButton(currentPage: number) {
        let item = 0
        if (!(currentPage > 1)) {
            return ""
        }
        item = currentPage - 1
        return (
            <li
                style={style.handCursor}
                className={"page-item"}
                onClick={(event: any) => {
                    this.onChangePagination(event, item)
                }}
            >
                <span className="page-link"><i className="bi bi-chevron-bar-left"></i></span>
            </li>
        )
    }

    private getPageNumber(paginationItems: Array<any>, currentPage: number) {
        let active = ""
        let disabled = ""
        return paginationItems.map(
            (item: any, key: any) => {
                active = (item === currentPage ? " active" : "")
                disabled = (item === "..." ? " disabled" : "")
                return (
                    <li key={key}
                        style={style.handCursor}
                        className={"page-item" + active + disabled}
                        onClick={(event: any) => {
                            if (item !== "..."){
                                this.onChangePagination(event, item)
                            }
                        }}
                    >
                        <span className="page-link">{item}</span>
                    </li>
                )
            })
    }

    range(start: any, end: any) {
        let length = end - start + 1;
        return Array.from({length}, (_, idx) => idx + start);
    }

    calculatePagination() {
        const totalPageCount = this.props.totalPage;
        let siblingCount = 1
        if (this.props.siblingCount) {
            siblingCount = this.props.siblingCount
        }

        const totalPageNumbers = siblingCount + 5;
        if (totalPageNumbers >= totalPageCount) {
            return this.range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(this.props.currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(this.props.currentPage + siblingCount, totalPageCount);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = this.range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = this.range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = this.range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
        return []
    }

    private getPaginationView(currentPage: number, totalPage: number, itemPerPage: number) {
        if (totalPage <= 1) {
            return ""
        }

        let paginationItems = this.calculatePagination()
        const _this = this
        return (
            <React.Fragment>
                <div className="col-auto">
                    <Select
                        options={options}
                        optionValue={"value"}
                        optionLabel={"label"}
                        value={this.state.itemPerPage}
                        isSearchable={false}
                        onChange={(event: any) => {
                            _this.onChangeItemPerPage(event, event.target.value)
                        }}
                    />
                </div>
                <div className="col-auto">
                    <nav>
                        <ul className="pagination pagination-sm">
                            {this.getPrevButton(currentPage)}
                            {this.getPageNumber(paginationItems, currentPage)}
                            {this.getNextButton(currentPage, totalPage)}
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        )
    }

    render() {
        const _props = this.props;
        return (
            <div className="table-pagination">
                <div className="row justify-content-end">
                    {this.getPaginationView(this.state.currentPage, this.getTotalPage(), _props.itemPerPage)}
                </div>
            </div>
        );
    }

}