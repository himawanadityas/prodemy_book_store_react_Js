import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

// Examples

import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container, CustomInput,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Row
} from "reactstrap";
// import FormsCustomControls from "../Controls/Examples/CustomControls";

function NamaLabel(props) {
    return <label>{props.name}</label>;
}

class FormElementsHimawan extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name :'Himawan',
            email:'himawan@yahoo.com',
            address:'Subang, Jawa Barat',
            birthdate:'1998-12-12',
            religion:'Moslem',
            gender:'Male'
        };


    }
    handleChangeName = event => {
        this.setState({name: event.target.value});
    }
    handleChangeBirth = event => {
        this.setState({birthdate: event.target.value});
    }
    handleChangeEmail = event => {
        this.setState({email: event.target.value});
    }
    handleChangeReligion = event => {
        this.setState({religion: event.target.value});
    }


    render() {
        return (
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Container fluid>
                        <Row>
                            <Col md="12">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>My Biodata</CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <NamaLabel name='Nama Saya'/>
                                                <Input type="text" name="name" id="name"
                                                       placeholder="Your Name" value={this.state.name} onChange={this.handleChangeName.bind(this)}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <NamaLabel name='Tanggal Lahir Saya'/>
                                                <Input type="date" name="birthdate" id="birthdate"
                                                       placeholder="password placeholder" value={this.state.birthdate} onChange={this.handleChangeBirth.bind(this)}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <NamaLabel name='Email Saya'/>
                                                <Input type="email" name="email" id="email"
                                                       placeholder="Your E-Mail" value={this.state.email} onChange={this.handleChangeEmail.bind(this)}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <NamaLabel name='Agama Saya'/>
                                                <CustomInput type="select" id="exampleReligion"
                                                             name="religion" value={this.state.religion} onChange={this.handleChangeReligion.bind(this)}>
                                                    <option>Select</option>
                                                    <option>Moslem</option>
                                                    <option>Protestant</option>
                                                    <option>Catholic</option>
                                                    <option>Hindu</option>
                                                    <option>Buddha</option>
                                                    <option>Konghucu</option>
                                                </CustomInput>
                                            </FormGroup>
                                            <FormGroup>
                                                <label>Gender</label>
                                                <div>
                                                    <CustomInput type="radio" id="exampleCustomRadio" name="customRadio"
                                                                 label="Male" checked={this.state.gender === 'Male'}/>
                                                    <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio"
                                                                 label="Female" checked={this.state.gender === 'Female'}/>
                                                </div>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleText">Address</Label>
                                                <Input type="textarea" name="text" id="exampleText" value={this.state.address}/>
                                            </FormGroup>
                                            <Button color="primary" className="mt-1">Submit</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}

export default FormElementsHimawan;



