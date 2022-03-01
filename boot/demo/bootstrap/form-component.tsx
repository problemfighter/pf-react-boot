import PFBSReactComponent from "@pfo/pf-boot-spec/boot/spec/common/spec-common-things";
import Container from "../../react/Container";
import Card from "../../react/card/Card";
import CardHeader from "../../react/card/CardHeader";
import CardContent from "../../react/card/CardContent";
import Row from "../../react/Row";
import Column from "../../react/Column";
import TextField from "../../react/TextField";
import CardFooter from "../../react/card/CardFooter";
import Select from "../../react/Select";


export default class FormComponent extends PFBSReactComponent<any, any> {


    render() {
        const options = [
            {value: 'chocolate', label: 'Chocolate'},
            {value: 'strawberry', label: 'Strawberry'},
            {value: 'vanilla', label: 'Vanilla'}
        ]

        return (
            <Container type={"fluid"} className={"some-class"}>
                <Card>
                    <CardHeader>Header Section</CardHeader>
                    <CardContent>
                        <Row className={"new-class"} id={"this-is-uniq-id"}>
                            <Column>
                                <Select
                                    isSearchable={false}
                                    isClearable={true}
                                    options={options}
                                    optionLabel={"label"}
                                    optionValue={"value"}
                                    label={"Select Data"}
                                    required={true}
                                    errorText={"Please Select Something"}
                                    error={false}
                                    wasValidated={true}
                                    id={"id-in-select"}
                                    helperText={"Please select any of one"}
                                />
                            </Column>
                            <Column span={6}>
                                <TextField
                                    type={"text"}
                                    label={"First Name"}
                                    name={"firstName"}
                                    error={false}
                                    wasValidated={true}
                                    errorText={"Please Enter Name"}
                                    helperText={"Please Enter valid name"}
                                    successText={"Looks Good"}
                                    required={true}
                                />
                            </Column>
                            <Column span={6}>
                                <TextField
                                    label={"Last Name"}
                                    name={"lastName"}
                                />
                            </Column>
                            <Column span={6}>
                                <TextField
                                    label={"Password"}
                                    name={"password"}
                                    type={"password"}
                                />
                            </Column>
                            <Column>
                                <TextField type={"checkbox"} label={"Yes or not"}/>
                            </Column>
                            <Column span={12}>
                                <TextField type={"textarea"} label={"Description"} required={true}/>
                            </Column>
                        </Row>
                    </CardContent>
                    <CardFooter>Footer Section</CardFooter>
                </Card>

            </Container>
        );
    }

}