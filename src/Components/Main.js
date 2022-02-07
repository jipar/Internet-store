import React from "react";
import { Card, Button, Nav, Navbar, NavDropdown, Form, FormControl, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "../source/products.json";
import Categories from "../source/categories"


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: Products,
            value: null,
            inpV: ''
        }
    }

btnDiscount() {
    this.setState({
        products: Products.filter((v) => {
            return(
                v.discount !== null
            )
        })
    })
}

btnAll() {
    this.setState({
        products: Products.map((v) => {
            return v
        }),
        value: null
    })
}

inpValue = (e) => {
    this.setState({
        inpV: e
    })
}

searchBtn = () => {
   let result = Products.filter((v) => {
       if (v.title.toLocaleLowerCase().indexOf(this.state.inpV.toLocaleLowerCase() !== -1))
       return v
   })
   this.setState({
       inpV: '',
       products: result
   })
}

    render() {
        return(
            <div className={'bg-primary'}>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand onClick={() => this.btnAll()} href="#">Internet App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll >
                            <Nav.Link onClick={() => this.btnDiscount()} href="#action1">Скидки</Nav.Link>
                            <NavDropdown title="Категории" id="navbarScrollingDropdown">
                                {Categories.map((v) => {
                                    return(
                                        <NavDropdown.Item onClick = {() => this.setState({value: v.id})} href="#action3">{v.title}</NavDropdown.Item>
                                    )
                                })}
                                
                            </NavDropdown>    
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                            onChange={(e) => this.inpValue(e.target.value)}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button onClick={() => this.searchBtn()} variant="outline-success">Search</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className={'container my-4 '}>
                    <div className={'row'}>
                        {
                            this.state.products.filter((b) => {
                                return(
                                    this.state.value !== null ? b.id  : true
                                )}).map((v) => {
                                return (
                                    <div className={'col-4 mt-4 p-4'}>
                                        <Card style={{ width: '18rem'}}>
                                            <Card.Img variant="top" src={v.main_image.path.original} />
                                            <Card.Body>
                                                <Card.Title className={'fz-5'}>{v.title}</Card.Title>
                                                
                                                <Button style={{padding: '10 20px'}} variant="primary">
                                                    {v.discount ? <del>{v.price}</del> 
                                                    : '' } <br/>
                                                    <span>
                                                        {v.discount ? v.price - (v.price * v.discount / 100) : v.price} сом
                                                    </span>
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;